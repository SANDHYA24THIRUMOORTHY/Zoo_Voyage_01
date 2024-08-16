import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Blog.css';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  const { description, social, title } = props;

  return (
    <Grid item xs={1} md={13}>
      <Paper elevation={9} sx={{ p: { xs: 3, md: 6 }, bgcolor: '#d5bdaf', position: 'relative' }}>
        <Typography variant="h6" gutterBottom>
          Upload your Vlogs
        </Typography>
        
        <Link to="/vlog"><button className='up-button-blog'>Upload</button></Link>
        
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        
        <Typography>{description}</Typography>
        
        {social.map((network) => (
          <Link
            display="block"
            variant="body1"
            href="#"
            key={network.name}
            sx={{ mb: 0.1 }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <network.icon />
              <span>{network.name}</span>
            </Stack>
          </Link>
        ))}
        
        <div className="image-container">
        <img src="https://i.pinimg.com/564x/3a/cf/e6/3acfe6e20fb150000da920999ba1a67c.jpg" alt='im1'  className="flying-image fading-image" />
        <img src="https://i.pinimg.com/236x/11/80/2e/11802edb09fad9914a5e63c95955ab54.jpg" alt='im2' className="flying-image fading-image" />
        <img src="https://i.pinimg.com/236x/23/62/4d/23624dfb46dfd18c425dd23e570ad6ee.jpg" alt='im3' className="flying-image fading-image" />
        <img src="https://i.pinimg.com/236x/f4/66/a3/f466a3529eb8ec1b0db368d6fd52ea6c.jpg" alt='im4' className="flying-image fading-image" />
        <img src="https://i.pinimg.com/236x/24/f1/a0/24f1a049698cd13fa89e8f2203d74a55.jpg" alt='im5'className="flying-image fading-image" />
        </div>
      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;
