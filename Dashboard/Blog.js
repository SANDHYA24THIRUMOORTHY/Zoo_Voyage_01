import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
// import VlogUpload from './VlogUpload'; // Import the VlogUpload component
import './Blog.css';

const sections = [
  { title: 'ABOUT US', url: '/about'},
  { title: 'RESORT ', url: '/resort' },
  { title: 'ANIMAL AND BIRDS', url: '/video' },
  { title: 'ZOO EVENTS', url: '/events' },
  { title: 'ADOPTION', url: '/adoption' },
  { title: 'REPORT', url: '/report' },
];

const mainFeaturedPost = {
  title: 'Welcome To Zoo Voyage!',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://t4.ftcdn.net/jpg/06/16/80/53/360_F_616805346_gpoJWIkp0zpgovcjN61Of39MQ79mvTtT.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'ZOO LOCATION',
    description:
      '"Journey into the Heart of Wildlife at Our Zoo Location."',
    image: 'https://img.freepik.com/premium-photo/3d-rendering-isometric-house-christmas-transport-parks-halloween-mosque_1031432-4340.jpg?w=740',
    imageLabel: 'Image Text',
    url: '/map',
    click: 'Click for Zoo Location',
  },
  {
    title: 'DONATION',
    description:
      '"Every species saved is a victory for nature, A testament to our commitment to the wild."',
    image: 'https://img.freepik.com/free-vector/animals-standing-earth-planet_1308-128755.jpg?t=st=1721802549~exp=1721806149~hmac=532a102f362ba3ec142608e008e2048a2bd1968b00d3cd5040edf96fef4fd5f2&w=740',
    imageLabel: 'Image Text',
    url: '/donation',
    click: 'Click To Donate',
  },
];

const sidebar = {
  title: 'Follow us',
  description: 'Stay connected with us through our social media channels.',
  social: [],
};

const customTheme = createTheme({
  palette: {
    background: {
      default: 'white', 
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default function Blog() {
  return (
    <ThemeProvider theme={customTheme} className="main-background">
      <CssBaseline />

      <Container maxWidth="lg" >
        
        <Header title="Blog" sections={sections} />
        <br></br>

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          
          <Grid container spacing={4.7} sx={{ mt: 0 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
          
          
        </main>
      </Container>
      <br></br>
      <br></br>
      <Footer />
      
    </ThemeProvider>
  );
}