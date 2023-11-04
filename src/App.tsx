import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/homepage/about/About";
import Contact from "./pages/homepage/contact/Contact";
import Hero from "./pages/homepage/hero/Hero";

function App() {
  return (
    <div id="root">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
