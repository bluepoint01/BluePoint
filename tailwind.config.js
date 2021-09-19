module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sand: "#ffbf69",
        sky: "#92c0ff",
        sun: "#FF7469",
        ocean: "#005099",
        dirt: "#994900",
        barro: "#d88a13"
      },
      backgroundImage: theme => ({
        'car': "url('https://i.imgur.com/NM5Twpw.jpg')",
        'beach': "url('https://i.imgur.com/WuwiXIN.jpg')",
        'vans': "url('https://i.imgur.com/2ygDUJi.jpg')",
        'truck': "url('https://i.imgur.com/o41a591.jpg')",
        'hotel': "url('https://i.imgur.com/Bh7SibY.jpg')",
        'newCar': "url('https://i.imgur.com/gsmV9KV.jpg')",
        'cutCar': "url('https://i.imgur.com/BM7BZxF.jpg')",
        'chair': "url('https://i.imgur.com/Em6AOCQ.jpg')",
        'people': "url('https://i.imgur.com/korwd1H.jpg')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
