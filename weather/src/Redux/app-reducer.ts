import { ThunkAction } from "redux-thunk";
import { weatherAPI } from "../api/api";
import { AppStateType } from "./redux-store";
import { WeatherType } from "../types/types";

const SET_WEATHER = "SET_WEATHER";
const SET_SEARCH_ERROR = "SET_SEARCH_ERROR";

let initialState = {
  weather: null as Array<WeatherType> | null,
  searchHistory: [] as Array<string>,
  searchError: false as boolean,
  city: "Kiev" as string,
};
type InitialStateType = typeof initialState;
const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_WEATHER:
      let repeat = state.searchHistory.includes(action.city);
      let length = state.searchHistory.length;
      if (length < 10) {
        if (repeat) {
          return { ...state, weather: action.weather.list, city: action.city };
        } else {
          return {
            ...state,
            weather: action.weather.list,
            searchHistory: [action.city, ...state.searchHistory],
            city: action.city,
          };
        }
      } else {
        if (repeat) {
          return { ...state, weather: action.weather.list, city: action.city };
        } else {
          return {
            ...state,
            weather: action.weather.list,
            searchHistory: [action.city],
            ...state.searchHistory.slice(0, 8),
            city: action.city,
          };
        }
      }
    case SET_SEARCH_ERROR:
      return { ...state, searchError: action.isError };
    default:
      return state;
  }
};

// ACTION CREATOR________________________________
type ActionTypes = SetWeatherActionType | SetSearchErrorActionType;

type SetWeatherActionType = {
  type: typeof SET_WEATHER;
  weather: any;
  city: string;
};
const setWeather = (weather: any, city: string): SetWeatherActionType => ({
  type: SET_WEATHER,
  weather,
  city,
});

type SetSearchErrorActionType = {
  type: typeof SET_SEARCH_ERROR;
  isError: boolean;
};
export const setSearchError = (isError: boolean): SetSearchErrorActionType => ({
  type: SET_SEARCH_ERROR,
  isError,
});

// THUNK_____________________________
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>;
export const getWeather =
  (city: string): ThunkType =>
  async (dispatch) => {
    try {
      let response = await weatherAPI.getWeather(city);
      dispatch(setWeather(response.data, city));
      dispatch(setSearchError(false));
    } catch (err: any) {
      dispatch(setSearchError(true));
    }
  };

export default appReducer;
