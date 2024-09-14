import './App.css'
import img from './assets/image-equilibrium.jpg'
import iconEtherum from './assets/icon-ethereum.svg'
import iconClock from './assets/icon-clock.svg'
import imgAvatar from './assets/image-avatar.png'

function App() {
  return (
    <div className="h-screen bg-[hsl(217,54%,11%)] flex flex-col items-center justify-center">
      <div className="max-w-[340px] p-6 bg-[hsl(216,50%,16%)] rounded-2xl font-display">
        <img src={img} alt="" className="rounded-lg" />
        <h1 className="text-white font-medium text-xl   my-5">Equilibrium #3429</h1>
        <p className="  text-[#90a2bc] text-[18px] font-light ">
          Our Equilibirum collection promotes balance and calm.
        </p>
        <div className="flex justify-between mt-3 mb-6">
          <div className="flex text-[#00FDFB] items-center  ">
            <img src={iconEtherum} alt="" className="mr-2" />
            <span>0.041 ETH</span>
          </div>
          <div className="flex text-[#89A8D4] items-center ">
            <img src={iconClock} alt="" className="mr-2" />
            <span>3 days left</span>
          </div>
        </div>
        <div className="border-t border-[hsl(215,32%,27%)]"></div>
        <div className="flex items-center text-white font-light mt-4 mb-1">
          <img
            src={imgAvatar}
            alt=""
            className="w-8 border border-white rounded-full mr-4"
          />
          <div>
            <span className="text-[#90a2bc]">Creation of </span>Jules Wyvern
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
