import { API } from "../backend"

export const fetchResult = (reqObj) =>{

    return fetch(`${API}`,
    // header info
    {
        method : "POST",
        headers :{
        Accept:"Application/json",
        "Content-Type":"application/json",
        },
        body: JSON.stringify(reqObj)
    })
    .then(res=>{
        return res.json()
    })
    .catch(err=>{
        return err
    })
}