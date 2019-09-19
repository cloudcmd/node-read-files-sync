'use strict';

const path = require('path');

const readFilesSync = require('..');
const test = require('supertape');
const dirFixture = path.join(__dirname, 'fixture');

test('readFilesSync: args: no', (t) => {
    t.throws(readFilesSync, /dir should be a string!/, 'should throw when no args');
    t.end();
});

test('readFilesSync: args: mode not string/object', (t) => {
    const fn = () => readFilesSync('/', false);
    t.throws(fn, /mode should be string or an object!/, 'should throw when mode not string or object');
    t.end();
});

test('readFilesSync: result', (t) => {
    const result = readFilesSync(dirFixture);
    const expected = {
        a: Buffer.from('hello\n'),
        b: Buffer.from('world\n'),
    };
    
    t.deepEqual(result, expected, 'should equal');
    t.end();
});

test('readFilesSync: result: mode', (t) => {
    const result = readFilesSync(dirFixture, 'utf8');
    const expected = {
        a: 'hello\n',
        b: 'world\n',
    };
    
    t.deepEqual(result, expected, 'should equal');
    t.end();
});

test('readFilesSync: result: names', (t) => {
    const result = readFilesSync(dirFixture, ['a.txt'], 'utf8');
    const expected = {
        a: 'hello\n',
    };
    
    t.deepEqual(result, expected, 'should equal');
    t.end();
});

