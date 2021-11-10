import React from "react";
import Icon from "../../icons/Icon";
import { WeatherType } from "../../types/types";
import styles from "./dailyWeather.module.css";

type PropsType = {
  day: WeatherType;
  language: string;
};
const DailyWeather: React.FC<PropsType> = ({ day, language }) => {
  const date = (str: string) => {
    return new Date(str).toLocaleDateString(language, { weekday: "long" });
  };
  return (
    <div className={styles.day}>
      <h4>{date(day.dt_txt)}</h4>
      <h1>
        {day.main.temp > 0
          ? "+" + Math.round(day.main.temp)
          : Math.round(day.main.temp)}
      </h1>
      <div className={styles.icon}>
        <Icon main={day.weather[0].description} />
      </div>
      <div className={styles.description}>{day.weather[0].description}</div>
    </div>
  );
};

export default React.memo(DailyWeather);
