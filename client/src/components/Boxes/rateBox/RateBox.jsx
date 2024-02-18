import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'
import './rateBox.css'
function RateBox({input,type}) {
 const [strokeDash,setStrokeDash]= useState();
 const svgRef = useRef(null);
 useEffect(()=>{
  const svg = svgRef.current
  if(svg){
   setStrokeDash(svg.getTotalLength())
  } 
 },[])
  return (
   <div className="analystic--box secondary--bg rateBox flex flex-center">
    <h4>{type}</h4>
    <span className='rateBox__analystic__count' >{input}</span>
    
   </div>
  )
}

export default RateBox