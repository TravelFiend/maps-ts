module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        GOOGLE_MAPS_API_URL: process.env.GOOGLE_MAPS_API_URL
      }
    }
  }
};