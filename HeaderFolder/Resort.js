import React, { useState } from 'react';
import { TextField, MenuItem, Button, Card, CardContent, Typography, Grid, Box, AppBar, Toolbar, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import './Resort.css';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

const wildlifeSanctuaries = [
  'Bhadra Wildlife Sanctuary, Karnataka',
  'Tadoba Andhari Tiger Reserve, Maharashtra',
  'Chinnar Wildlife Sanctuary, Kerala',
  // Add more sanctuaries as needed
];

const sanctuaryResorts = {
  'Bhadra Wildlife Sanctuary, Karnataka': [
    { 
      name: 'The River Tern Lodge', 
      place: 'Behind Ranganathaswamy Temple, Karnataka', 
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/197621480.jpg?k=ffc53b62b5b8e7da161888b1344814784af87dd4208258c02dff4e680ba3e68c&o=&hp=1',
        'https://curlytales.com/wp-content/uploads/2023/02/coverk.jpg',
        'https://lh5.googleusercontent.com/p/AF1QipOPFMOLjs8CqYLejZPU11UK0oIyjKTJUOGsIGZb=w253-h352-k-no'
      ] 
    },
    { 
      name: 'Sakrebyle Elephant Camp', 
      place: 'RGR5+HPW, Unnamed Road, Sakrebyle, Karnataka', 
      images: [
        'https://lh3.googleusercontent.com/gps-proxy/ALd4DhEe9J_4rsVWfxV6eN1DKCTD1QjUWC7TIjTLlHYnDe_jGxSSZUL26u6fFvOdjiWUjrsmvSmogyM9KxOmpp-9nbBzgrq-iJ2Lk4JN4pZQzuvuG8hirWHfpEQoWj_tKCCSD54PHiCOo-5sgCjBrJV_TvEmsudx-p2o0zn0YunU-XVBYfZgA1ffv5PZig=s204-w204-h116-p-n-k-no',
        'https://lh5.googleusercontent.com/p/AF1QipN3sUpBM5LIb5PNrREkB3qR3sP5IXbXLaEH-c30=w253-h337-k-no',
        'https://aw-d.tripcdn.com/images/0584212000d5nmzrr141D.jpg'
      ] 
    },
    { 
      name: 'Kemmannugundi Hill Resort', 
      place: 'Tq, Kemmangundi, Tarikere, Karnataka', 
      images: [
        'https://lh5.googleusercontent.com/p/AF1QipOsQ2TK34odg3laySCAGip3aQ4cxgJKR5XwInmc=w253-h189-k-no',
        'https://lh6.googleusercontent.com/proxy/fT4unLk2u1OGeS2OEkAdJcX_RcpuwSH0O9vyxlZiIKweBBIkc51yM_0Rc-6rvx3eMcAlDZbZk_s8a6wi0dGn9kACF5NtkQ2ymZKcXHnCnXEvEe9cuK7paztCpAz66VKxwuC_jedgJkZkR9X4ae2ryraZalIkqk8=w253-h118-k-no',
        'https://lh5.googleusercontent.com/p/AF1QipNQl6alBAQNZEAOF55_Hwa_J4RXaQvF-ZMCNuC6=w253-h541-k-no'
      ] 
    },
  ],
  'Tadoba Andhari Tiger Reserve, Maharashtra': [
    { 
      name: 'Erisha Tadoba', 
      place: 'Chandrapur-Moharli (Tadoba Road) Chandrapur-Moharli Road, Agarzari, 442404 Mohurli', 
      images: [
        'https://r1imghtlak.ibcdn.com/5961e0c276ce11ec9d6c0a58a9feac02.jpg?downsize=634:357',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/327217270.jpg?k=8f602a3a1cbf155d7e0f3c5f1db98352b82070f784bf400d94cca02f2c713482&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/327398085.jpg?k=f39a60e5db7f99f1a55e2cccfc777f7dd4a22926eec995bc00d16821a3c8b2fe&o=&hp=1'
      ] 
    },
    { 
      name: 'Avadale Tadoba', 
      place: 'Saras Resort, Near the Main Entrance Gate Of Tadoba Andhari Tiger Reserve(Tadoba Road) 442404 Mohurli', 
      images: [
        
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/444249894.jpg?k=7873fac9d301cd880f3b84fe02634c484e094821ba77556e0b5b02dbc7d441bb&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/444254313.jpg?k=ead77482ec776cc80f76a028a3ee121b019745f103b6d084dabdf1abbe3175e0&o=&hp=1',
        'https://content.skyscnr.com/available/1147517709/1147517709_WxH.jpg'
      ] 
    },
    { 
      name: 'Red Earth Tadoba', 
      place: 'Pimpalkutt, Zarri gate, Chandrapur-Moharli Road, Chandrapur district, Maharashtra', 
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/155571053.jpg?k=ecf636f276374947300e265168ba232710158f7edaa45e8efe4e532b787a596b&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/155571001.jpg?k=ef1eda4136b887e1a900ef66de53b90ad760252e571ca9ad7b554061ca08fc64&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/390424877.jpg?k=fb9e638056915adb95fc1a350fef29338ddf7b4e7038fb248ca2a34dafc66ba1&o=&hp=1'
      ] 
    },
  ],
  'Chinnar Wildlife Sanctuary, Kerala': [
    { 
      name: 'Misty Range Resorts', 
      place: 'Munnar - Udumalpet Rd, near Karimutty Waterfalls, Karimutty, Marayoor, Kerala', 
      images: [
        'https://lh3.googleusercontent.com/p/AF1QipMiSkXiIIhcAKtqGvrMzW-1fES9aUsg6k5azWUk=w287-h192-n-k-rw-no-v1',
        'https://lh5.googleusercontent.com/p/AF1QipMVcjhClaoGaTnV90NNfYetgx7vnaW6FnYTssRm=w253-h168-k-no',
        'https://lh5.googleusercontent.com/p/AF1QipNlnYWcG5oCEkx9i4GIa4qwDhJx2n2qnNxkhbZX=w253-h168-k-no'
      ] 
    },
    { 
      name: 'Moon Wings Mountain Resort', 
      place: 'VEABEAS COMFORTS, C/O, PO, near Pattysery dam, G.N Puram, Kanthalloor, Kerala', 
      images: [
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/04/dd/d4/caption.jpg?w=300&h=200&s=1',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/04/e5/f6/3-room-apartment.jpg?w=1200&h=-1&s=1',
        'https://lh5.googleusercontent.com/p/AF1QipMy6yBtG_tqKEHf6_YzX7eRZdr1ZvPmX3S8dyCI=w253-h149-k-no'
      ] 
    },
    { 
      name: 'Marayoor Holidays', 
      place: 'SH17, opposite of Post Office, Marayoor, Kerala 685620', 
      images: [
        'https://images.trvl-media.com/lodging/40000000/39200000/39200000/39199931/ec598d7b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207319900.jpg?k=3517e4e06e706a8d30b864250f10a0effbc4592b823b6d399eeb12b42b883349&o=&hp=1',
        'https://lh5.googleusercontent.com/p/AF1QipO1Q9lziqgA8dd5VWCM2TYy8VWBz5gCPUsMEBfl=w253-h189-k-no'
      ] 
    },
  ],
};

