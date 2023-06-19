import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Notification.css';

const NotificationList = () =>
{
    const [data, setData] = useState(null);

    useEffect(()=>
    {
        const getData = async () =>
        {
            try
            {
                const response = await axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json");
                const getdata = response.data.dasbhoardPage.notifications;
                
                setData(getdata);
                
            }
            catch(error)
            {
                console.log("Error:",error);
            }
        }
        
        getData();
    },[])

    return (
        <div className='notification-div'>
          <h1 style={{color:"#fff",fontSize:"18px"}}>Notification List</h1>
          <div className='notification-area'>
          {/* <div className='notification-list'> */}
            
                    {
                    data && data.map((item)=>(
                        <div className='notification'>
                            <div className='image-container'>
                                <div className='image-div'><img src={item.pic}/>
                            </div>                 
                            </div>
                            <div className='notification-contenet'>
                                <p className='content'>{item.message}</p>
                                <p className='ago'>{item.time} ago.</p>
                            </div>
                        </div>
                    ))}           
            </div>                 
          </div>
        // </div>
      );
}

export default NotificationList;