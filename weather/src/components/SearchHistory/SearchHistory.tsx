import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import styles from "./searchHistory.module.css";

type PropsType = {
  setCity: any;
};
const SearchHistory: React.FC<PropsType> = ({ setCity }) => {
  // @ts-ignore
  const searchHistory = useSelector((state) => state.app.searchHistory);
  const { t } = useTranslation();
  return (
    <div className={styles.searchHistory}>
      <h3 className={styles.title}>{t("lastSearch")}</h3>
      <div className={styles.historic}>
        {searchHistory &&
          searchHistory.map((item: string) => (
            <button
              className={styles.city}
              onClick={() => setCity(item)}
              key={item}
            >
              {item}
            </button>
          ))}
      </div>
    </div>
  );
};

export default React.memo(SearchHistory);
