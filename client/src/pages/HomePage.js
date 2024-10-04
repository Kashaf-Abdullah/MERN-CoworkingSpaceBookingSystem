import React from 'react'
import Intro from '../components/Intro'
import SearchBar from '../components/SearchBar';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Highlights from '../components/Highlight';
import Services from '../components/Services';
import FAQs from '../components/FAQs';
import About from '../components/About';
import Pricing from '../components/Pricing';
import ReviewForm from '../components/ReviewComp/ReviewForm'
import AllReview from '../components/ReviewComp/AllReview'

const HomePage = () => {
  const products = [
    { location: "New York", price: 1000, squareFeet: 800, bedroomCount: 2, bathroomCount: 1 },
    { location: "Los Angeles", price: 1200, squareFeet: 900, bedroomCount: 3, bathroomCount: 2 },
    { location: "Chicago", price: 900, squareFeet: 750, bedroomCount: 2, bathroomCount: 1 },
    // Add more products as needed
  ];
  return (
    <div style={{padding:"5rem 0"}}>
   
    <Intro/>
    <SearchBar products={products} />
    <About/>
<Highlights/>
<Services/>
{/* <ReviewForm/> */}

     
{/* <AllReview/> */}
   <Features/>
   {/* <Pricing/> */}
   <FAQs/>
   {/* <Footer/> */}
    </div>
  )
}

export default HomePage
