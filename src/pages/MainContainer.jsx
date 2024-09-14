import Home from "./Home";
import About from "./About";
import Footer from "./footer";
import Testimonial from "./Testimonial";

const MainContainer = ({ Navbar }) => {
  
  return (
    <div className="min-h-screen bg-color-main overflow-x-hidden">
      <Navbar /> 
      
      <main className="bg-color-main">
        
        <section className="home-section">
          <Home />
        </section>
        
        <section className="about-section">
          <About />
        </section>

        <section className="testimonial-section bg-gray-100">
          <Testimonial />
        </section>
    
        <section className="footer-section">
          <Footer />
        </section>

      </main>
    
    
    </div>
  );

};

export default MainContainer;
