import * as React from 'react';
import './Blog.css'; // Ensure this import is correct
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Header(props) {
  const { sections } = props;

  return (
    <React.Fragment>
      <Toolbar className="animated-toolbar" sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#000000' }}>
        
        <Typography
          component="h2"
          variant="h5"
          color="white"
          textAlign="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <p className='zoovoyage1'> ZOO VOYAGE </p>
        </Typography>
        
        <Link to='/profile' style={{ textDecoration: 'none' }}>
          <Button
            sx={{
              color: 'white',
              border: '1px solid white',

              '&:hover': {
                color: 'white',
                backgroundColor: '#6c757d',
                marginLeft: '700px'
              },
            }}
          >
            Profile
          </Button>
        </Link>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className="animated-nav"
        sx={{ justifyContent: 'space-between', overflowX: 'auto', backgroundColor: '#6c757d' }}
      >
        {sections.map((section) => (
          <Link
            key={section.title}
            to={section.url}
            className="nav-link" // Add a CSS class
            style={{ color: 'white', textDecoration: 'none', padding: '8px', flexShrink: 0, border: 'black' }}
            variant="body2"
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;