import { useEffect, useState } from "react";

const useServices = () => {
    
    const [serviceData, setServiceData] = useState([]);
    useEffect(()=>{

        fetch('https://stormy-crag-31383.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServiceData(data)
        });
        
    }, [])

    return{
        serviceData
    }
};

export default useServices;