## React Project Demo

### Major Styling Strategies In React
- CSS and SCSS Stylesheets
  - 直接使用CSS或者SCSS
- CSS Modules
  - CSS Modules 是一种 CSS 规范，默认所有的 类名 、动画名都默认作用域当前模块。
  - 为什么要用？
    - 创建模块化、可复用的CSS文件
  - 特性
    - 类名、动画名 自动添加hash值后缀，样式彼此之间不会互相污染
    - 语法几乎和 CSS 一致
    - 类名建议使用小写开头的驼峰，但是不强制
    - 支持组合类名
  - 实现
    - [css-loader](https://github.com/webpack-contrib/css-loader)
      - [CSS Modules Webpack Demo](https://github.com/css-modules/webpack-demo)
    - [react-css-loader](https://github.com/gajus/react-css-modules) / [babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules)
  - 教程
    - [github/css-modules](https://github.com/css-modules/css-modules)
    - [CSS Modules 用法教程](https://www.ruanyifeng.com/blog/2016/06/css_modules.html)
    - [CSS Modules 详解及 React 中实践](https://github.com/camsong/blog/issues/5)

- styled components
  - CSS-in-JS

- 参考
  -