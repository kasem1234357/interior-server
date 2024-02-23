import React, { memo, useCallback } from 'react'
import { AddProductIcon, Sort } from '../../icons/SvgIcons'
import FilterBox from '../Boxes/filtrerBox/FilterBox'
import { useEffect } from 'react'
import { useState } from 'react'
import '../../styles/crud.css'
import axiosConfig from '../../configs/axiosConfig'
import PaginationBox from '../Boxes/paginationBox/PaginationBox'
import useTable from '../../hooks/useTable'
function TableBox() {
  const [productsData,setProductsData]=useState([])
  const [filterProducts,setFilterProducts]=useState([])
  const [showModel,setShowModel] = useState(false)
  const {currentStep,recordsLength,setRecordsLength,toBack,skipsLength,toNext,steps} = useTable(10)
  
  const filter =useCallback((method,filterText)=>{
    const data = productsData.filter(task => task[method].includes(filterText))
    setFilterProducts(data)
  },[productsData])
  
  useEffect(()=>{
    axiosConfig.get('https://interior-server-xxlm.onrender.com/api/user/post').then(res =>{
      setProductsData(res.data.products)
      setFilterProducts(res.data.products)
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
    
 },[])
  return (
    <div>
       <div className="crud__table">
       <div className="crud__table__header flex">
      <span>customers Data</span>
      <div className="crud__table__header--controls flex">
        <button>{showModel && <FilterBox filter={filter} methods={['title',' tags']}/>}<span onClick={()=> setShowModel(!showModel)}>Filters</span></button>
        <button><Sort width={'20px'} color={'#fff'}/></button>
        
      </div>
    </div>
        <div className='crud__table'>
        <div className="table__header">
    
    <div className="crud__table__row crud__table__titles flex">
    <div className="products--box product--image">
        profile
      </div>
      <div className="products--box product--copon">price</div>
      <div className="products--box product--controls">
      Type
      </div>
      
    </div>
    </div>
    <div className="crud__rows">
      {filterProducts?.map(product =>(
        <div className="crud__table__row  flex" 
        style={{paddingBlock:'20px'}}>
     <div className="products--box product--image">
      <img src={product.imgUrl} alt="" srcset="" />
      
    </div>
    <div className="products--box product--count">{product.price}</div>
    <div className="products--box product--copon">{product.type}</div>
  </div>
      ))}
    
    

    </div>
        </div>
        <PaginationBox toBack={toBack} toNext={toNext} steps={steps} currentStep={currentStep}/>
    
    
  </div>
    </div>
   
  )
}

export default memo(TableBox) 