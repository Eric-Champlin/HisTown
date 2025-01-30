import React from 'react'; 
import './Home.css'; 
import NavBar from '../components/NavBar.tsx'; 
import Footer from '../components/Footer.tsx'; 


const Home = () => {
    return (
        <div>
          <NavBar />
          <p>hi!</p>
          <Footer />
        </div>
    );
};

export default Home;