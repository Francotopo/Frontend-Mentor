import './App.css'
import illustrationHero from './assets/illustration-hero.svg'
import iconMusic from './assets/icon-music.svg'

function App() {
  return (
    <div className=" h-screen bg-[#D6E1FF] grid place-items-center">
      <div className="bg-white max-w-[350px] rounded-3xl font-display sm:max-w-[450px] ">
        <img src={illustrationHero} alt="" className="rounded-t-3xl" />

        <div className="px-6 py-8 text-center sm:px-11 sm:py-10">
          <h1 className="text-2xl font-black">Order Summary</h1>
          <div className="px-3">
            <p className="text-[#8F94A5] font-medium py-5">
              You can now listen to millions of songs, audiobooks, and podcats on any
              device anywhere you like!
            </p>
          </div>

          <div className="flex items-center bg-[#F8F9FE] p-4 rounded-xl">
            <img src={iconMusic} alt="" />
            <div className="flex flex-col ml-5 text-left ">
              <span className="font-black">Annul Plan</span>
              <span className="text-[#787D9A] font-medium text-[15px]">$59.99/year</span>
            </div>
            <a href="http://" className="ml-auto text-[#382AE1] font-bold underline">
              change
            </a>
          </div>

          <button className="shadow-[0px_14px_21px_-3px_rgba(56,42,225,0.39)]  w-full bg-[#382AE1] text-white font-medium py-3 rounded-xl my-6 ">
            Proceed to Payement
          </button>
          <button className="text-[#7983A7] font-bold">Cancel Order</button>
        </div>
      </div>
    </div>
  )
}

export default App
