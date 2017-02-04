module.exports = {
  dev: {
    host: 'localhost',
    port: 8080,
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
}
