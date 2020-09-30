export const Types = {
  LOAD_CLIENT: 'petshop/LOAD_CLIENT',
  LOAD_CLIENT_COMPLETE: 'petshop/LOAD_CLIENT_COMPLETE',
  LOAD_CLIENT_ERROR: 'petshop/LOAD_CLIENT_ERROR',

  LOAD_TOTAL: 'petshop/LOAD_TOTAL',
  LOAD_TOTAL_COMPLETE: 'petshop/LOAD_TOTAL_COMPLETE',
  LOAD_TOTAL_ERROR: 'petshop/LOAD_TOTAL_ERROR',
};

// Action Creators
export const Creators = {
  loadClients: (filterParams) => ({
    type: Types.LOAD_CLIENT,
    loading: true,
    filterParams,
  }),
  loadTotals: (typeRange) => ({
    type: Types.LOAD_TOTAL,
    loading: true,
    typeRange,
  }),
};
