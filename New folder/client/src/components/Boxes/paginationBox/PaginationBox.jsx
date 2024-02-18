import React from 'react'
function PaginationBox(props) {
  
  return (
    <div className="pag-area flex">
          <div className="prev-table flex" onClick={props.toBack}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={'20px'}
            >
              <g fill="#0DB8D3">
                <path d="M12.4 18.2c0-.4-.1-.7-.4-.9L7.4 13c-.5-.5-.5-1.4 0-1.9L12 6.8c.3-.2.4-.6.4-.9 0-1.1-1.3-1.7-2.1-.9l-6.8 6.2c-.6.5-.6 1.4 0 1.9l6.8 6.2c.8.5 2.1-.1 2.1-1.1zM20.4 18.2c0-.4-.1-.7-.4-.9L15.4 13c-.5-.5-.5-1.4 0-1.9L20 6.8c.3-.2.4-.6.4-.9 0-1.1-1.3-1.7-2.1-.9l-6.8 6.2c-.6.5-.6 1.4 0 1.9l6.8 6.2c.8.5 2.1-.1 2.1-1.1z"></path>
              </g>
            </svg>
          </div>
          <div className="pag-items flex">
            <div className="pag-box">{props.currentStep + 1}</div>
             of
            <div className="pag-box">{props.steps}</div>
          </div>
          <div className="next-table flex" onClick={props.toNext}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={'20px'}
            >
              <g fill="#0DB8D3">
                <path d="M12.4 18.2c0-.4-.1-.7-.4-.9L7.4 13c-.5-.5-.5-1.4 0-1.9L12 6.8c.3-.2.4-.6.4-.9 0-1.1-1.3-1.7-2.1-.9l-6.8 6.2c-.6.5-.6 1.4 0 1.9l6.8 6.2c.8.5 2.1-.1 2.1-1.1zM20.4 18.2c0-.4-.1-.7-.4-.9L15.4 13c-.5-.5-.5-1.4 0-1.9L20 6.8c.3-.2.4-.6.4-.9 0-1.1-1.3-1.7-2.1-.9l-6.8 6.2c-.6.5-.6 1.4 0 1.9l6.8 6.2c.8.5 2.1-.1 2.1-1.1z"></path>
              </g>
            </svg>
          </div>
        </div>
  )
}

export default PaginationBox
