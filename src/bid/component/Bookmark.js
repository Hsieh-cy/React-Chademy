import React, { useState} from 'react'
import bookmark from '../styles/bookmark.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function Bookmark(props){
  const{sid,changepage, setChangepage}=props
  const [color, setColor] = useState(false)

  const addcolor = (event)=>{
    
      const a = document.querySelectorAll('.g_activelable')
      // const t = event.target.closest('.grace1').querySelector('g_activelable2')
      if(event.target.closest('.grace1').querySelector('.g_activelable2'))event.target.closest('.grace1').querySelector('.g_activelable2').classList.remove('g_activelable2')
      
      event.target.classList.add('g_activelable2')
      // setColor()
  }
  // if(color){addcolor()}

    return(
        <>
        <div className="row ">
        <div className="col d-flex grace1">
          <div onClick={(event)=>{
            addcolor(event)
            // setColor(true)
            setChangepage(2)
            }} 
            className="col g_lablebox g_activelable">
            出價紀錄
            </div>
            <div onClick={(event)=>{
            addcolor(event)
            setChangepage(1)
            }} 
            className="col g_lablebox g_activelable">
            設定自動出價
            </div>
        </div>
      </div>
        {/* </Link> */}
      {/* </div> */}
        </>
    )
}

export default Bookmark



