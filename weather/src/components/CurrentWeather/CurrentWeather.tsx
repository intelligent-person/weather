import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { WeatherType } from "../../types/types";
import DailyWeather from "../DailyWeather/DailyWeather";

const CurrentWeather = () => {
  const { t } = useTranslation();
  // @ts-ignore
  const currentWeather = useSelector((state) => state.app.weather);
  // @ts-ignore
  const city = useSelector((state) => state.app.city);
  console.log(currentWeather);
  return (
    <div>
      {currentWeather && (
        <div>
          <h3>{t("currentWeather")}:</h3>
          <strong>{city} </strong>
          {currentWeather[0].main.temp > 0
            ? "+" + Math.round(currentWeather[0].main.temp)
            : Math.round(currentWeather[0].main.temp)}
          , {currentWeather[0].weather[0].description}
        </div>
      )}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}
      >
        {currentWeather &&
          currentWeather
            .filter(
              (item: WeatherType) => item.dt_txt.split(" ")[1] === "12:00:00"
            )
            .map((item: WeatherType) => <DailyWeather day={item} />)}
      </div>
    </div>
  );
};

export default React.memo(CurrentWeather);
