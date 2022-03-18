import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';//rating compent from core is still in developement, import from lab instead

import useStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)'); {/*if width is larger than 600px, isMobile will be false*/}

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA7Ezb0q4pmxqxPGWgwxPBPrHPeq-q0T10' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e)=> {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng }); {/* onchange event shows center, bounds, and some additional data if you console.log(e), we are setting these properties to our state by passed down functions }*/}
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw }); {/*all we need are the 2 corners to build our boundary from */}
                }}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}
 export default Map;
