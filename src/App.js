import React from 'react'
import { BrowserRouter as Router, Route,Redirect, Switch  } from 'react-router-dom'
import About from './components/pages/About/About'
import Contact from './components/pages/Contact/Contact'
import Home from './components/pages/Home/Home'
import Testimonial from './components/pages/Testimonial/Testimonial'
import Navbar from './components/Navbar/Navbar'


const App=() => {

  return (

    <Router>
      <Navbar/>
      <main>
      <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/about" exact>
        <About/>
      </Route>
      <Route path="/contact" exact>
        <Contact/>
      </Route>
      
      <Route path="/testimonial" exact>
        <Testimonial/>
      </Route>
      <Redirect to="/"/>
      </Switch>
      </main> 
    </Router>
  );
}

export default App;
