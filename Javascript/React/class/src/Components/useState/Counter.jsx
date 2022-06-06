import React from 'react'

const Counter = ({ count, counterInc, counterDecr}) => {
  return (
      <div>
          <button onClick={counterInc} >+</button>
          <h1>{count}</h1>
          <button onClick={counterDecr} >-</button>
    </div>
  )
}

export default Counter