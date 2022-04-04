import quizzicalHome from './imgs/quizzical-home.png'
import quizzicalGameplay from './imgs/quizzical-gameplay.png'
import snakeDesktop from './imgs/snake-gameplay.png'
import snakeMobile from './imgs/snake-mobile.png'
import tenzies from './imgs/tenzies.png'
import speedTyping from './imgs/speed-typing.png'
import portfolioDesktop from "./imgs/portfolio-desktop.png"
import portfolioMobile from "./imgs/portfolio-mobile.png"
import abzijgenDesktop from './imgs/abzijgen-desktop.png'
import abzijgenMobile from './imgs/abzijgen-mobile.png'


const quizzicalImgs = [quizzicalHome, quizzicalGameplay]
const snakeImgs = [snakeDesktop, snakeMobile]
const abzijgenImgs = [abzijgenDesktop, abzijgenMobile]

function App() {

  const displayImgs = arr => arr.map(img => <img src={img}/>)

  return (
    <div className="App">
      {displayImgs(abzijgenImgs)}
    </div>
  );
}

export default App;
