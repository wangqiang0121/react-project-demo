## React Project Demo

### Major Styling Strategies In React
- React中编写样式要解决的问题
  - 模块化
  - 样式隔离

- CSS and SCSS Stylesheets
  - 直接使用CSS或者SCSS
  - BEM解决方案

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
  - https://styled-components.com/docs/basics

- 参考
  - [Styling Components In React](https://www.smashingmagazine.com/2020/05/styling-components-react/)
  - [CSS 模块化系列文章](https://juejin.im/post/6844903620261969934)
  - [Styled Components vs. CSS Stylesheets](https://getstream.io/blog/styled-components-vs-css-stylesheets/)
  - [Moving from SCSS to styled-components: Advantages and caveats](https://blog.logrocket.com/moving-from-scss-to-styled-components-advantages-and-caveats/)