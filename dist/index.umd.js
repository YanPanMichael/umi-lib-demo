(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.test = factory());
}(this, function () { 'use strict';

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

  return index;

}));
