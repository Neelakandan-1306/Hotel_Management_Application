import React from "react";
import "./Home.css";
import img1 from '../assets/raffles_hotels.jpg';
import img2 from '../assets/raffles_info.jpg';
import logo from '../assets/Screenshot 2023-09-04 145038.jpg';
import roomimg from '../assets/room.jpg';
import guestimg from'../assets/guest.jpg';
import bookimg from '../assets/hotel-booking.png';
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
// Import the social media icons from the web search results
// import facebookIcon from '^1^';
// import instagramIcon from '^2^';
// import twitterIcon from '^3^';
// import youtubeIcon from '^4^';

// A function component that renders the header
function Header() {
  const navigate = useNavigate();
  const handleBookClick = () => {
    // Push the Reservation component path to the history object
    navigate("/")
  };
  return (
    
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="buttons">
        <button className="button" onClick={handleBookClick}>LOGOUT</button>
      </div>
    </div>
  );
}

// A function component that renders the main content
function Main() {
  return (
    <div className="main">
      <img src={img1} alt="image1" className="image1" />
      <img src={img2} alt="image2" className="image2" />
    </div>
  );
}

// A function component that renders the room card
function RoomCard() {
  const navigate = useNavigate();
  const handleroombuttonchange = () => {
    // Push the Reservation component path to the history object
    navigate("/room")
  };
  const handleguestbuttonchange = () => {
    // Push the Reservation component path to the history object
    navigate("/guest")
  };
  const handlereservationbuttonchange = () => {
    // Push the Reservation component path to the history object
    navigate("/reservation")
  };
  
  return (
    
    <div className="roomcard">
      {/* Move the book image and button to the first position */}
      <img src={bookimg} alt="bookimg" className="bookimg" />
      <img src={roomimg} alt="roomimg" className="roomimg" />
      <img src={guestimg} alt="guestimg" className="guestimg" />
      {/* Add the .btnfos-3 class to apply the button styles */}
      <button className="bookbutton btnfos-3" onClick={handlereservationbuttonchange}>
        RESERVATIONS
      </button>
      {/* Move the guest image and button to the second position */}
      <button className="roombutton btnfos-3" onClick={handleroombuttonchange}>
        ROOMS
      </button>
      {/* Add the .btnfos-3 class to apply the button styles */}
      <button className="guestbutton btnfos-3" onClick={handleguestbuttonchange}>
        GUESTS
      </button>
      {/* Move the room image and button to the third position */}
    </div>
  )
}

// A function component that renders the main content below
function Maindown() {
  return (
    <div>
       <RoomCard />
    </div>
  )
}

// A function component that renders the footer
function Footer() {
  // Use the useState hook to store the hotel details
  const [hotel, setHotel] = React.useState(null);

  // Use the useEffect hook to fetch the hotel details from the backend
  React.useEffect(() => {
    // Use the fetch API to make a GET request to the backend URL
    fetch("http://localhost:8080/api/hotels/3")
      .then(response => response.json()) // Parse the response as JSON
      .then(data => setHotel(data)) // Set the hotel state with the data
      .catch(error => console.error(error)); // Handle any errors
  }, []); // Pass an empty dependency array to run only once

  return (
    <div className="footer">
      {/* Check if the hotel state is not null */}
      {hotel && (
        // Render the hotel details in a div element
        <div className="hotel-details">
          {/* Render the hotel name in a h3 element */}
          <h3>{hotel.name}-CONTACT DETAILS</h3>
          {/* Render the hotel address in a p element */}
          <p>{hotel.address}</p>
          {/* Render the hotel phone in a p element */}
          <p>{hotel.phone}</p>
          {/* Render the hotel email in a p element */}
          <p>{hotel.email}</p>
          {/* Render the hotel website in a p element */}
          <p>{hotel.website}</p>
        </div>
      )}
      {/* Render the social media icons in a div element */}

    </div>
  );
}

// A function component that renders the homepage
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Header />
      <Main />
      <Maindown/>
      {/* Render the footer component */}
      <Footer />
    </div>
  );
}

export default Home;
