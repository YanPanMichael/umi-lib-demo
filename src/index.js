import getTest from './bar';

function index() {
  const test = getTest();
  console.log(`${test}`)
}

export default index;

// 有rollup和babel两种打包方式，rollup更简易一些
// 以下是babel的打包方式
//npx umi-lib build --cjs babel --esm babel

// --umd 将所有的依赖打包成一个文件，然后使用<script type="modules" src="" />引入
// npx umi-lib build --umd test