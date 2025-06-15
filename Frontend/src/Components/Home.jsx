
// import React from 'react';
// import './Home.css';
// import logo from '../assets/FV-logo.png';

// const Home = () => {
//   return (
//     <header id="home"  className="hero-section">
//       <div className="hero-content">
//         <img src={logo} alt="Fresh Vaults" className="hero-logo" />
//         <h1>Welcome to <span>Fresh Vaults</span></h1>
//         <p>Your premium destination for fresh seafood</p>
//       </div>
//     </header>
//   );
// };

// export default Home;


import React from 'react';
import './Home.css';
import logo from '../assets/FV-logo.png';

const Home = () => {
  return (
    <header id="home" className="hero-section">
      <div className="hero-background-logo"></div>
      <div className="hero-content">
        {/* <img src={logo} alt="Fresh Vaults" className="hero-logo" /> */}
        <br></br><br></br><br></br>
        <h1>Welcome to <span>Fisher's Vault</span></h1>
        <p>Your premium destination for fresh seafood</p>
      </div>
    </header>
  );
};

export default Home;
