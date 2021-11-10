import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { getWeather } from "./Redux/app-reducer";
import SearchCity from "./components/SearchCity/SearchCity";
import "./utils/i18n";
import SearchHistory from "./components/SearchHistory/SearchHistory";
import ChangeLanguage from "./components/ChangeLanguage/ChangeLanguage";
const CurrentWeather = React.lazy(
  () => import("./components/CurrentWeather/CurrentWeather")
);

const App = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("Kiev");
  const [language, setLanguage] = useState("ru");
  useEffect(() => {
    dispatch(getWeather(city, language));
  }, [dispatch, city, language]);
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
      <React.Suspense fallback={"loading..."}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 50,
          }}
        >
          <SearchCity setCity={setCity} />
          <ChangeLanguage language={language} setLanguage={setLanguage} />
        </div>
        <SearchHistory setCity={setCity} />
        <CurrentWeather language={language} />
      </React.Suspense>
    </div>
  );
};

export default React.memo(App) as React.FC;
