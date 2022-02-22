import Hero from '../components/Hero/Hero.js';
import Navbar from '../components/Navbar/Navbar.js'
import Features from '../components/Features/Features.js'
import Steps from '../components/Steps/Steps.js';
import Packs from '../components/Packs/Packs.js'
import About from '../components/About/About.js'
import Newsletter from '../components/Newsletter/Newsletter.js'
import Footer from '../components/Footer/Footer.js'

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Steps />
      <Packs />
      <About />
      <Newsletter />
      <Footer />

    </div>
  );
}