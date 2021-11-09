import React from "react";
import { WeatherType } from "../../types/types";

type PropsType = {
  day: WeatherType;
};
const DailyWeather: React.FC<PropsType> = ({ day }) => {
  const date = (str: string) => {
    return new Date(str).toLocaleDateString("ru", { weekday: "long" });
  };
  return (
    <div style={{ margin: 20 }}>
      <h4>{date(day.dt_txt)}</h4>
      <h4>
        {day.main.temp > 0
          ? "+" + Math.round(day.main.temp)
          : Math.round(day.main.temp)}
      </h4>
      {day.weather[0].description}
    </div>
  );
};

export default React.memo(DailyWeather);
