import axios from 'axios';


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// const options = {
//   params: {
//     bl_latitude: 'sw.lat',
//     tr_latitude: 'ne.lat',
//     bl_longitude: 'sw.lng',
//     tr_longitude: 'ne.lng',
//   },
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': 'b94d2856a6msh8aaea4dcc26b775p1d23bejsn65d63ac67c13'
//   }
// };//pulled directly from rapid API documentation to get restaurant data based on screen lat and lng coords for each corner of map viewport. "bl"=bottom left
    //this entire piece is used as a parameter below on getPlacesData try await call




//async call to get place data based on map location
export const getPlacesData = async (sw, ne) => {
    try {
      const { data: { data } } = await axios.get(URL, {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY
        },
      });
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };




