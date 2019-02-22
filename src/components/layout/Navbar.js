import React from 'react';
import './navbar.css';

//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

//Functional Component
const Navbar = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm bg-dark mb-5 ">
      <div className="container">
        <a href="/" className="navbar-brand ">{branding}</a>
      
      </div>
    </nav>
  );
}

// // Default Header if branding is not passed
// Navbar.defaultProps = {
//   branding: 'My App'
// }
//
// // Validates the expected type of defined props
// Navbar.propTypes = {
//   branding: PropTypes.string.isRequired
// };


export default Navbar;
