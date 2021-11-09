import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { getWeather } from "./Redux/app-reducer";
import SearchCity from "./components/SearchCity/SearchCity";
import "./utils/i18n";
import SearchHistory from "./components/SearchHistory/SearchHistory";
const CurrentWeather = React.lazy(
  () => import("./components/CurrentWeather/CurrentWeather")
);

const App = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("Kiev");
  useEffect(() => {
    dispatch(getWeather(city));
  }, [dispatch, city]);
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
      <React.Suspense fallback={"loading..."}>
        <SearchCity setCity={setCity} />
        <SearchHistory setCity={setCity} />
        <CurrentWeather city={city} />
      </React.Suspense>
    </div>
  );
};

export default React.memo(App) as React.FC;
