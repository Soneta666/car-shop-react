import { Alert, Box, Button, Collapse, IconButton, Snackbar, TextField, FilledInput, FormControl, InputLabel, InputAdornment } from "@mui/material";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { ILoginModel } from "../models/Login";

export default function Login() {

    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit, 
        formState: { errors },
    } = useForm<ILoginModel>();

    const onSubmit = (user: ILoginModel) => {
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
            <div className="Reg-Log">
                <Box sx={{ width: '100%' }}>
                    <Snackbar open={open} autoHideDuration={6000}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                        <Alert severity="success" sx={{ width: '100%' }}>
                            User information: username... password... !
                        </Alert>
                    </Snackbar>
                </Box>

                <h2>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField  {...register("Username")} name="Username" type="text" label="Username" variant="filled" />
                 
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

                    <Button variant="outlined" type="submit">Login</Button>
                </form>
            </div>
        </>
    );
}