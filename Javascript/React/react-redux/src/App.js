import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai'
import { actions } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = (() => {
    dispatch(actions.increment())
  })
  const decrement = (() => {
    dispatch(actions.decrement)
  })
  const addBy = (() => {
    dispatch(actions.addBy(10))
  })

  return (
    <div className="bg-slate-100 h-screen flex items-center justify-center">
      <div className="mx-10 top-10 p-5 text-white rounded bg-orange-500 ">
        <h1 className="text-xl mb-2 font-semibold border-b text-center ">Counter App</h1>

        <div className="flex items-center justify-between">
          <button
            className="text-3xl" onClick={increment}><AiFillPlusSquare /></button>
          <h2>{counter}</h2>
          <button
            className="text-3xl" onClick={decrement}> <AiFillMinusSquare /> </button>
        </div>
        <div className="flex mt-2 items-center gap-4">
          <button
            className=" py-1 px-2 bg-blue-500 rounded"
            onClick={addBy}> Add by
          </button>
          <input type="text" className="w-14 py-[3px] px-2 rounded focus:outline-none text-slate-600" />
        </div>


      </div>




    </div>


  );
}

export default App;
