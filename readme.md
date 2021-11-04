# exec-func
Exec exported JavaScript functions directly from command line.

Comes from [run-func](https://github.com/DVLP/run-func), modified to support es module type, eg, modules with `"type": "module"` in `package.json` config.

# Installation globally

`npm i -g exec-func`

## Usage from CLI

`exec-func script.js functionName param1 param2`

## Usage in package.json

`"scripts": {
  "myFunc": "exec-func script.js myFunc param1 param2"
}`