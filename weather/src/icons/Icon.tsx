import React from "react";
import clear from "./img/clear.png";
import partlyCloudy from "./img/partlyCloudy.png";
import cloudy from "./img/cloudy.png";
import lightRain from "./img/partlyRain.png";
import lightSnow from "./img/snow.png";
// import rain from './img/rain.png'
// import groza from './img/groza.png'

type PropsType = {
  main: string;
};
const Icon: React.FC<PropsType> = ({ main }) => {
  if (main === "ясно" || main === "clear sky")
    return <img src={clear} alt={main} />;
  else if (
    main === "облачно с прояснениями" ||
    main === "broken clouds" ||
    main === "небольшая облачность" ||
    main === "few clouds"
  )
    return <img src={partlyCloudy} alt={main} />;
  else if (
    main === "переменная облачность" ||
    main === "пасмурно" ||
    main === "scattered clouds" ||
    main === "overcast clouds"
  )
    return <img src={cloudy} alt={main} />;
  else if (main === "небольшой дождь" || main === "light rain")
    return <img src={lightRain} alt={main} />;
  else if (main === "небольшой снег" || main === "light snow")
    return <img src={lightSnow} alt={main} />;
  console.log(main);
  return null;
};

export default React.memo(Icon);
