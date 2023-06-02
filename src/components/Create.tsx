import { Alert, Box, Button, Collapse, IconButton, Snackbar, TextField, FilledInput, FormControl, InputLabel, InputAdornment, Select, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { Car } from "../models/car";
import { IYear } from "../models/year";
import { IEngine } from "../models/engine";
import { IModel } from "../models/model";
import { IMake } from "../models/make";
import axios from "axios";

const api: string = 'https://carshopapp.azurewebsites.net/api/Cars';
const apiYear: string = 'https://carshopapp.azurewebsites.net/api/Years';
const apiMake: string = 'https://carshopapp.azurewebsites.net/api/Makes';
const apiModel: string = 'https://carshopapp.azurewebsites.net/api/Models';
const apiEngine: string = 'https://carshopapp.azurewebsites.net/api/Engines';

export default function Create() {

    const [years, setYears] = useState<IYear[] | undefined>();
    const [makes, setMakes] = useState<IMake[] | undefined>();
    const [models, setModels] = useState<IModel[] | undefined>();
    const [engines, setEngines] = useState<IEngine[] | undefined>();

    useEffect(() => {
        fetch(apiYear).then(x => x.json()).then(data => {
            setYears(data);
        });
        fetch(apiModel).then(x => x.json()).then(data => {
            setModels(data);
        });
        fetch(apiMake).then(x => x.json()).then(data => {
            setMakes(data);
        });
        fetch(apiEngine).then(x => x.json()).then(data => {
            setEngines(data);
        });
    }, []);

    const {
        register,
        handleSubmit, 
        formState: { errors },
    } = useForm<Car>();

    const onSubmit = (car: Car) => {
        console.log(`Car ${car} `);
        axios.post(api, car)
            .then(response => alert("Car was successfully posted!"))
            .catch(error => {
                alert("Error with posting!");
            });
    }

    return (
        <>
            <div className="form">
                {/* <Box sx={{ width: '100%' }}>
                    <Snackbar autoHideDuration={6000}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                        <Alert severity="success" sx={{ width: '100%' }}>
                            car information: username... password... !
                        </Alert>
                    </Snackbar>
                </Box> */}

                <h2>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField  {...register("name")} name="name" type="text" label="name" variant="filled" />
                    <TextField  {...register("photo")} name="photo" type="text" label="photo" variant="filled" />
                    <FormControl fullWidth variant="filled">
                        <InputLabel id="demo-simple-select-label">year</InputLabel>
                        <Select
                        {...register("yearId")}
                            labelId="demo-simple-select-label"
                            label="year">
                            {years?.map((y) =>
                                <MenuItem value={y.id}>{y.date}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <TextField  {...register("price")} name="price" type="number" label="price" variant="filled" />
                    <FormControl fullWidth variant="filled">
                        <InputLabel id="demo-simple-select-label">model</InputLabel>
                        <Select
                        {...register("modelId")}
                            labelId="demo-simple-select-label"
                            label="model">
                            {models?.map((m) =>
                                <MenuItem value={m.id}>{m.name}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth variant="filled">
                        <InputLabel id="demo-simple-select-label">make</InputLabel>
                        <Select
                        {...register("makeId")}
                            labelId="demo-simple-select-label"
                            label="make">
                            {makes?.map((m) =>
                                <MenuItem value={m.id}>{m.name}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth variant="filled">
                        <InputLabel id="demo-simple-select-label">engine</InputLabel>
                        <Select
                        {...register("engineId")}
                            labelId="demo-simple-select-label"
                            label="engine">
                            {engines?.map((e) =>
                                <MenuItem value={e.id}>{e.typeEngine}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <TextField  {...register("mileage")} name="mileage" type="number" label="mileage" variant="filled" />
                    <TextField  {...register("maxSpeed")} name="maxSpeed" type="number" label="maxSpeed" variant="filled" />
                    <TextField  {...register("secondSpeed")} name="secondSpeed" type="number" label="secondSpeed" variant="filled" />
                 

                    <Button variant="outlined" type="submit">Create</Button>
                </form>
            </div>
        </>
    );
}