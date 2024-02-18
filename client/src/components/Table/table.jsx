import React, { memo, useCallback } from 'react'
import { AddProductIcon, Sort } from '../../icons/SvgIcons'
import FilterBox from '../Boxes/filtrerBox/FilterBox'
import { useEffect } from 'react'
import { useState } from 'react'
import '../../styles/crud.css'
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
    setFilterProducts(productsData)
 },[productsData])
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
      <div className="products--box product--Name">
        user Name
      </div>

      <div className="products--box product--count">Number</div>
      <div className="products--box product--copon">price</div>
      <div className="products--box product--controls">
      Type
      </div>
      
    </div>
    </div>
    <div className="crud__rows">
    <div className="crud__table__row  flex" 
          style={{paddingBlock:'20px'}}>

      <div className="products--box product--Name">user 1</div>

      <div className="products--box product--price">0994035074</div>
      <div className="products--box product--count">300$</div>
      <div className="products--box product--copon">decor</div>
    </div>
    <div className="crud__table__row  flex" 
          style={{paddingBlock:'20px'}}>

      <div className="products--box product--Name">user 1</div>

      <div className="products--box product--price">0994035074</div>
      <div className="products--box product--count">300$</div>
      <div className="products--box product--copon">decor</div>
    </div>
    <div className="crud__table__row  flex" 
          style={{paddingBlock:'20px'}}>

      <div className="products--box product--Name">user 1</div>

      <div className="products--box product--price">0994035074</div>
      <div className="products--box product--count">300$</div>
      <div className="products--box product--copon">decor</div>
    </div>
    <div className="crud__table__row  flex" 
          style={{paddingBlock:'20px'}}>

      <div className="products--box product--Name">user 1</div>

      <div className="products--box product--price">0994035074</div>
      <div className="products--box product--count">300$</div>
      <div className="products--box product--copon">decor</div>
    </div>
    <div className="crud__table__row  flex" 
          style={{paddingBlock:'20px'}}>

      <div className="products--box product--Name">user 1</div>

      <div className="products--box product--price">0994035074</div>
      <div className="products--box product--count">300$</div>
      <div className="products--box product--copon">decor</div>
    </div>
    <div className="crud__table__row  flex" 
          style={{paddingBlock:'20px'}}>

      <div className="products--box product--Name">user 1</div>

      <div className="products--box product--price">0994035074</div>
      <div className="products--box product--count">300$</div>
      <div className="products--box product--copon">decor</div>
    </div>
    <div className="crud__table__row  flex" 
          style={{paddingBlock:'20px'}}>

      <div className="products--box product--Name">user 1</div>

      <div className="products--box product--price">0994035074</div>
      <div className="products--box product--count">300$</div>
      <div className="products--box product--copon">decor</div>
    </div>
    <div className="crud__table__row  flex" 
          style={{paddingBlock:'20px'}}>

      <div className="products--box product--Name">user 1</div>

      <div className="products--box product--price">0994035074</div>
      <div className="products--box product--count">300$</div>
      <div className="products--box product--copon">decor</div>
    </div>
    <div className="crud__table__row  flex" 
          style={{paddingBlock:'20px'}}>

      <div className="products--box product--Name">user 1</div>

      <div className="products--box product--price">0994035074</div>
      <div className="products--box product--count">300$</div>
      <div className="products--box product--copon">decor</div>
    </div>
    <div className="crud__table__row  flex" 
          style={{paddingBlock:'20px'}}>

      <div className="products--box product--Name">user 1</div>

      <div className="products--box product--price">0994035074</div>
      <div className="products--box product--count">300$</div>
      <div className="products--box product--copon">decor</div>
    </div>
    

    </div>
        </div>
        <PaginationBox toBack={toBack} toNext={toNext} steps={steps} currentStep={currentStep}/>
    
    
  </div>
    </div>
   
  )
}

export default memo(TableBox) 