const defaultCarouselImages = [
  'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  'https://www.annairesorts.com/images/Home/Restaurants/top/1.jpg',
  'https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201903190849143310-69e4e0bc5b5511e9bf4e0242ac110002.jpg?downsize=634:357'
];

function Resort() {
  const [selectedSanctuary, setSelectedSanctuary] = useState('');
  // eslint-disable-next-line
  const [selectedResort, setSelectedResort] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [numRooms, setNumRooms] = useState(1);

  const handleSanctuaryChange = (event) => {
    setSelectedSanctuary(event.target.value);
    setSelectedResort('');
  };

  const handleResortSelect = (resort) => {
    setSelectedResort(resort);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Wildlife Resort Booking
          </Typography>
        </Toolbar>
      </AppBar>
      <main className="resort-container">
        <Container className='resort-box'>
          <Box my={4}>
            <Typography variant="h5" gutterBottom className='search-resort'>
              Search for Resorts
            </Typography>
            <br></br>
            <Grid container spacing={2} className="search-container">
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  select
                  label="Select Wildlife Sanctuary"
                  value={selectedSanctuary}
                  onChange={handleSanctuaryChange}
                  fullWidth
                  variant="outlined"
                >
                  {wildlifeSanctuaries.map((sanctuary) => (
                    <MenuItem key={sanctuary} value={sanctuary}>
                      {sanctuary}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  type="date"
                  label="Select Date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  select
                  label="Number of Rooms"
                  value={numRooms}
                  onChange={(e) => setNumRooms(e.target.value)}
                  fullWidth
                  variant="outlined"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Box>

          {selectedSanctuary ? (
            <Box my={4}>
              <Typography variant="h5" gutterBottom>
                Resorts in {selectedSanctuary}
              </Typography>
              <br></br>
              <Grid container spacing={2}>
                {sanctuaryResorts[selectedSanctuary]?.map((resort, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className="resort-card" onClick={() => handleResortSelect(resort)}>
                      <Carousel className="resort-carousel">
                        {resort.images.map((image, index) => (
                          <img key={index} src={image} alt={`resort ${index + 1}`} className="carousel-image" />
                        ))}
                      </Carousel>
                      <CardContent>
                        <Typography variant="h6">{resort.name}</Typography>
                        <Typography variant="body2">{resort.place}</Typography>
                        <Link to="/view"><Button variant="contained" color="primary" className="view-more-button">
                          View More
                        </Button></Link>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : (
            <Box my={4}>
              <Carousel className="default-carousel">
                {defaultCarouselImages.map((image, index) => (
                  <img key={index} src={image} alt={`default ${index + 1}`} className="carousel-image" />
                ))}
              </Carousel>
            </Box>
          )}
        </Container>
      </main>

      <Box mt={4}>
        <AppBar position="static" className="footer">
          <Toolbar>
            <Typography variant="body1" style={{ flexGrow: 1 }}>
              © 2024 Wildlife Resort Booking
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Resort;