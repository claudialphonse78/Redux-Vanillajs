//Redux store example

//define an initial state
const initialState =0

//define a reducer with an intitalized state and logic to handle action
function counter(state = initialState,action){
  switch(action.type){
    case 'INCREMENT':
      const incremented =state
      return incremented + 1
    case 'DECREMENT':
      const decremented = state
      return decremented -1
      default :
      return state
  }
}


//initialize store
let store = Redux.createStore(counter);

//define actions within an action creator
function increment(){
  const INCREMENT ='INCREMENT' 
  return{
    type:INCREMENT
  }  
 }
 function decrement(){
   const DECREMENT ='DECREMENT'
   return{
     type:DECREMENT
   }
 }
//render value of state to DOM
let countTarget =document.getElementById('count');

function render(){
  countTarget.innerHTML =store.getState();
}
//subscribe to render
store.subscribe(render)

//dispatch actions on event listeners of clicks
document.getElementById('increment').addEventListener('click', function () {
  store.dispatch(increment())
})
document.getElementById('decrement').addEventListener('click', function () {
  store.dispatch(decrement())
})
