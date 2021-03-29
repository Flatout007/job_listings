const initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case "SWITCH_LOCATION": let obj = {city: action.city, jobs: action.jobs}; return Object.assign({},obj);

    default: 
      return state
  }
};
let action = {
  type: "SWITCH_LOCATION",
  city: "remote",
  jobs: [
    {
      id: 1,
      title: "Test Job",
      company: "Github",
      type: "Full Time",
      location: "remote",
      description: "test description",
      url: "www.github.com/appacademy"
    }
  ]
};
//console.log(reducer(null,action))

export default reducer;
