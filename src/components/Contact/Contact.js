import React, {useContext} from 'react'
import './Contact.css'
import { Context } from '../../contexts/context';

export default function Contact() {
    const {isDarkTheme} = useContext(Context);
    const theme = isDarkTheme ? 'dark' : ''
  return (
    <div className={`colorr ${theme}`}>
            <div className={`contact`}>
                <h1>Contact Me</h1>
                <span>+998 99 031 69 06</span>
                <input type="text" className="inp" />
                <button className='contactBtn'>Submit</button>
            </div>
    </div>
  )
}
