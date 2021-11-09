import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

type PropsType = {
  setCity: any;
};
const SearchHistory: React.FC<PropsType> = ({ setCity }) => {
  // @ts-ignore
  const searchHistory = useSelector((state) => state.app.searchHistory);
  const { t } = useTranslation();
  return (
    <div>
      <h3>{t("lastSearch")}</h3>
      {searchHistory &&
        searchHistory.map((item: string) => (
          <button onClick={() => setCity(item)} key={item}>
            {item}
          </button>
        ))}
    </div>
  );
};

export default React.memo(SearchHistory);
