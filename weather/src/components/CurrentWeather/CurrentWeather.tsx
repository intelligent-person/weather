import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { WeatherType } from "../../types/types";
import DailyWeather from "../DailyWeather/DailyWeather";
import Icon from "../../icons/Icon";
import styles from "./currentWeather.module.css";

type PropsType = {
  language: string;
};
const CurrentWeather: React.FC<PropsType> = ({ language }) => {
  const { t } = useTranslation();
  // @ts-ignore
  const currentWeather = useSelector((state) => state.app.weather);
  // @ts-ignore
  const city = useSelector((state) => state.app.city);
  console.log(currentWeather);
  return (
    <div>
      {currentWeather && (
        <div className={styles.currentWeather}>
          <h2>{t("currentWeather")}:</h2>
          <div className={styles.today}>
            <div>
              <h2>{city}</h2>
              <h1>
                {currentWeather[0].main.temp > 0
                  ? "+" + Math.round(currentWeather[0].main.temp)
                  : Math.round(currentWeather[0].main.temp)}
                , {currentWeather[0].weather[0].description}
              </h1>
            </div>
            <div>
              <Icon main={currentWeather[0].weather[0].description} />
            </div>
          </div>
        </div>
      )}
      <h1 className={styles.weeklyWeather}>{t("weatherForWeek")}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridGap: 10,
        }}
      >
        {currentWeather &&
          currentWeather
            .filter(
              (item: WeatherType) => item.dt_txt.split(" ")[1] === "12:00:00"
            )
            .map((item: WeatherType) => (
              <DailyWeather language={language} day={item} />
            ))}
      </div>
    </div>
  );
};

export default React.memo(CurrentWeather);
