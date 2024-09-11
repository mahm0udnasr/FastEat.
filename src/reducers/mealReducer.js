import {
  FETCH_CATEGORY_BEGIN,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_SUCCESS,
  FETCH_MEALS_BEGIN,
  FETCH_MEALS_SUCCESS,
  FETCH_MEALS_ERROR,
  FETCH_SINGLE_MEAL_BEGIN,
  FETCH_SINGLE_MEAL_SUCCESS,
  FETCH_SINGLE_MEAL_ERROR,
  FETCH_CATEGORY_MEALS_BEGIN,
  FETCH_CATEGORY_MEALS_SUCCESS,
  FETCH_CATEGORY_MEALS_ERROR,
} from "../actions/actions";

export const mealReducer = (currentState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_BEGIN:
      return {
        ...currentState,
        categoryLoading: true,
      };
    case FETCH_CATEGORY_ERROR:
      return {
        ...currentState,
        categoryLoading: false,
        categoryError: true,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...currentState,
        categoryLoading: false,
        categories: action.payload,
      };
    case FETCH_MEALS_BEGIN:
      return {
        ...currentState,
        mealsLoading: true,
      };
    case FETCH_MEALS_ERROR:
      return {
        ...currentState,
        mealsLoading: false,
        mealsError: true,
      };
    case FETCH_MEALS_SUCCESS:
      return {
        ...currentState,
        mealsLoading: false,
        meals: action.payload
      }
    case FETCH_SINGLE_MEAL_BEGIN:
      return {
        ...currentState,
        mealLoading: true,
      };
    case FETCH_SINGLE_MEAL_ERROR:
      return {
        ...currentState,
        mealLoading: false,
        mealError: true,
      };
    case FETCH_SINGLE_MEAL_SUCCESS:
      return {
        ...currentState,
        mealLoading: false,
        meal: action.payload
      }
    case FETCH_CATEGORY_MEALS_BEGIN:
      return {
        ...currentState,
        categoryMealsLoading: true,
      };
    case FETCH_CATEGORY_MEALS_ERROR:
      return {
        ...currentState,
        categoryMealsLoading: false,
        categoryMealsError: true,
      };
    case FETCH_CATEGORY_MEALS_SUCCESS:
      return {
        ...currentState,
        categoryMealsLoading: false,
        categoryMeals: action.payload
      }
    default:
      return currentState;
  }
};
