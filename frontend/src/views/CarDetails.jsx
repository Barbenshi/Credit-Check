import { useEffect, useState } from "react";
import { carService } from "../services/car.service";
import { useParams } from "react-router-dom";

export const CarDetails = () => {
    const [car, setCar] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        console.log("fetching cars");
        
        fetchCar()
    })

    const fetchCar = async () => {
        const fetechedCar = await carService.getById(id);
        setCar(fetechedCar);
    }


    if (!car) {
        return <div>Loading Car...</div>
    }

    const { color, fuel_type, make, mileage, model, price, transmission, year, _id } = car

    return (
        <div>
            {make}
            {year}
        </div>
    );
}