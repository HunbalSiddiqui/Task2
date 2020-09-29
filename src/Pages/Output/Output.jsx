import React,{useEffect,useState} from 'react'
import { fetchResult } from '../../AdminAPICalls/AdminAPICalls'
import SimpleCard from '../../Components/Card'

export default function Output(props) {

    useEffect(() => {
        fetchReq()
    }, [])
    var [value,setValues] = useState(null)

    const fetchReq  = async() =>{
        var fetchedValues = await fetchResult(props.location.state)
        setValues(fetchedValues)
    }
    return (
        <div>
            {
                value ? 
                <SimpleCard fetchedInfo={value}/>
                :
                <h1>Fetching</h1>
            }
        </div>
    )
}
