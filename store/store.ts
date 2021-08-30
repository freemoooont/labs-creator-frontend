import { applyMiddleware, compose, createStore, Store } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import { reducer } from "./rootReducer";
import rootSaga from "./saga";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

export interface SagaStore extends Store {
  sagaTask: Task;
}

type RootState = ReturnType<typeof reducer>;

// const configureStore: MakeStore<RootState> = () => {
//   const sagaMiddleware = createSagaMiddleware();
//   const middlewares = [sagaMiddleware];
//   const enhancer =
//     process.env.NODE_ENV === "production"
//       ? compose(applyMiddleware(...middlewares))
//       : composeWithDevTools(applyMiddleware(...middlewares));
//   const store = createStore(reducer, enhancer);
//   (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
//   return store;
// };
//
// const wrapper = createWrapper<RootState>(configureStore, {
//   debug: process.env.NODE_ENV === "development",
// });
//
// export default wrapper;

const bindMiddleware = (middleware) => {
  return composeWithDevTools(applyMiddleware(...middleware));
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
