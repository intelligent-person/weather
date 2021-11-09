import axios from "axios";

export const weatherAPI = {
  getWeather(city: string) {
    return axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=7e047282154f2d3cae4515388b44599b&lang=ru&units=metric`
    );
  },
};
