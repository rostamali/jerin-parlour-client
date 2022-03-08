import { useEffect, useState } from "react";

const useServices = () => {
    
    const [serviceData, setServiceData] = useState([]);
    useEffect(()=>{

        fetch('http://localhost:5000/services')
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