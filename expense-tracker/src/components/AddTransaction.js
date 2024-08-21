import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const[text,setText] =useState(" ")
    const[amount,setAmount] = useState( )
    const{addTransaction} = useContext(GlobalContext)

    const onSubmit=(e)=>{
        e.preventDefault()
        const newTransaction={
            id:Math.floor(Math.random()*100000000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction)
    }
  return (
    <>
      <h3> New trasaction</h3>
      <form className='form-control' onSubmit={onSubmit}>
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
