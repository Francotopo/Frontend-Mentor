import './App.css'
import img from './assets/avatar-jessica.jpeg'

function App() {
  return (
    <div className="bg-[#1F1F1F] w-[375px] mx-auto mt-40 p-10 rounded-2xl flex items-center flex-col">
      <div>
        <img src={img} alt="" className="rounded-full w-20" />
      </div>
      <h1 className="text-2xl mt-5  font-display ">Jessica Randall</h1>
      <p className="text-sm font-medium text-[#c5f82a] mt-1 mb-5 ">
        London, United Kingdon
      </p>
      <p className="text-sm">"Front-end developper and avid reader."</p>
      <div className="hover:bg-[#c5f82a] cursor-pointer hover:text-[#141414] hover:font-bold bg-[#333333] text-sm font-medium w-full mt-5 flex justify-center py-3 rounded-lg ">
        GitHub
      </div>
      <div className="hover:bg-[#c5f82a] cursor-pointer hover:text-[#141414] hover:font-bold hover:font-semi bg-[#333333] text-sm  font-medium w-full mt-4 flex justify-center py-3 rounded-lg ">
        Frontend Mentor
      </div>
      <div className="hover:bg-[#c5f82a] cursor-pointer hover:text-[#141414] hover:font-bold hover:font-semi bg-[#333333] text-sm  font-medium w-full mt-4 flex justify-center py-3 rounded-lg ">
        Linkedin
      </div>
      <div className="hover:bg-[#c5f82a] cursor-pointer hover:text-[#141414] hover:font-bold hover:font-semi bg-[#333333] text-sm  font-medium w-full mt-4 flex justify-center py-3 rounded-lg ">
        Twitter
      </div>
      <div className="hover:bg-[#c5f82a] cursor-pointer hover:text-[#141414] hover:font-bold hover:font-semi bg-[#333333] text-sm  font-medium w-full mt-4 flex justify-center py-3 rounded-lg ">
        Instagram
      </div>
    </div>
  )
}

export default App
