
import {useEffect, useState} from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
useEffect(()=>{
  setInterval(() => {
    setHeroCount((count)=>{return count===2? 0:count+1})
  }, 1000);
})
const App= ()=> {
 let heroData= [
  {text1:"Quality Education ", text2:"is our motto" },
  {text1:"Empowering Minds,", text2:"Shaping Futures" },
  {text1:"Pioneering Education ", text2:"for Tomorrow" },
  {text1:"Dare to Dream,", text2:"Learn to Achieve" },
  {text1:"Your Dreams", text2:" Our Mission" },
 ]
 const [heroCount, setHeroCount]=useState(4);
 const [playStatus, setPlayStatus]=useState(false);

  return (
    <>
     <Background playStatus={playStatus} heroCount=  {heroCount}/>
     <Navbar></Navbar>
     <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}>

     </Hero>
    </>
  )
}

export default App;
