import React, { useState } from 'react'

const AddTransaction = () => {
    const[text,setText] =useState(" ")
    const[amount,setAmount] = useState( )
  return (
    <>
      <h3> New trasaction</h3>
      <form className='form-control'>
        <div>
            <label htmlFor='text' > Text</label>
            <input 
            type='text'
            placeholder='Enter text ..'
            value={text}
            onChange={(e)=>setText(e.target.value)}
            />
        </div>
        <div className="form-control">
            <label  httmlfor="amount"> Amount  <br /> (negative - expense, positive-income)</label>
            <input 
            type='number'
            placeholder='"Enter Amount...'
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            />
        </div>
        <button className='btn'> Add transaction</button>
      </form>

   
    </> 
  )
}

export default AddTransaction
