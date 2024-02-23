import React, { Suspense, useEffect, useState } from 'react'
import RateBox from '../components/Boxes/rateBox/RateBox'
import Table from '../components/Table/table'
import { rateData } from './rateData'
import '../styles/feed.css'
import axios from 'axios'
function Dashboard() {
  const [data,setData] = useState({})
  useEffect(()=>{
    axios.get('https://interior-server-xxlm.onrender.com/api/user').then(res =>{
      setData(res.data[0])
    })
  },[])
  return (
    <Suspense fallback={<div className="loading_auth"> <span className="loader_auth"></span> </div>}>

<div className='feed'>
<div className="feed__text">
    <h2>Hello, Kasem Alolo</h2>
     <span> this is your Dashboard</span>
   </div>
   <div className="feed__content">
   <div className="feed__content__Box2 flex wrap ">
       
        {data &&<RateBox input={data?.visits} type={'Visits'}/>}
        {data &&<RateBox input={data?.totalCustomers} type={'totalCustomers'}/>}
        {data &&<RateBox input={data?.totalSalery} type={'totalSalery'}/>}
      
     </div>
     <Table/>
   </div>


      </div>


    </Suspense>
  
  
  )
}

export default Dashboard
