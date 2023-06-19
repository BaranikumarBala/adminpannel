import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OrdersList.css';

const OrdersList = () =>
{
    const [list, setList] = useState(null);

    useEffect(()=>
    {
        const getList = async ()=>
        {
            try
            {
                const response = await axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json");
                const getlist = response.data.dasbhoardPage.orders;
                
                console.log(getlist);
                setList(getlist);
                
                
            }
            catch(error)
            {
                console.log("Error:",error);
            }
        }
    getList();
    },[]);

    return (
        <div className='table-container'>
            <h1>Orders List</h1>
            <div className='table'>
                <table className='table '>
                    <thead className='thead'>
                        <tr className='header-row'>
                            <th>ORDER NO.</th>
                            <th>STATUS</th>
                            <th>OPERATORS</th>
                            <th>LOCATION</th>
                            <th>DISTANCE</th>
                            <th>START DATE</th>
                            <th>EST DELIVERY DUE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        list && list.map(item=>(
                        <tr>
                            <td><b>#{item.orderNo}</b></td>
                            <td className='status-list'><div className='table-div' id={item.status}></div>{item.status}</td>
                            <td><b>{item.operators}</b></td>
                            <td><b>{item.location}</b></td>
                            <td><b>{item.distance}km</b></td>
                            <td>{item.startDate}</td>
                            <td>{item.deliveryDate}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default OrdersList;