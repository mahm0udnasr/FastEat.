import { createContext, useContext, useEffect, useReducer } from "react";
import { mealReducer } from "../reducers/mealReducer.js";
import { startFetchCategories } from "../actions/mealsActions.js";

const initState = {
  categories: [],
  categoryLoading: false,
  categoryError: false,
  categoryMeals: [],
  categoryMealsLoading: false,
  categoryMealsError: false,
  meals: [],
  mealsLoading: false,
  mealsError: false,
  meal: [],
  mealLoading: false,
  mealError: false,
};

const MealContext = createContext({});

export const MealProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mealReducer, initState);
  useEffect(() => {
    startFetchCategories(dispatch);
  }, []);
  return (
    <MealContext.Provider
      value={{
        ...state,
        dispatch,
        startFetchCategories,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export const useMealContext = () => {
  return useContext(MealContext);
};
