import { Types } from './actions';

const INITIAL_STATE = {
  data: [],
};

// Reducer
export default function petshopReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    // case Types.LOAD_COMPLETE:
    //   return {
    //     ...state,
    //     data: action.payload.data,
    //     totalReports: action.payload.totalReports,
    //     loading: false,
    //     error: false,
    //   };

    // case Types.LOAD_ERROR:
    //   return {
    //     ...state,
    //     data: [],
    //     totalReports: null,
    //     loading: false,
    //     error: true,
    //   };

    default:
      return state;
  }
}
