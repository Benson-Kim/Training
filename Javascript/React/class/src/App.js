import './appstyle.css'
import data from '../src/users.json'
import Table from './Components/RenderTableList/Table';
// import Counter from './Components/useState/Counter';
import { useEffect, useRef, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'start':
      return {...state, isRunning:true}
    case 'stop':
      return {...state, isRunning:false}
    case 'reset':
      return { isRunning: false, time: 0 }
    case 'tick':
      return{...state, time: state.time+1}
    default:
      throw new Error();
  }
}

function App() {

  // const [count, setCount] = useState(0)

  // const counterInc = () => {
  //   setCount(count + 1)
  // }
  // const counterDecr = () => {
  //   setCount(count - 1)
  // }

  const initialstate = {
    isRunning: false,
    time: 0
  };


  const [state, dispatch] = useReducer(reducer, initialstate)
  const idRef = useRef(0);
  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    idRef.current = setInterval(() => dispatch({ type: 'tick' }), 1000);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <>
      <button>{state.time}s</button>
      <button onClick={()=>dispatch({type: 'start'})}>Start</button>
      <button onClick={()=>dispatch({type: 'stop'})}>Stop</button>
      <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
      {/* <Table data={data} /> */}
      {/* <Counter count={count} counterInc={counterInc} counterDecr={counterDecr} /> */}
    </>
  )
}

export default App;
