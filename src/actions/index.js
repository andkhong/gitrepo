export function itemsHasErrored(bool) {
  return {
      type: 'ITEMS_HAS_ERRORED',
      hasErrored: bool
  };
}
export function itemsIsLoading(bool) {
  return {
      type: 'ITEMS_IS_LOADING',
      isLoading: bool
  };
}

export function itemsFetchDataSuccess(items, user){
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items,
        user
    }
}

export function getREPO(url, API_KEY) {
  return dispatch => {
      dispatch(itemsIsLoading(true));
    //   fetch(url + API_KEY)
      fetch(url + API_KEY + '/issues')      
      .then(response => {
          if (!response.ok) throw Error(response.statusText);
          dispatch(itemsIsLoading(false));
          dispatch(itemsHasErrored(false))
          return response.json();
      })
      .then(items => dispatch(itemsFetchDataSuccess(items, API_KEY)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}