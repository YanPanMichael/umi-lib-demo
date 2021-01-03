'use strict';

function getTest () {
  return 'test';
}

function index() {
  var test = getTest();
  console.log("".concat(test));
}
// 以下是babel的打包方式
//npx umi-lib build --cjs babel --esm babel
// --umd 将所有的依赖打包成一个文件，然后使用<script type="modules" src="" />引入
// npx umi-lib build --umd test

module.exports = index;
