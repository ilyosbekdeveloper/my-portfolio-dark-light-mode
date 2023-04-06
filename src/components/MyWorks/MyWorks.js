import React, {useState, useContext} from 'react'
import './MyWorks.css'
import { Context } from '../../contexts/context';
import Fade from 'react-reveal/Fade';

export default function MyWorks() {
    const {isDarkTheme} = useContext(Context);
    const theme = isDarkTheme ? 'dark' : ''
  return (

    <div className={`color ${theme}`}>
        <div className={`myWorks`}>
          <div className="myWorksTitle">
            <h2>My Works</h2>
          </div>

          <div className="container">

            <Fade left>
              <div className="count">
                <h3>Google</h3>
                <div className="imgContainer">
                  <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt="" />
                </div>
                <p className='count-p'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Fuga tenetur error dolore laborum neque id non natus ullam, pariatur molestias.
                </p>
              </div>
            </Fade>

            <Fade bottom>
              <div className="count">
                <h3>Epam</h3>
                <div className="imgContainer">
                  <img src="https://logos-download.com/wp-content/uploads/2019/06/Epam_Systems_Logo_old.png" alt="" />
                </div>
                <p className='count-p'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Fuga tenetur error dolore laborum neque id non natus ullam, pariatur molestias.
                </p>
              </div>
            </Fade>

            <Fade right>
              <div className="count">
                <h3>Amazon</h3>
                <div className="imgContainer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
                </div>
                <p className='count-p'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Fuga tenetur error dolore laborum neque id non natus ullam, pariatur molestias.
                </p>
              </div>
            </Fade>

          </div>
        </div>
    </div>

  )
}
