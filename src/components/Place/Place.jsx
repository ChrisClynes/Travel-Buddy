import React from 'react';
import useStyles from './styles.js';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

const Place = ({ place }) => {
    const classes = useStyles();

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg' }/*ternary if there is a place.photo, use images.large.url, otherwise use default image */
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {/* {place?.awards?.length && (
                    <Box display="flex"justifyContent="space-between" alignItems="center">
                        <img src={place.awards.images.small} alt={"award"} />
                        <Typography variant="subtitle2" color="textSecondary">number of awards: {place.awards.length - 1}</Typography>
                    </Box>
                )} */}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip}/>//chips are little grey pill shaped text boxes in material ui
                ))}
                {/*the conditional below says, if place.address exist, then "&&" or render the following  */}
                {place?.address && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon /> {place.address} {/*location pin icon */}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place.phone} {/*phone icon */}
                    </Typography>
                )}
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                        {place.is_closed == false ? "Open" : "Closed"} {/*determines if location is open or not */}
                    </Typography>
            </CardContent>
        </Card>
    );
}
 export default Place;
