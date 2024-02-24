import React, { useState } from 'react'
import axios from 'axios'
function WebsitePost() {
    const [data,setData]=useState({
        title:'',
        price:"",
        type:'home'
    })
    const [loading,setLoading]=useState(false)
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

   const handleData =(dt,type)=>{
     setData(prev =>{
      return({
      ...prev,
      [type]:dt
     })})
   }
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
  
      // Preview the selected file
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      if (selectedFile) {
        reader.readAsDataURL(selectedFile);
      }
    };
    const send = ()=>{
        setLoading(true)
      axios.post ('https://interior-server-xxlm.onrender.com/api/user/images',{
        imgData:previewUrl
      }).then(res =>{
        axios.post('https://interior-server-xxlm.onrender.com/api/user/post',{
          imgUrl:res.data.url,
          ...data
          
        }).then(()=>{console.log('done'); setLoading(false)}).catch(()=>{console.log('error'); setLoading(false)})
      }).catch(()=>{console.log('error'); setLoading(false)})
    }
    return (
      <>
      <div className='main flex data-area with-gap'>
          <div className='addImg mediaBox'>
            {!previewUrl && <>
              <label className='addImg--icon' htmlFor={'dt'}><h1>+</h1></label>
          
          <p> upload data</p>
        <input className='img--file' name='dt' id='dt' type="file" onChange={handleFileChange} accept="image/*" />
            </>}
         
        {previewUrl && (
          <div>
            {file.type.includes('image') ? (
              <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%' }} />
            ) : (
              <video controls>
                <source src={previewUrl} type={file.type} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </div>
        <div className="textBox">
          <div className='grid  with-gap' style={{marginBlock:'20px',    width: "95%",
    marginInline: "auto"}}>
          <label htmlFor="">Title</label>
          <input type="text" name="" id="" defaultValue={data.title} onChange={(e)=>{handleData(e.target.value,'title')}}/>
          </div>
          <div className='grid  with-gap' style={{marginBlock:'20px',    width: "95%",
    marginInline: "auto"}}>
          <label htmlFor="">price</label>
          <input type="number" name="" id="" defaultValue={data.price} onChange={(e)=>{handleData(parseInt(e.target.value),'price')}} />
          </div>
          <div className='grid  with-gap' style={{marginBlock:'20px',    width: "95%",marginInline:'auto'}}>
          <select    name="" id="" onChange={(e)=>{handleData(e.target.value,'type')}}>
          <option value="home">منزل</option>
          <option value="restaurant">مطبخ</option>
          <option value="office">مكتب</option>
          <option value="other">اخرى</option>
        </select>
          </div>
         
          
          
        </div>
        <div className="btns">
      <button className='send' onClick={()=>{!loading &&send()}}>{loading?'loading..':'send'}</button>
      </div>
      </div>
      
      
      </>
    )
}

export default WebsitePost
