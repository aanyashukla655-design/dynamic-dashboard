import { createContext, useContext, useState } from "react";
import data from "../data/dashboardData.json";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState(data.categories);
  const [search, setSearch] = useState("");

  const addWidget = (categoryId, widget) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? { ...cat, widgets: [...cat.widgets, widget] }
          : cat
      )
    );
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? {
              ...cat,
              widgets: cat.widgets.filter(w => w.id !== widgetId)
            }
          : cat
      )
    );
  };

  return (
    <DashboardContext.Provider
      value={{
        categories,
        addWidget,
        removeWidget,
        search,
        setSearch
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
