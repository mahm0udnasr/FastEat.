import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/actions";

const sidebarReducer = (currentState, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...currentState,
        isSidebarOpen: true,
      };
    case CLOSE_SIDEBAR:
      return {
        ...currentState,
        isSidebarOpen: false,
      };
    default:
      return currentState;
  }
};
export default sidebarReducer;