import { createSelectorCreator } from "reselect";
import {
  PRODUCTREQ_LIST_FAIL,
  PRODUCTREQ_LIST_REQUEST,
  PRODUCTREQ_LIST_SUCCESS,
  PRODUCTREQ_DELETE,
  PRODUCTREQ_PUT,
  PRODUCTREQ_POST,
  PRODUCTREQ_DELETE_FAIL,
  PRODUCTREQ_POST_FAIL,
  PRODUCT_REQ_SORT_COM_ASC,
  PRODUCT_REQ_SORT_COM_DEASC,
  PRODUCT_REQ_SORT_UPV_ASC,
  PRODUCT_REQ_SORT_UPV_DEASC,
} from "../Constants/productRequest.constants";

export const ProductReqListReducer = (
  state = { productRequests: [] },
  action
) => {
  switch (action.type) {
    case PRODUCTREQ_LIST_REQUEST:
      return { loading: true, productRequests: [] };
    case PRODUCTREQ_LIST_SUCCESS:
      return { loading: false, productRequests: action.payload };
    case PRODUCTREQ_LIST_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCTREQ_DELETE:
      return {
        ...state,
        productRequests: state.productRequests.filter(
          (x) => x._id !== action.payload._id
        ),
      };
    case PRODUCTREQ_DELETE_FAIL:
      return { ...state, error: action.payload };
    case PRODUCTREQ_POST:
      return {
        ...state,
        productRequests: [...state.productRequests, action.payload],
      };
    case PRODUCTREQ_POST_FAIL:
      return { error: action.payload };
    case PRODUCTREQ_PUT:
      return {
        ...state,
        productRequests: state.productRequests.map((x) =>
          x._id === action.payload._id ? action.payload : x
        ),
      };
    case PRODUCT_REQ_SORT_COM_ASC:
      return {
        ...state,
        productRequests: state.productRequests.sort(
          (a, b) => a.comments.length - b.comments.length
        ),
      };
    case PRODUCT_REQ_SORT_COM_DEASC:
      return {
        ...state,
        productRequests: state.productRequests.sort(
          (a, b) => b.comments.length - a.comments.length
        ),
      };
    case PRODUCT_REQ_SORT_UPV_ASC:
      return {
        ...state,
        productRequests: state.productRequests.sort(
          (a, b) => a.upvotes - b.upvotes
        ),
      };
    case PRODUCT_REQ_SORT_UPV_DEASC:
      return {
        ...state,
        productRequests: state.productRequests.sort(
          (a, b) => b.upvotes - a.upvotes
        ),
      };
    default:
      return state;
  }
};

export const FilterReducer = (state = { filters: ["All"] }, action) => {
  switch (action.type) {
    case "CHANGE_FILTERS":
      return { ...state, filters: action.payload };

    default:
      return state;
  }
};

const reqSelector = (state) => state.productReqs.productRequests;
const filterCategories = ["UI", "UX"];

export const filteredReqs = createSelectorCreator(
  [reqSelector, filterCategories],
  (reqs, categories) => {
    return reqs.filter((req) => categories.includes(req.category));
  }
);
