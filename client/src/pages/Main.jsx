import React, { useEffect, useState } from 'react'
import PostBox from '../components/postBox/PostBox'
import axios from 'axios'

function Main() {
    const [data,setData]= useState([])
    useEffect(()=>{
     axios.get('https://interior-server-xxlm.onrender.com/api/user/post').then(res =>{
      setData(res.data)
     })
    },[])
  return (
    <div className='main flex with-gap' style={{overflow:'auto'}}>
      {data?.products?.map(dt =>(
        <PostBox data ={dt} />
      ))}
    </div>
  )
}

export default Main
