# Read Files Sync [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

Synchronously read files from a directory.

## Install

```
npm i @cloudcmd/read-files-sync
```

## readFilesSync(path[, mode])
- `path` **string** - path to a directory
- `mode` **string** - mode

```js
const readFilesSync = require('@cloudcmd/read-files-sync');

readFilesSync('./fixture', 'utf8');
// returns
{
    a: 'hello',
    b: 'world',
}
```

## readFilesSync(path[, names, mode])
- `path` **string** - path to a directory
- `names` **array** - file names to read
- `mode` **string** - mode

```js
readFilesSync('./fixture', ['a'], 'utf8');
// returns
{
    a: 'hello',
}
```

## Related

- [fs-copy-file](https://github.com/coderaiser/fs-copy-file "fs-copy-file") - Asynchronously copies src to dest.
- [fs-copy-file-sync](https://github.com/coderaiser/fs-copy-file-sync "fs-copy-file-sync") - Synchronously copies src to dest.

## License
MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/@cloudcmd/read-files-sync.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/cloudcmd/node-read-files-sync/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/david/cloudcmd/node-read-files-sync.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[CoverageIMGURL]:           https://coveralls.io/repos/cloudcmd/node-read-files-sync/badge.svg?branch=master&service=github
[NPMURL]:                   https://npmjs.org/package/@cloudcmd/read-files-sync "npm"
[BuildStatusURL]:           https://travis-ci.org/cloudcmd/node-read-files-sync  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/cloudcmd/node-read-files-sync "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"
[CoverageURL]:              https://coveralls.io/github/cloudcmd/node-read-files-sync?branch=master

