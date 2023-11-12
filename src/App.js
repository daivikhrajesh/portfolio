import React from 'react'
import './App.css';
import Header from './header/header';
import About from './about/about';
import Projects from './projects/projects';
import Contact from './contact/contact';
import ContactUs from './contact/ContactUs'
import { BrowserRouter as Router,
    //   Route, Switch
} from 'react-router-dom'

export default function App() {
    return (
        <Router>
            {/* max-w-7xl mx-auto ... */}
            <div className=" bg-gray-100">
                <div className="max-w-7xl mx-auto p-8 grid  grid-rows-none grid-cols-2 gap-4 ">
                    <div className="row-start-1 row-span-1 col-start-1 col-span-2">
                        <Header/>
                    </div>
                    <div className="row-start-2 row-span-1 col-start-1 col-span-2">
                        <About/>
                    </div>
                    {/* <div className="row-start-2 row-span-1 col-start-2 col-span-1">
                        <HeaderRight/> 
                    </div> */}
                    <div className="row-start-3 row-span-1 col-start-1 col-span-2">
                        <Projects/>
                    </div>
                    <div className="row-start-4 row-span-1 col-start-1 col-span-2 ">
                        <ContactUs/>
                    </div>
                    <div className="row-start-5 row-span-1 col-start-1 col-span-2 ">
                        <Contact/>
                    </div>
                </div>
            </div>
        
        </Router>
    )
}
