import './App.css'
import imgBgCard from '../public/bg-pattern-card.svg'
import imgProfile from '../public/image-victor.jpg'
import bgTop from '../public/bg-pattern-top.svg'
import bgBottom from '../public/bg-pattern-bottom.svg'

function App() {
  return (
    <div className="relative h-screen flex bg-[#1894A1] items-center justify-center">
      <div className="">
        <img src={bgTop} alt="" className="absolute -top-[489px] -left-[489px]" />
        <img src={bgBottom} alt="" className="absolute -bottom-[489px] -rigth-[489px]" />
      </div>
      <div className="bg-white font-display text-[18px] rounded-xl z-20">
        <div className="relative flex justify-center">
          <img src={imgBgCard} alt="" className=" rounded-t-xl" />
          <img
            src={imgProfile}
            alt=""
            className="absolute -bottom-[51px] rounded-full border-[6px] border-white"
          />
        </div>
        <div className="text-center pb-7 pt-[70px]">
          <span className="text-[#35384A] text-xl font-extrabold">Victor Crest </span>
          <span className="text-[#848589] ">26</span>
          <p className="text-[16px] text-[#848589]">London</p>
        </div>

        <hr />
        <div className="flex text-center justify-between px-12 py-7">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#35384A]">80K</span>
            <span className="text-sm text-[#848589] ">Followers</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#35384A]">803K</span>
            <span className="text-sm text-[#848589] ">Likes</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#35384A]">1.4K</span>
            <span className="text-sm text-[#848589] ">Photos</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
