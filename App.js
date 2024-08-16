import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './FirstPage/Login';
import Register from './FirstPage/Register';
import Blog from './Dashboard/Blog';
import AboutUs from './HeaderFolder/AboutUs';
import Report from './HeaderFolder/Report';
import ZooEvents from './HeaderFolder/ZooEvents';
import ZooDonation from './Donation/ZooDonation';
import ZooLocation from './Location/ZooLocation';
import { ChakraProvider, theme } from '@chakra-ui/react';
import VideoCarousel from './components/VideoCarousel';
import { UserProvider } from './FirstPage/UserContext';
import Profile from './FirstPage/Profile';
import Booking from './ZooTicket/Booking';
import BookingForm from './ZooTicket/BookingForm';
import Cart from './ZooTicket/Cart';
import PaymentPage from './ZooTicket/PaymentPage';
import { CartProvider } from './ZooTicket/CartContext';
import Adoption from './HeaderFolder/Adoption';
import Lander from './Dashboard/Lander';
import Wticket from './ZooTicket/Wticket';
import FirebaseImg from './Firebase/FirebaseImg';
import Wchat from './Chatbot/Wchat';
import Resort from './HeaderFolder/Resort';
import Viewmore from './HeaderFolder/Viewmore';
import ViewDonations from './Donation/ViewDonations';
import MapEmbed from './Location/MapEmbed';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <ChakraProvider theme={theme}>
          <div className="App">
            <BrowserRouter>
              <Routes>

                <Route path='/' element={<Lander/>} />
                <Route path='blog' element={<Blog />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/report' element={<Report />} />
                <Route path='/events' element={<ZooEvents />} />
                <Route path='/donation' element={<ZooDonation />} />
                <Route path='/location' element={<ZooLocation />} />
                <Route path='/video' element={<VideoCarousel />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/bookingform' element={<BookingForm />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/payment' element={<PaymentPage />} />
                <Route path='/adoption' element={<Adoption />} />
                <Route path='/vlog' element={<FirebaseImg />} />
                <Route path='/wticket' element={<Wticket />} />
                <Route path='/wchat' element={<Wchat />} />
                <Route path='/resort' element={<Resort />} />
                <Route path='/view' element={<Viewmore />} />
                <Route path='/view-donations' element={<ViewDonations />} />
                <Route path='/map' element={<MapEmbed />} />

              </Routes>
            </BrowserRouter>
          </div>
        </ChakraProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
