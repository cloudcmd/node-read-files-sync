'uses strict';

const fs = require('fs');
const path = require('path');
const currify = require('currify/legacy');
const mkobject = require('mkobject/legacy');
const getBaseName = (name) => path.basename(name, path.extname(name));

const readSync = currify((mode, name) => fs.readFileSync(name, mode));
const join = currify((dir, name) => path.join(dir, name));

module.exports = (dir, mode) => {
    check(dir);
    
    const names = fs.readdirSync(dir);
    const baseNames = names.map(getBaseName);
    const values = names
        .map(join(dir))
        .map(readSync(mode))
    
    return mkobject(baseNames, values);
};

function check(dir) {
    if (typeof dir !== 'string')
        throw Error('dir should be a string!');
}

