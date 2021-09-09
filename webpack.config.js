import path from 'path'

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
}
