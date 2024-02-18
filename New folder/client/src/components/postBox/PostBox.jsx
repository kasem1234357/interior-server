import React from 'react'

function PostBox({data}) {
  return (
    <div className='postBox flex with-gap flex-center'>
      <div className="imgBox">
        <img src={data.imgUrl} alt="" />
      </div>
      <div className="textBox">
        <h3>{data.title}</h3>
      </div>
    </div>
  )
}

export default PostBox
