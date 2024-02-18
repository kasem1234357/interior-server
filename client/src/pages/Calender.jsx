import React, { Suspense } from 'react'
import { useState } from 'react';
import CalendarBox from '../components/Boxes/calenderBox/CalendarBox'
import useCalender from '../hooks/useCalender'
import '../styles/calendar.css'
function Calender() {
  const {currentYear,currentMonth,months} = useCalender()
  const [data,setData] =useState({
    year:currentYear,
    month:currentMonth.index
  })
  return (
    <Suspense fallback={<div className="loading_auth"> <span className="loader_auth"></span> </div>}>
    <div className='calendar flex'>
      <div className="calendar__navbar flex">
        <h1>Calendar</h1>
        <h2>{currentYear}</h2>
        <select onChange={(e)=>setData({...data,month:parseInt(e.target.value)})}  defaultValue={`${currentMonth.index}`} name="" id="">
          {months.map((month,index)=>(
            <option value={index}>{month}</option>
          ))}
        </select>
      </div>
      <div className="calendar__box secondary--bg flex">
        <CalendarBox year={data.year} month={data.month}/>
      </div>
    </div>
    </Suspense>
  )
}

export default Calender