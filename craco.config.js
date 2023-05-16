module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:4000', // Mock
    },
  },
}
