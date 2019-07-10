const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const { createStore } = Redux;
//or var createStore = Redux.createStore;
//or import { createStore } from 'redux';

const store = createStore(counter);

const render = () => {
  document.body.innerHTML = store.getState();
};

store.subscribe(render);
render();

document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});
