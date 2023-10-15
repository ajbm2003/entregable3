import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import stars from './assets/stars.png'
import portal from './assets/portal.png'
import title1 from './assets/title1.png'
import { getRandomNumber } from './utils/random'
import Location from './components/Location'
import Residents from './components/Residents'

function App() {
  const [location, setLocation]= useState(null)
  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
    .then(({data})=> setLocation(data))
    .catch((err)=>console.log(err))
  },[])

  return (
    <main className='bg-black justify-center grid min-h-screen px-2'>
      <div className=" z-0 fixed bottom-0 left-0 w-[271px] h-[251px] flex-shrink-0 border-671 rounded-full opacity-60 bg-gradient-to-br from-green-400 to-gray-800 filter blur-[150px] sm:w-[471px] sm:h-[551px]">
      </div>
      <div className=" z-0 fixed top-0 right-0 w-[271px] h-[251px] flex-shrink-0 border-671 rounded-full opacity-50 bg-gradient-to-br from-green-400 to-gray-800 filter blur-[150px]">
      </div>
      <img src={stars} alt="Stars" className='z-10 fixed top-[50%] left-0 w-[271px] h-[251px] flex-shrink-0 ' />
      <img src={stars} alt="Stars" className='z-10 fixed top-0 right-0 w-[271px] h-[251px] flex-shrink-0 ' />
      <img src={portal} alt="portal" className='z-0 sm:left-[40%] left-[25%] absolute w-[250px] h-[100px]' />
      <img src={title1} alt="titulo" className='z-10 w-[180px] h-[90px] flex-shrink-0 mx-auto py-[20px]  bg-lightgray bg-center bg-cover bg-no-repeat'/>
      <Location location={location} setLocation={setLocation}/>
      <Residents residents={location?.residents ?? []}/>
    </main>
  )
}

export default App
