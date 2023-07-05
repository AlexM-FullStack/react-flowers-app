
import React from "react";
import Flowers from "./Components/Flowers";
import {FlowersData} from './Components/FlowersData'

const App = () => {
  return (
    <>
      <h1>About Flowers</h1>
      <div className="container">
        {FlowersData.map(flower => {
          const {title, imgsrc, desc, btn} = flower
          return (
            <Flowers 
            title={title}
            imgsrc={imgsrc}
            desc={desc}
            btn={btn}
          />
          )
        })}    
      </div>
    </>
  )
}

export default App