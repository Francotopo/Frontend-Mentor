import './App.css'
import img from './assets/image-qr-code.png'

function App() {
  return (
    <div className="h-screen bg-[#D5E1EF] flex flex-col items-center justify-center">
      <div className="bg-white shadow-md p-4 rounded-2xl text-center">
        <div className='max-w-[280px] "'>
          <img src={img} alt="" className="rounded-xl" />
          <h1 className="mt-6 text-[22px] text-slate-700  leading-[26px] font-bold font-display">
            Improve your front-end skills by building projects
          </h1>
          <p className="my-5 text-slate-500 font-display">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the
            next level
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
