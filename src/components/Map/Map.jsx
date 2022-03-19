import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';//rating compent from core is still in developement, import from lab instead

import useStyles from './styles';

const Map = ({setCoords, setBounds, coords, places, setChildClicked}) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)'); {/*if width is larger than 600px, isMobile will be false*/}
    

    return (
        <div className={classes.mapContainer}>
          <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={'{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }'}
                onChange={(e) => {
                  setCoords({ lat: e.center.lat, lng: e.center.lng });
                  setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => setChildClicked(child)}
              >
                {/* render the pinpoints on the map based off of the places data */}
                {places.length && places.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                           !matches
                            ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            : (
                              <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                                <img
                                  className={classes.pointer}
                                  src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                />
                                <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                              </Paper>
                            )}
                        </div>
                      ))}
            </GoogleMapReact>
        </div>
    );
}
 export default Map;
