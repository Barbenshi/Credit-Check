import { Link } from "react-router-dom";

export const CarItem = ({ car, handleDeleteCar }) => {
    console.log(car)

    const { color, fuel_type, make, mileage, model, price, transmission, year, _id } = car

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price);

    return (
        <li className="car-item">
            <Link to={'/car/' + _id}>
                <div className="line"><span>Make:</span> <span>{make}</span></div>
                <div className="line"><span>Model:</span> <span>{model}</span></div>
                <div className="line"><span>Mileage:</span> <span>{mileage}</span></div>
                <div className="line"><span>Transmission:</span> <span>{transmission}</span></div>
                <div className="line"><span>Fuel Type:</span> <span>{fuel_type}</span></div>
                <div className="line"><span>Year:</span> <span>{year}</span></div>
                <div className="line"><span>Color:</span> <span>{color}</span></div>
                <div className="line price"><span>Only</span> <span>{formattedPrice}</span></div>

                <button onClick={(ev) => handleDeleteCar(ev, _id)}>Delete</button>
            </Link>
        </li>
    );
}