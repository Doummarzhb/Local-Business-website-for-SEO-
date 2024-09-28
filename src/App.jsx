import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // استيراد Helmet
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Location from './Components/Location/Location';
import Service from './Components/Service/Service';
import HPOSS from './Components/OurService/HospitalityPOSSolutions/HPOSS';
import CustomSupport from './Components/OurService/CustomSupport/CustomSupport';
import CPOSS from './Components/OurService/CPOSS/CPOSS';
import APOSS from './Components/OurService/APOSS/APOSS';
import RPOSS from './Components/OurService/RPOSS/RPOSS';

function App() {
  return (
    <Router>
      <Navbar />
      <MainContent />
      {/* <Footer /> */}
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Service />
            <Location />
            <About />
            <Contact />
          </>
        } /> 
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/location' element={<Location />} />

        <Route path='/hposs' element={<HPOSS />} />
        <Route path='/customsupport' element={<CustomSupport />} />
        <Route path='/cposs' element={<CPOSS />} />
        <Route path='/aposs' element={<APOSS />} />
        <Route path='/rposs' element={<RPOSS />} />
      </Routes>

      {/* إظهار Footer في الصفحات غير المحددة */}
      {!['/hposs', '/customsupport', '/cposs', '/aposs', '/rposs'].includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
