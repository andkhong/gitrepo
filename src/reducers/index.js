const initialData = {
  isLoading: false,
  hasErrored: false,
  repo: false,
  user: ''
};

export function appReducer(state = initialData, action){
  console.log(action)
  switch(action.type){
    case 'persist/REHYDRATE':
      return Object.assign({}, state, action.payload);
    case 'ITEMS_HAS_ERRORED':
    return Object.assign({}, state, {
      hasErrored: action.hasErrored
    });
  case 'ITEMS_IS_LOADING':
    return Object.assign({}, state, {
      isLoading: action.isLoading
    });
  case 'ITEMS_FETCH_DATA_SUCCESS':
    return Object.assign({}, state, {
      repo: action.items,
      user: action.user,
      isLoading: false
    });
    default: 
      return state;
  }
}