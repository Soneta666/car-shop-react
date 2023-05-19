import { Alert, Box, Button, Collapse, IconButton, Snackbar, TextField, FilledInput, FormControl, InputLabel, InputAdornment } from "@mui/material";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IRegisterModel } from "../models/Register";
import { VisibilityOff, Visibility } from '@mui/icons-material';

export default function Register() {

    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit, 
        formState: { errors },
    } = useForm<IRegisterModel>();

    const onSubmit = (user: IRegisterModel) => {
        console.log(`User ${user.Username} ${user.Password}`);
        setOpen(true);
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    return (
        <>
            <div className="Register">
                <Box sx={{ width: '100%' }}>
                    <Snackbar open={open} autoHideDuration={6000}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                        <Alert severity="success" sx={{ width: '100%' }}>
                            User information: username... password... !
                        </Alert>
                    </Snackbar>
                </Box>

                <h2>Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField  {...register("Username")} name="Username" type="text" label="Username" variant="filled" />
                    <TextField  {...register("Email")} name="Email" type="email" label="Email" variant="filled" />
                 
                    <FormControl variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                        <FilledInput
                        {...register("Password")} name="Password" 
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    
                    <TextField  {...register("PhoneNumber")} name="PhoneNumber" type="text" label="PhoneNumber" variant="filled" />
                    <TextField  {...register("Birthday")} name="Birthday" type="date" variant="filled" />
                    <TextField  {...register("Photo")} name="Photo" type="text" label="Photo" variant="filled" />
                    <TextField  {...register("FirstName")} name="FirstName" type="text" label="FirstName" variant="filled" />
                    <TextField  {...register("LastName")} name="LastName" type="text" label="LastName" variant="filled" />

                    <Button variant="contained" type="submit">Login</Button>
                </form>
            </div>
        </>
    );
}