import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Zoom, Fade, Rotate } from 'react-reveal';
import { Context } from './contexts/context';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import MyWorks from './components/MyWorks/MyWorks';
import MySkills from './components/MySkills/MySkills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
    const toggleTheme = ()=> {
        setIsDarkTheme(isDarkTheme ? false : true)
    }

    const [isVisabled, setIsVisabled] = useState('');
    const toggleVisabled = ()=>{
        setIsVisabled( isVisabled == '' ? 'd-block' : '')
        setBar()
    }

    const [isbar, setIsBar] = useState(true)
    const setBar = ()=> setIsBar(isbar ? false : true)

    return (
    <>
        <Context.Provider value={{isDarkTheme, toggleTheme, isVisabled, toggleVisabled, isbar, setIsBar}}>
          <div className={`App ${!isDarkTheme && 'lightTheme' || ''}`}>
            <Fade>
              <Header/>
              <Main/>
            </Fade>
              <Sidebar/>
              <MySkills/>
              <MyWorks/>
              <Contact/>
              <Footer/>
          </div>
        </Context.Provider>
    </>
  );
}

export default App;
