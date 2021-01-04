import getTest from './bar';
import ButtonCom from './button';

function index() {
  const test = getTest();
  console.log(`${test}`)
  const btn = ButtonCom();
  console.log(btn);
}

export default index;

// 有rollup和babel两种打包方式，rollup更简易一些
// 以下是babel的打包方式
//npx umi-lib build --cjs babel --esm babel

// --umd 将所有的依赖打包成一个文件，然后使用<script type="modules" src="" />引入
// npx umi-lib build --umd test