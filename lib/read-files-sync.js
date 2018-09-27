'uses strict';

const fs = require('fs');
const path = require('path');
const currify = require('currify');
const mkobject = require('mkobject');
const getBaseName = (name) => path.basename(name, path.extname(name));

const isUndefined =(a) => typeof a === 'undefined'
const isString = (a) => typeof a === 'string';
const isObj = (a) => typeof a === 'object';

const readSync = currify((mode, name) => fs.readFileSync(name, mode));
const join = currify((dir, name) => path.join(dir, name));

module.exports = (dir, names, mode) => {
    if (!Array.isArray(names)) {
        mode = names;
        names = null;
    }
    
    check(dir, mode);
    
    names = names || fs.readdirSync(dir);
    
    const baseNames = names.map(getBaseName);
    const values = names
        .map(join(dir))
        .map(readSync(mode))
    
    return mkobject(baseNames, values);
};

function check(dir, mode) {
    if (typeof dir !== 'string')
        throw Error('dir should be a string!');
    
    if (!isUndefined(mode) && !isString(mode) && !isObj(mode))
        throw Error('mode should be string or an object!');
}

