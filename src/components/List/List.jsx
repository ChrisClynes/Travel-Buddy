import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import Place from '../Place/Place';

import useStyles from './styles';

const List = ({ places }) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');{/*Hooks always return an array of 2 values, left is the current State "type", right is the function to update that State "setType" can be called anything. "restaurants" is passed as the default State*/}
    const [rating, setRating] = useState('');
    


    return (
        <div className={classes.container}>
            <Typography variant="h4">Resraurants, Hotels and Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i)=> (
                    <Grid item key={i} xs={12}>
                        <Place place={place} /> {/*Pass place down as prop*/}
                    </Grid>
                ))} {/*Condition say if you have "places" only then map over them and return Grid item, xs to full size, take full 12 spaces*/}
            </Grid>
        </div>
    );
}
 export default List;
