export const Types = {
  LOAD: 'petshop/LOAD',
  LOAD_COMPLETE: 'petshop/LOAD_COMPLETE',
  LOAD_ERROR: 'petshop/LOAD_ERROR',
};

// Action Creators
export const Creators = {
  loadClients: (filterParams) => ({
    type: Types.LOAD,
    loading: true,
    filterParams,
  }),
};
