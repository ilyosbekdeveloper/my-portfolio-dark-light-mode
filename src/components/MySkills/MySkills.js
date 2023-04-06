import React, {useState, useContext} from 'react'
import './MySkills.css'
import { Bounce, Rotate, } from 'react-reveal'
import Wobble from 'react-reveal/Wobble';
import { Context } from '../../contexts/context';

export default function MySkills() {

    const {isDarkTheme} = useContext(Context);
    const theme = isDarkTheme ? 'dark' : ''

  return (
    <div className={`color ${theme} `}>
            <div className={`mySkills`}>
            <div className="skillsH1">
                <h1>My Skills</h1>
            </div>

                <Rotate top left>
                    <div className="mySkillsContainer">
                        <h4>JavaScript</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati 
                            voluptate hic eligendi magni quasi, quia consectetur aut optio voluptatum soluta itaque. Soluta voluptas nobis accusamus, 
                            voluptatibus consectetur deserunt incidunt reprehenderit, vel cumque laboriosam corporis. Voluptatum voluptatem veritatis
                        </p>
                    </div>
                </Rotate>

                <Rotate bottom right>
                    <div className="mySkillsContainer">
                        <h4>React js</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati 
                            voluptate hic eligendi magni quasi, quia consectetur aut optio voluptatum soluta itaque. Soluta voluptas nobis accusamus, 
                            voluptatibus consectetur deserunt incidunt reprehenderit, vel cumque laboriosam corporis. Voluptatum voluptatem veritatis
                        </p>
                    </div>
                </Rotate>

                <Bounce right>
                    <div className="mySkillsContainer">
                        <h4>Html</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati 
                            voluptate hic eligendi magni quasi, quia consectetur aut optio voluptatum soluta itaque. Soluta voluptas nobis accusamus, 
                            voluptatibus consectetur deserunt incidunt reprehenderit, vel cumque laboriosam corporis. Voluptatum voluptatem veritatis
                        </p>
                    </div>
                </Bounce>

                <Bounce left>
                    <div className="mySkillsContainer">
                        <h4>Css</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati 
                            voluptate hic eligendi magni quasi, quia consectetur aut optio voluptatum soluta itaque. Soluta voluptas nobis accusamus, 
                            voluptatibus consectetur deserunt incidunt reprehenderit, vel cumque laboriosam corporis. Voluptatum voluptatem veritatis
                        </p>
                    </div>
                </Bounce>

                <Wobble>
                    <div className="mySkillsContainer">
                        <h4>Bootstrap</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati 
                            voluptate hic eligendi magni quasi, quia consectetur aut optio voluptatum soluta itaque. Soluta voluptas nobis accusamus, 
                            voluptatibus consectetur deserunt incidunt reprehenderit, vel cumque laboriosam corporis. Voluptatum voluptatem veritatis
                        </p>
                    </div>
                </Wobble>
            </div>
    </div>
  )
}
