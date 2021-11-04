#! /usr/bin/env node

import path from 'path'
const params = process.argv.slice(4);

if (!process.argv[2]) {
  console.error('File name not provided i.e. exec-func ./index.js');
  process.exit();
}

if (!process.argv[3]) {
  console.error('Function name not provided i.e. exec-func ./index.js default');
  process.exit();
}

const modulePath = path.join(process.cwd(), process.argv[2]);
import url from 'url'
const userModule = await import(url.pathToFileURL(modulePath).href)

if (!userModule) {
  throw new Error(`Module ${userModule} does not exists`);
}
if (!userModule[process.argv[3]]) {
  throw new Error(`Function ${process.argv[3]} is not present or exported from module ${userModule}`);
}
userModule[process.argv[3]](...params);
