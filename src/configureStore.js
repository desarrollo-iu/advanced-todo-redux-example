import todoApp from './reducers';
import { createStore } from 'redux';

const configureStore = () => {
  const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
//console.log(store.getState());

export default configureStore;
