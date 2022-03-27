module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-logo' : '#c8e7ed'
      },
      gridTemplateColumns: {
        'chat-column': '100px auto 100px',
        'message-column': '50px auto 50px'
      }
    },
  },
  plugins: [],
}
