import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const abortCont = new AbortController()
  
      setTimeout(() => {
        fetch(url, { signal: abortCont.signal})
        .then(res => {
          if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
        .then(data => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch(err => {
          // auto catches network / connection error
          if(err.name === "AbortError"){
            console.log("fetch aborted")
          }
          else{
            setIsPending(false);
            setError(err.message);
          }
        })
      }, 10);
      
      return() => abortCont.abort()
  
    }, [url])
  
    return { data, isPending, error };
}
  export default useFetch
// export default function useFetch(url){
//     //setting up states
//     const [data, setData] = useState(null)
//     const [isPending, setIsPending] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         const abortController = new AbortController()

//         fetch(url, { signal: abortController})
//         .then(res => {
//             if(!res.ok){ //error coming back from server
//                 throw Error("Could not fetch the requested Data.")
//             }
//             return res.json()
//         })
//         .then(data => { //on success
//             setIsPending(false)
//             setData(data)
//             setError(null)
//         })
//         .catch(err =>{
//             //auto catches network/connection error
//             if(err.name === "AbortError"){
//                 console.log("Fetch Aborted, network/connection error")
//             }
//             else{
//                 setIsPending(false)
//                 setError(err.message)
//             }
//         })
//         return() => abortController.abort()
//     }, [url]) //dependancy array relys on url
//     return { data, isPending, error}
// }