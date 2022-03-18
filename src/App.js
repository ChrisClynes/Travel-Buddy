import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from '@material-ui/core';//pulled from installed dependencies

import { getPlacesData } from './api';
import Header from "./components/Header/Header.jsx";
import List from "./components/List/List.jsx";
import Map from "./components/Map/Map.jsx";
import Place from "./components/Place/Place.jsx";

const App = () => {

    const [places, setPlaces] = useState([]);//store for place data, default is empty arr
    const [coordinates, setCoordinates] = useState({});//store for coordinates, default empty object
    const [bounds, setBounds] = useState({});//boundaries for data on map, starting value null

    

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, []);//grabs current location coords on load only

    useEffect(() => {
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                console.log(data);
                setPlaces(data);
            })
    }, [coordinates, bounds]);//if dependency array empty code inside this function will only happen at the start of the application, else it updates only state values listed in array.

   return (
       <> {/*Fragments let you group a list of children without adding extra nodes to the DOM */}
            <CssBaseline /> {/*reset default paddings and sizes... to give a more consistent design  */}
            <Header />
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}> {/*Grid out of 12 spaces. Small devices use all 12 spaces, medium-large devices use 4 out 12 spaces, 8 out of 12 will be map*/}
                    <List places={places}>

                    </List>
                </Grid>
                <Grid item xs={12} md={8}> 
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>
       </>
   ); 
}

export default App;