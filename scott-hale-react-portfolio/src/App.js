import React, {useEffect} from "react";
import './index.css'
import './App.css'
import { gsap } from "gsap";


import PortfolioContainer from "./components/PortfolioContainer";


const App = () => {

  

  function onMove(event) {
    // var widthToProgress = gsap.utils.mapRange(0, window.innerWidth, 0, 1);
    // var interpColor = gsap.utils.interpolate("#0466c8", "#001233");
    // var interpColor2 = gsap.utils.interpolate("#181819", "#FFFFFF");
    // var widthToColor = gsap.utils.pipe(widthToProgress,interpColor);
    // var widthToColor2 = gsap.utils.pipe(widthToProgress,interpColor2);

    // var value = widthToColor(event.clientX);
    // var value2 = widthToColor2(event.clientX);

    // document.body.style.backgroundColor = value;
    // document.body.style.color = value2;
    
  }
  
  return (
    <div >
      <PortfolioContainer />

    </div>
  );
};

export default App;
