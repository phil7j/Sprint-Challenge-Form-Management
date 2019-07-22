import React, {useEffect, useState} from 'react'
import {useLocalStorage} from './useLocalStorage';
import {axiosWithAuth} from './axiosWithAuth';
function ViewData() {
    const [token, setToken] = useLocalStorage('token', '');
    const [food, setFood] = useState([]);
    useEffect(()=>{
        axiosWithAuth(token).get('http://localhost:5000/api/restricted/data')
          .then( res => {
              setFood(res.data)
              console.log("DATA", res)
          })
          .catch(err => console.log("ERROR", err))
    }, [])
    return (
        <div>
            <p>Some Data Here</p>
            {!food[0]?<p>loading...</p> : food.map((item,index)=>{
                   return <div key={index}><h2>{item.name}</h2>
                        <h5>Course: {item.course}</h5>
                        <h5>Technique: {item.technique}</h5>
            </div>})}
        </div>
    )
}

export default ViewData
