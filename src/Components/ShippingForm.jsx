import React, { useState } from 'react'
import './ShippingForm.css'

function ShippingForm(props) {
  const [name, setname] = useState("");
  const [weight, setweight] = useState();
  const [color, setcolor] = useState();
  const [place, setplace] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      name:name,
      weight:weight,
      color:color,
      place:place
    }
    props.onAddToDoCallback(data);
  }


  return (
    <div className='hey'>
      <hr />
      <h1>Shipping Form</h1>
      <hr />
      <form onSubmit={handleSubmit} method='post'>
        <label>Item Name: </label><input type='text' placeholder='Item Name' name='name' value={name} onChange={(e)=>setname(e.target.value)} /><br /><br />
        <label>Item Number: </label><input type='number' placeholder='Item Weight' name='weight' value={weight} onChange={(e)=>setweight(e.target.value)} /><br /><br />
        <label>Color of Item: </label><input type='color' style={{ width: 119, height: 45 }} placeholder='Item Color' name='color' value={color} onChange={(e)=>setcolor(e.target.value)} /><br /><br />
        <label>Shipping place: </label><input type='text' placeholder='Shipping Place' name='place' value={place} onChange={(e)=>setplace(e.target.value)} /><br /><br />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default ShippingForm