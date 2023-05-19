import { log } from "console";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { ICar } from "../models/car";
import CarCard from "./CarCard";

const api: string = 'https://carshopapp.azurewebsites.net/api/Cars';

export default function CarList() {

    const [cars, setCars] = useState<ICar[] | undefined>();

    useEffect(() => {
        fetch(api).then(x => x.json()).then(data => {
            console.log(data);

            setCars(data);
        });
    }, []);

    return (
        <>
            <h2>Car List</h2>
            <Grid container spacing={2}>
                {cars?.map((c, i) =>
                    <Grid key={i} item xs={12} sm={6} md={3}>
                        <CarCard {...c} />
                    </Grid>
                )}
            </Grid>
        </>
    );
}