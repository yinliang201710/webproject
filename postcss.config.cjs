module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 基于设计稿宽度的1/10
      propList: ['*'] // 需要转换的样式属性 eg:'height'
    }
  }
}
