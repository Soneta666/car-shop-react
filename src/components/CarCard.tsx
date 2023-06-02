import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ICar } from '../models/car';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import axios from 'axios';


const api: string = 'https://carshopapp.azurewebsites.net/api/Cars/';

export default function CarCard({id, name, photo, price, model} : ICar) {
  const Mydelete = ()=> {
    console.log("huyhg");
      axios.delete(api+id)
          .then(response => alert("Car was successfully deletedd!"))
          .catch(error => {
              alert("Error with deleting!");
          });
};
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link  className="cardLink" to={"/details/"+id}>
      <CardMedia
        sx={{ height: 140 }}
        image={photo}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {model.description}
        </Typography>
      </CardContent>
    </Link>
      <CardActions>
      <IconButton onClick={Mydelete} sx={{ p: 0 }}><Delete/></IconButton>
      </CardActions>
    </Card>
  );
}