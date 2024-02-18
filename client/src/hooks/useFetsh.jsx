import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetch_data =(method,subUrl,data)=>{
 return axios[method](`http://localhost:8800/${subUrl}`,data)
}
export const useFetsh = (method,subUrl,action,data=null)=>{
 const onSuccess =(data =>{
  console.log('fetch successed',data.data)

    action(data.data)
 })
 const onError = (error =>{
  console.log('fetch not successed',error)
 })
 return useQuery(['tasks'],()=>{return fetch_data(method,subUrl,data)},{
  onSuccess,
  onError,

});
}
