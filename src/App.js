import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import ImageSlider from './components/Slider';
import { SliderData } from './components/SliderData';
import './components/Slider.css';
import Footer from './components/Footer';
import Form from './components/Form';
import LowToHigh from "./components/LowHi";
import HighToLow from "./components/HiLow";

const App = () => {
    return(
        <>
            <Router>
            <Navbar />
                <Switch>
                    <Route path='/' element = {<Home />} exact>
                        <Home />
                        <ImageSlider slides={SliderData} />
                    </Route>
                    <Route path='/products' element = {<Products />} exact>
                        <Products />
                    </Route>
                    <Route path="/products/HighToLow" element={<HighToLow />} exact>
                    </Route>
                    <Route path="/products/LowToHigh" element={<LowToHigh />} exact>
                    </Route>
                    <Route path='/contact' element = {<Contact />} exact>
                        <Contact />
                        <Form />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App;
