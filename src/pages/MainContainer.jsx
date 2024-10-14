import Home from "./Home";
import About from "./About";
import Footer from "./footer";
import Testimonial from "./Testimonial";

const MainContainer = ({ Navbar }) => {
  return (
    <div className="min-h-screen bg-color-main overflow-x-hidden">
      <header>
        <Navbar />
      </header>

      <main className="bg-color-main">
        <section className="home-section py-16">
          <Home />
        </section>

        <section className="about-section py-16">
          <About />
        </section>

        <section className="testimonial-section bg-gray-100 py-16">
          <Testimonial />
        </section>
      </main>

      <footer className="footer-section">
        <Footer />
      </footer>
    </div>
  );
};

export default MainContainer;
