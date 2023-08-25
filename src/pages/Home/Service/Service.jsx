import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-blue-rho.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="mt-2 bg-base-200">
            <div className="text-center ">
                <h3 className="text-2xl font-bold text-orange-600">Services</h3>
                <h2 className="text-5xl">Our Service area</h2>
                <p>the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline btn-error ">More Services</button>
            </div>
        </div>
        
    );
};

export default Service;