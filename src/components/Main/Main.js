import React, {useContext, useState} from 'react'
import Beach from '../../imgs/beach-coast-tree-dusk-dark-115696669068xehr0ltlr.jpg'
import { Context } from '../../contexts/context'
import './Main.css'

export default function Main() {

  const { isDarkTheme, toggleTheme } = useContext(Context);
  console.log(isDarkTheme);

  const [imgDark, setImgDark] = useState(false);
  const datkImg = ()=>[
    setImgDark(imgDark && false || true)
  ]

  return (
    <div className={`${!isDarkTheme && 'lightTheme' || ''} main`}>
        <div className="imgSection">
          <div className="img">
            {
              !isDarkTheme  ? <img src='https://cdn.pixabay.com/photo/2019/02/24/15/31/beach-4017845_1280.png'/>
              : <img src={Beach} alt="" /> 
            }
          </div>
          
          <div className="title">
            <h1>Hi 
              <br />
              My Name Is Ilyosbek
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus dolorem quisquam quas unde! 
              Dicta alias eaque, eum quisquam, corrupti aspernatur sunt, provident quae ratione atque consequuntur iusto sint natus enim.
            </p>
          </div>
        </div>
    </div>
  )
}
