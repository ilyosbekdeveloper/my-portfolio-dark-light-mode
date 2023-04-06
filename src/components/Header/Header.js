import React, {useContext, useState} from 'react'
import { Context } from '../../contexts/context'
import App from '../../App'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon, faSun, faX } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

    // const [isDarkTheme1, setIsDarkTheme1] = useContext(Context)

    // const [isVisabled, setIsVisabled] = useState('');
    // const toggleVisabled = ()=>{
    //     setIsVisabled( isVisabled == '' ? 'd-block' : '')
    //     setBar()
    // }

    // const [isbar, setIsBar] = useState(true)
    // const setBar = ()=> setIsBar(isbar ? false : true)

    const { isDarkTheme, toggleTheme, isVisabled, toggleVisabled, isbar, setIsBar } = useContext(Context);
    const theme = isDarkTheme ? 'lightTheme' : ''


  return (
    <div>
        
        <div className={`${theme} header`}>
            <div className="logo">
                Ilyosbek
            </div>

                <div className="toggleTheme" onClick={toggleTheme}>
                    {isDarkTheme &&<FontAwesomeIcon icon={faSun}/>
                    || <FontAwesomeIcon icon={faMoon}/>}
                </div>

            <div className="menuBar" onClick={toggleVisabled}>
                    { isbar &&
                        <FontAwesomeIcon icon={faBars} /> 
                        || <FontAwesomeIcon icon={faX}/>
                    }
            </div>
        </div>

    </div>
  )
}
