import  {createStore}  from 'redux';
import reducer from '../frontend/reducer';


// export const configStore = (state = {}) => {
//     //return createStore(reducer);
// }

const store = createStore(reducer);

export default store;