import axios from "axios";
import {
  PRODUCTREQ_DELETE,
  PRODUCTREQ_DELETE_FAIL,
  PRODUCTREQ_LIST_REQUEST,
  PRODUCTREQ_LIST_SUCCESS,
  PRODUCTREQ_POST,
  PRODUCTREQ_PUT,
  PRODUCTREQ_PUT_FAIL,
  PRODUCT_REQ_SORT_COM_ASC,
  PRODUCT_REQ_SORT_COM_DEASC,
  PRODUCT_REQ_SORT_UPV_ASC,
  PRODUCT_REQ_SORT_UPV_DEASC,
} from "../Constants/productRequest.constants";
import { logout } from "./user.actions";

export const getProdReqs = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCTREQ_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "x-auth-token": `${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      "https://mern-feedbacks.herokuapp.com/productrequests",
      config
    );
    dispatch({ type: PRODUCTREQ_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.msg;
    if (message === "Token verification failed, authorization denied") {
      dispatch(logout());
    }
  }
};

export const postProdReq = (post) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "x-auth-token": `${userInfo.token}`,
      },
    };

    await axios
      .post(
        `https://mern-feedbacks.herokuapp.com/productrequests`,
        post,
        config
      )
      .then((response) => {
        console.log(response);
        dispatch({
          type: PRODUCTREQ_POST,
          payload: response.data,
        });
      });
  } catch (error) {
    const message =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.msg;
    if (message === "Token verification failed, authorization denied") {
      dispatch(logout());
    }
  }
};

export const putProdReq = (prodReq) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "x-auth-token": `${userInfo.token}`,
      },
    };

    await axios
      .put(
        `https://mern-feedbacks.herokuapp.com/productrequests/${prodReq._id}`,
        prodReq,
        config
      )
      .then((response) => {
        console.log(response);
        dispatch({
          type: PRODUCTREQ_PUT,
          payload: response.data,
        });
      });
  } catch (error) {
    dispatch({ type: PRODUCTREQ_PUT_FAIL, payload: error });
    const message =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.msg;
    if (message === "Token verification failed, authorization denied") {
      dispatch(logout());
    }
  }
};

export const deleteProdReq = (prodReq) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "x-auth-token": `${userInfo.token}`,
      },
    };

    await axios
      .delete(
        `https://mern-feedbacks.herokuapp.com/productrequests/${prodReq._id}`,
        config
      )
      .then((response) => {
        dispatch({ type: PRODUCTREQ_DELETE, payload: prodReq });
      });
  } catch (error) {
    dispatch({ type: PRODUCTREQ_DELETE_FAIL, payload: error });
    const message =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.msg;
    if (message === "Token verification failed, authorization denied") {
      dispatch(logout());
    }
  }
};

export const sortComAsc = () => (dispatch) => {
  dispatch({ type: PRODUCT_REQ_SORT_COM_ASC });
};

export const sortComDeasc = () => (dispatch) => {
  dispatch({ type: PRODUCT_REQ_SORT_COM_DEASC });
};

export const sortUpvAsc = () => (dispatch) => {
  dispatch({ type: PRODUCT_REQ_SORT_UPV_ASC });
};

export const sortUpvDeasc = () => (dispatch) => {
  dispatch({ type: PRODUCT_REQ_SORT_UPV_DEASC });
};

export const changeFilters = (filters) => (dispatch) => {
  dispatch({ type: "CHANGE_FILTERS", payload: filters });
};
