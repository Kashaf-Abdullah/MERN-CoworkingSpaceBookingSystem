import React, { useState,useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
function SearchBar(props) {
  const [searchVal, setSearchVal] = useState('');
  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };
  const handleClearBtn = () => {
    setSearchVal('');
  };
  const filteredProducts = props.products.filter((product) => {
    const searchValueLower = searchVal.toLowerCase();
    const combinedString = `${product.location} ${product.price} ${product.squareFeet} ${product.bedroomCount} ${product.bathroomCount}`.toLowerCase();
    return combinedString.includes(searchValueLower);
  });


  const inputWrapStyle = {
    width: '90%',
    height: '3.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 1rem',
    borderRadius: '0.8rem',
    background: 'var(--white)',
    boxSizing: 'border-box',
    marginBottom: '1rem',
  };

  const iconStyle = {
    fontSize: '1.5rem',
    color: 'var(--black)',
  };

  const inputStyle = {
    fontSize: '1.2rem',
    color: 'var(--primary)',
    width: '100%',
    height: '100%',
    padding: '0 0 0 1rem',
    background: 'var(--white)',
    border: '1px solid var(--white)',
    outline: 'none',
    placeholder: {
      color: 'var(--primary)',
      opacity: 0.7,
    },
  };

  const dropdownStyle = {
    position: 'absolute',
    // top: '100%',
    // width: '90%',
    background: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '0.8rem',
    zIndex: 1000,
    maxHeight: '200px',
    overflowY: 'auto',
  };

  const resultsWrapStyle = {
    padding: '1rem',
    boxSizing: 'border-box',
  };

  const listItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5rem 1rem',
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
<div  style={{backgroundColor:"var(--primary)",padding:"7rem 0",height:"100%"}}>
    <Container style={{}} data-aos="fade-up">
    
    <h1>Search Meeting & Event Spaces.</h1>
    <p className='text' style={{margin:"10px 0"}}>Our beautifully designed workspaces are equipped with ergonomic furniture, high-speed internet, and modern amenities. From open-plan areas to quiet private offices, our spaces are tailored to boost productivity and foster collaboration.</p>
      <div style={inputWrapStyle}>
        <i className="fas fa-search" style={iconStyle}></i>
        <label htmlFor="product-search" id="input-label" style={{ display: 'none' }}>
           Search...
        </label>
        <input
          onChange={handleInput}
          value={searchVal}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search by Location..."
          style={inputStyle}
        />
        <i
          onClick={handleClearBtn}
          className="fas fa-times"
          style={iconStyle}
        ></i>
      </div>
      {searchVal && filteredProducts.length > 0 && (
        <div style={dropdownStyle}>
          <div style={resultsWrapStyle}>
            <ul style={{ margin: 0, padding: 0, listStyleType: 'none' }}>
              {filteredProducts.map((product, index) => (
                <li key={index} style={listItemStyle}>
                  <Nav.Link as={Link} style={linkStyle} to="/listing-submission-form">
                    {`${product.location} - $${product.price} - ${product.squareFeet || 'N/A'} sqft - ${product.bedroomCount || 'N/A'} Bed - ${product.bathroomCount || 'N/A'} Bath`}
                  </Nav.Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Container>
    </div>
  );
}

export default SearchBar