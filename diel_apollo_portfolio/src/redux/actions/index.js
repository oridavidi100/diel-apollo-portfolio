import menu from '../reducers/menu.json';
export const increment = () => ({
  type: 'INCREMENT',
});

// reducers.js
const menuReducer = (state = menu, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

export default menuReducer;
