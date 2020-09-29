import { Types } from './actions';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

// Reducer
export default function petshop(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        loading: true,
      };

    case Types.LOAD_COMPLETE:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };

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
