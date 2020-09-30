import { Types } from './actions';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  totalData: {
    general: 0,
    expense: 0,
    revenue: 0,
    services: {
      shower: 0,
      appointment: 0,
      medication: 0,
    },
  },
};

// Reducer
export default function petshop(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_CLIENT:
      return {
        ...state,
        data: [],
        loading: true,
      };

    case Types.LOAD_CLIENT_COMPLETE:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };

    case Types.LOAD_CLIENT_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: true,
      };

    case Types.LOAD_TOTAL:
      return {
        ...state,
        totalData: {
          general: 0,
          expense: 0,
          revenue: 0,
          services: {
            shower: 0,
            appointment: 0,
            medication: 0,
          },
        },
        loading: true,
      };

    case Types.LOAD_TOTAL_COMPLETE:
      return {
        ...state,
        totalData: action.payload.totalData,
        loading: false,
        error: false,
      };

    case Types.LOAD_TOTAL_ERROR:
      return {
        ...state,
        totalData: {},
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}
