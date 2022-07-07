export const getInfo = (data) => ({ type: 'GET_INFO', payload: data });

export const getInfoThunk = () => async (dispatch) => {
  const response = await fetch('/info');
  const result = await response.json();
  dispatch(getInfo(result));
};