import { useState } from "react";

function clipBoardSupported() {
    if (navigator.clipboard) {
      console.log("clipboard is supported by this browser :)");
      return true
    } else {
      console.log("clipboard is NOT supported by this browser :(");
      return false
    }
  }
  const useClipBoard = ()=>{
    const [isPremmisionAllow,setIsPremmisionAllow]=useState(false)
    const [coppedText,setCoppedText] = useState('')
    const copyText =(text,callback)=>{
        if(navigator.clipboard){
            navigator.clipboard.readText()
            navigator.clipboard.writeText(text)
            setCoppedText(text)
            callback && callback()
        }
        
    }
    const readTextFn = (callback)=>{
        if(navigator.clipboard){
            navigator.clipboard.readText()
            callback && callback()
        }
    }
     const isClibBoardEmpty = navigator.clipboard?navigator.clipboard.readText()=='':null

    return{
        isPremmisionAllow,
        clipBoardSupported,
        coppedText,
        copyText,
        readTextFn,
        isClibBoardEmpty
    }
  }
  export default useClipBoard