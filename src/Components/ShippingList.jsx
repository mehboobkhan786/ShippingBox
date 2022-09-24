import React, { useState } from 'react'
import ShippingForm from './ShippingForm';
import './ShippingForm.css'

function ShippingList() {
    const [items, setitems] = useState([])
    const onAddTolist = (item) => {
        console.log(items);
        const itemsCopy = [...items];
        itemsCopy.push(item);
        setitems(itemsCopy);
    }

    return (
        <div>
            <ShippingForm onAddToDoCallback={(value) => onAddTolist(value)} />

            <table>

                <thead>
                    <th>Title</th>
                    <th>Weight</th>
                    <th>Color</th>
                    <th>Place</th>

                </thead>
                <tbody>
                    {
                        items.map((item) => {
                            return (
                                <tr key={item.name}>
                                    <td>{item.name}</td>
                                    <td>{item.weight}</td>
                                    <td>
                                        <div style={{backgroundColor:item.color,width:"60px",height:"30px"}}></div>
                                    </td>
                                    <td>{item.place}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>









    )
}

export default ShippingList