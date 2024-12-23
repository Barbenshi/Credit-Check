import { CarItem } from "./CarItem";

export const CarList = ({ cars, handleDeleteCar }) => {
    return (
        <ul className="flex wrap car-list">
            { cars.map( ( car ) =>  <CarItem car={car} handleDeleteCar={handleDeleteCar} key={car._id}/>) }
        </ul>
    );
}