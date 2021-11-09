import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { SearchType } from "../../types/types";
import { useTranslation } from "react-i18next";
import styles from "./searchCity.module.css";

type PropsType = {
  setCity: any;
};
const SearchCity: React.FC<PropsType> = ({ setCity }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  // @ts-ignore
  const searchError = useSelector((state) => state.app.searchError);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: SearchType) => {
    setCity(data.searchValue);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("searchValue", {
          required: true,
          pattern: /^[A-Za-z]+$/i,
        })}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={"Введите город"}
      />
      <input type="submit" value={"Поиск"} />
      {searchError && <p className={styles.error}>{t("uncorrectedValue")}</p>}
      {errors?.searchValue?.type === "required" && (
        <p className={styles.error}>{t("requiredError")}</p>
      )}
      {errors?.searchValue?.type === "pattern" && (
        <p className={styles.error}>{t("patternError")}</p>
      )}
    </form>
  );
};

export default React.memo(SearchCity);
