
import './AboutPage.css';
import aboutImg from '../assets/about.jpg';
import whyImg from '../assets/why2.jpg';

const AboutPage = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-box">
        <img src={aboutImg} alt="About Fresh Vaults" className="about-img" />
        <h2>About Us</h2>
        <p>
          Fisher's Vault is your trusted destination for premium quality seafood, sourced fresh every day from the coast. 
          Our mission is to deliver health, taste, and tradition to your table through our hand-picked collection of fish, prawns, and crabs.
        </p>
      </div>
      <div className="about-box">
        <img src={whyImg} alt="Why Fresh Vaults" className="why-img" />
        <h2>Why Fisher's Vault?</h2>
        <p>
          We offer unmatched freshness, quick availability, and honest pricing. 
          With hygienic packaging and a wide variety of options, Fresh Vaults brings the ocean to your plate — fast, safe, and delicious.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
