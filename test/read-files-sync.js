'use strict';

const path = require('path');

const readFilesSync = require('..');
const test = require('tape');
const dirFixture = path.join(__dirname, 'fixture');

test('readFilesSync: args: no', (t) => {
    t.throws(readFilesSync, /dir should be a string!/, 'should throw when no args');
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

