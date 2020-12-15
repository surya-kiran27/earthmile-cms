import axios from "axios";
const ROOT_URL = "http://localhost:8000";

export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await fetch(`${ROOT_URL}/super-user/login`, requestOptions);
    let data = await response.json();

    if (data.super_user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data.super_user });
      localStorage.setItem("currentUser", JSON.stringify(data.super_user));
      return data;
    } else {
      dispatch({ type: "LOGIN_ERROR", error: data.message });
    }

    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}
export async function getEarthMiles(dispatch, payload) {
  try {
    dispatch({ type: "REQUEST_EARTHMILES" });
    let res = await axios.get(`${ROOT_URL}/super-user/earth-miles`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    if (res.data.success) {
      dispatch({
        type: "REQUEST_EARTHMILES_SUCCESS",
        payload: res.data.earth_miles,
      });
      return res.data.earth_miles;
    } else {
      dispatch({ type: "REQUEST_EARTHMILES_ERROR", error: res.data.message });
    }
  } catch (error) {
    dispatch({ type: "REQUEST_EARTHMILES_ERROR", error: error });
  }
}
export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
}
