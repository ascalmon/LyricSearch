import React from 'react';
import './navbar.css';

//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

//Functional Component
const Navbar = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark nav_background mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand ">{branding}</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#" className="nav-link"/>
              <i className="fas fa-question"></i>About
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"/>
              <i className="fas fa-plus"></i>Add
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"/>
              <i className="fas fa-home"></i>Home
            </li>
          </ul>
        </div>
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
