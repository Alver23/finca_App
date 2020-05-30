import axios from "axios";
import { GET_BADGES, GET_BADGE, ERROR, LOADING } from "./actionTypes";

const baseUrl = "https://finca-api.jorgevelasquez006.now.sh/trabajos";

/* export function getBadges() {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const response = await axios({ method: "get", url: `${baseUrl}` });
      const { data } = await response.data;
      dispatch({ type: GET_BADGES, payload: data });
      let total = 0;
      data.forEach((item) => (total += parseInt(item.costo)));

      var value = total;
      const formatterPeso = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      });
      console.log(formatterPeso.format(value));
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
} */
export function getBadges() {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      const response = await axios({ method: "get", url: `${baseUrl}` });
      const { data } = await response.data;
      let total = 0;
      data.forEach((item) => (total += parseInt(item.costo)));
      dispatch({ type: GET_BADGES, payload: { data, total } });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function getBadge(badgeId) {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      const response = await axios({
        method: "get",
        url: `${baseUrl}/${badgeId}`,
      });
      const { data } = await response.data;
      dispatch({ type: GET_BADGE, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function createBadge(badge) {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      await axios({ method: "post", url: `${baseUrl}`, data: badge });
      const response = await axios({ method: "get", url: `${baseUrl}` });
      const { data } = await response.data;
      dispatch({ type: GET_BADGES, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function updateBadge(badgeId, updates) {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      await axios({
        method: "put",
        url: `${baseUrl}/${badgeId}`,
        data: updates,
      });
      const response = await axios({ method: "get", url: `${baseUrl}` });
      const { data } = await response.data;
      dispatch({ type: GET_BADGES, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function deleteBadge(badgeId) {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      await axios({
        method: "delete",
        url: `${baseUrl}/${badgeId}`,
      });
      const response = await axios({ method: "get", url: `${baseUrl}` });
      const { data } = await response.data;
      dispatch({ type: GET_BADGES, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}
