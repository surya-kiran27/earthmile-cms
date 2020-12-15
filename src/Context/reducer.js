// Context/reducer.js

let super_user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : "";

export const initialState = {
  super_user: "" || super_user,
  loading: false,
  errorMessage: null,
};
export const initialStateEarthMiles = {
  loading: false,
  errorMessage: null,
  earth_miles: [],
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        super_user: action.payload,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        super_user: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case "REQUEST_EARTHMILES":
      return {
        ...initialState,
        loading: true,
      };

    case "REQUEST_EARTHMILES_SUCCESS":
      return {
        ...initialState,
        loading: false,
        earth_miles: action.payload,
      };
    case "REQUEST_EARTHMILES_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
export const EarthMilesReducer = (initialStateEarthMiles, action) => {
  switch (action.type) {
    case "REQUEST_EARTHMILES":
      return {
        ...initialStateEarthMiles,
        loading: true,
      };

    case "REQUEST_EARTHMILES_SUCCESS":
      return {
        ...initialStateEarthMiles,
        loading: false,
        earth_miles: action.payload,
      };
    case "REQUEST_EARTHMILES_ERROR":
      return {
        ...initialStateEarthMiles,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
