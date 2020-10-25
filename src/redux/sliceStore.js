import { configureStore } from '@reduxjs/toolkit';
import simpleCakeReducer from '../redux/simpleCake/simpleCakeSlice';

export default configureStore({
  reducer: {
    counter: simpleCakeReducer,
  },
});
