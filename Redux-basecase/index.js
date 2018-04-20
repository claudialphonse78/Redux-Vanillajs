//Redux store example

//define a initial state
const initialState={
  message:"Initial message 👋"
};

//define a reducer with an initialized state & logic to handle action
function msgDisplay(state = initialState,action){
  switch(action.type){
    case 'UPDATE_MSG' :
      const newState = Object.assign({} , state, {
        message:action.message
      })
      return newState.message//howdy..
      default:
      return state.message//inital message
  }
};

//initialize store
let store = Redux.createStore(msgDisplay);

//define an action within an action creator
function updateMsg(){
  const UPDATE_MSG = 'UPDATE_MSG';
  return{
    type:UPDATE_MSG,
    message:'Howdy! I am a Redux Action😎'
  }
};

//render value of state to DOM
let valueTarget =document.getElementById('value');
function render(){
  valueTarget.innerHTML =store.getState().toString();
}
render()

//subscribe to render
store.subscribe(render)

//dispatch actions on event listeners of clicks
setTimeout( () => {
  store.dispatch(updateMsg())
}, 5000)

