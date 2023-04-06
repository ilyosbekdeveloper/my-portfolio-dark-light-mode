import React, {useContext} from 'react'
import { Context } from '../../contexts/context'
import './Sidebr.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
export default function Sidebar() {
    const {isDarkTheme, toggleTheme, isVisabled, toggleVisabled, isbar, setIsBar} = useContext(Context)
    console.log(isbar);
  return (
    <>
        <div className="linksSection">
            <ul className={`${isVisabled}`}>
                <li><a href="#">About Me</a></li>
                <li><a href="#">My Skills</a></li>
                <li><a href="#">My Works</a></li>
                <li><a href="#">Contact me</a></li>
                <div className="menuBarm" onClick={toggleVisabled}>
                        <FontAwesomeIcon icon={faX}/>
                </div>
            </ul>
        </div>
    </>
  )
}
