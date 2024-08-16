import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={1} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' , backgroundColor: '#d6ccc2', '&:hover': {
        transform: 'scale(1.02)'}, }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h6" color="#450920">
              {post.title}
            </Typography>
            <br></br>
            <Typography variant="subtitle" paragraph>
              {post.description}
            </Typography>
            <Link to={post.url}>
              <Button
              size="medium"
              sx={{
                color: 'white',
                 border: '1px solid white',

                 backgroundColor: '#66666e',
                 '&:hover': {
                  color: 'white',
                  backgroundColor: '#9999a1',
                  border: '#B69E4A'
                },
              }}
            >
              {post.click}
            </Button>
            </Link>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;