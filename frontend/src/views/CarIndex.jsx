import { useEffect, useState } from "react";
import { carService } from "../services/car.service";
import { CarList } from "../components/CarList";

export const CarIndex = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, [])
    
    const fetchCars = async () => {
        const fetchedCars = await carService.query();
        setCars(fetchedCars)
    }

    const handleDeleteCar = async (ev, carId) => {
        ev.stopPropagation();
        await carService.remove(carId);
        setCars((prevCars) => prevCars.filter(({_id}) => _id !== carId))
    }

    if (!cars.length) {
        return <div>Loading Cars...</div>
    }

    return (
        <>
            <div>
                List of items view
                <CarList cars={cars} handleDeleteCar={handleDeleteCar} />
            </div>
        </>
    );
}