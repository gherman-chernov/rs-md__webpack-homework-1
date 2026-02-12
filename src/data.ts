interface WeatherItem {
  name: string,
  img: string,
  background: string,
  sound: string
}

export default [ {
    name: "rain",
    img: "/files/assets/icons/cloud-rain.svg",
    background: "/files/assets/rainy-bg.jpg",
    sound: "/files/assets/sounds/rain.mp3",
  },
  {
    name: "summer",
    img: "/files/assets/icons/sun.svg",
    background: "/files/assets/summer-bg.jpg",
    sound: "/files/assets/sounds/summer.mp3",
  },
  {
    name: "winter",
    img: "/files/assets/icons/cloud-snow.svg",
    background: "/files/assets/winter-bg.jpg",
    sound: "/files/assets/sounds/winter.mp3",
  },
] as WeatherItem[];
