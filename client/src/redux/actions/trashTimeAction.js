import { CLEAR_TIME_TRASH, GENERATE_TIME_TRASH } from '../types/types';

export const generateTimeTrash = (data) => ({ type: GENERATE_TIME_TRASH, payload: data });
export const clearTimeTrash = () => ({ type: CLEAR_TIME_TRASH, payload: { trashes: [] } });

export const generateTimeTrashThunk = () => async (dispatch) => {
  const response = await fetch('/game/time');
  const result = await response.json();
  console.log('RESUUUUULT', result);
  dispatch(generateTimeTrash(result));
};

// export const clearTimeTrashThunk = () => async (dispatch) => {
//   dispatch(clearTimeTrash());
// };
