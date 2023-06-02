import { useParams } from "react-router-dom";
import { ICar } from "../models/car";
import { useEffect, useState } from "react";


const api: string = 'https://carshopapp.azurewebsites.net/api/Cars';

export default function Details() {
    const params = useParams();
    const carId = Number(params.id);
    const [car, setCar] = useState<ICar | undefined>();

    useEffect(() => {
        fetch(api).then(x => x.json()).then(data => {
            let car = data.find((c:ICar)=>c.id==carId);
            console.log(car);

            setCar(car);
        });
    }, []);
    return (
        <>
               <div id="details">
            <h2>{car?.name}</h2>
              <img src={car?.photo} alt={car?.name}/>
              <div id="price">Price: {car?.price}</div>
              <div className="a"><span>Make:</span> {car?.make.name}</div>
              <div className="e">
                <div><span>Model:</span> {car?.model.name}</div>
                <div>{car?.model.description}</div>
              </div>
              <div className="a"><span>Year:</span> {car?.year.date}</div>
              <div className="a"><span>Second speed:</span> {car?.secondSpeed}</div>
              <div className="a"><span>Max speed:</span> {car?.maxSpeed}</div>

              <div className="e"><span>Engine:</span>
                <div><span>Cylindres:</span> {car?.engine.cylindres}</div>
                <div><span>Fuel Consumption:</span> {car?.engine.fuelConsumption}</div>
                <div><span>Horsepower:</span> {car?.engine.horsepower}</div>
                <div><span>Type:</span> {car?.engine.typeEngine}</div>
                <div><span>Volume:</span> {car?.engine.volume}</div>
              </div>
                <div className="a"><span>Mileage:</span> {car?.mileage}</div>
             
               </div>
            
        </>
    );
}