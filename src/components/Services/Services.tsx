import ServiceSection from "./ServiceSection"

import { services } from "@/data/services"

const Services: React.FC = () => {
    return (
        <div id="services">
            <h2 className="sr-only">Services</h2>
            {services.map((item, index) => {
                return <ServiceSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Services
