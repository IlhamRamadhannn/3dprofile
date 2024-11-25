import React from 'react';
import Navbar from './sections/Navbar.jsx';
import Lead from './Lead.jsx';
import About from './About.jsx';
import Work from './Work.jsx';
import Contact from './Contact.jsx';
import Footer from './sections/Footer.jsx';

const App = () => {
  return (
<main className="max-w-7xl mx-auto flex flex-col gap-10 relative">
  <Navbar/>
  <Lead />
  <About className="mt-10" />
  <Work/>
  <Contact/>
  {/* <Footer/> */}

</main>
  );
};

export default App;