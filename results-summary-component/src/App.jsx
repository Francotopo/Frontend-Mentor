import './App.css'
import reaction from './assets/icon-reaction.svg'
import memory from './assets/icon-memory.svg'
import verbal from './assets/icon-verbal.svg'
import visual from './assets/icon-visual.svg'

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 grow-0 font-display min-h-80 max  min-w-[660px] shadow-[12px_11px_20px_10px_rgba(235,241,255,1)] rounded-3xl">
        <div className="p-9 flex flex-col bg-gradient-to-t from-[#312CEA] to-[#6743FF] rounded-3xl items-center ">
          <p className="text-[#c8c7ff] text-[22px] font-semibold">Your Result</p>
          <div className=" bg-gradient-to-t from-[#4734F0] to-[#4C23CA] flex flex-col justify-center items-center bg-black w-48 h-48 rounded-full my-7">
            <p className="text-white text-6xl font-bold">76</p>
            <p className="text-[#8C7FFF] font-semibold mt-1">of 100</p>
          </div>
          <p className="text-white text-3xl font-bold mb-4">Great</p>
          <p className="text-[#c8c7ff] px-4  text-center max-w-64">
            Your scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="px-8 py-9 text-[#303b5a]">
          <p className="font-bold text-[22px] mb-6">Summary</p>
          <div className="mb-4 flex justify-between px-4 py-3 bg-[#FFF6F5] font-bold rounded-xl text-lg">
            <div className="flex  text-rose-500">
              <img src={reaction} alt="" className="mr-3" />
              <p>Reaction</p>
            </div>
            <div>
              <span>80</span>
              <span className="text-[#9F99A4]"> / 100</span>
            </div>
          </div>
          <div className="mb-4 flex justify-between px-4 py-3 bg-[#FFFBF0] font-bold rounded-xl text-lg">
            <div className="flex  text-[#F8C051]">
              <img src={memory} alt="" className="mr-3" />
              <p>Memory</p>
            </div>
            <div>
              <span>92</span>
              <span className="text-[#9F99A4]"> / 100</span>
            </div>
          </div>
          <div className="mb-4 flex justify-between px-4 py-3 bg-[#F2FBFA] font-bold rounded-xl text-lg">
            <div className="flex  text-[#1ad29e]">
              <img src={verbal} alt="" className="mr-3" />
              <p>Verbal</p>
            </div>
            <div>
              <span>61</span>
              <span className="text-[#9F99A4]"> / 100</span>
            </div>
          </div>
          <div className="mb-4 flex justify-between px-4 py-3 bg-[#F3F3FD] font-bold rounded-xl text-lg">
            <div className="flex  text-[#4349A5]">
              <img src={visual} alt="" className="mr-3" />
              <p>Visual</p>
            </div>
            <div>
              <span>80</span>
              <span className="text-[#9F99A4]"> / 100</span>
            </div>
          </div>
          <button className="bg-[#303B59] text-white font-semibold w-full mt-5 py-3 rounded-full">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
