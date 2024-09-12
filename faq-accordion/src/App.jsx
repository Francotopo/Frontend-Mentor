import './App.css'
import star from './assets/icon-star.svg'
import iconPlus from './assets/icon-plus.svg'
import iconMinus from './assets/icon-minus.svg'

function App() {
  return (
    <div className="h-screen font-display">
      <div className="bg-[#f9f0ff] h-screen absolute inset-0 -z-10"></div>
      <div className="relative bg-background-top h-1/3"></div>
      <div className="inset-0 absolute flex justify-center items-center ">
        <div className="flex flex-col bg-white w-[580px] p-8 rounded-2xl shadow-xl ">
          <div className="flex items-center mb-9">
            <img src={star} alt="" className="mr-6 " />
            <p className="text-5xl font-bold ">FAQs</p>
          </div>
          <div className="divide-y ">
            <div className="py-5 ">
              <div className="flex flex-row justify-between">
                <p className="font-semibold text-lg">
                  What is Frontend Mentor, and how will it help me?
                </p>
                <img src={iconMinus} alt="" className="w-8" />
              </div>
              <p className="mt-5">
                Frontend Mentor offers realistic coding challenges to help developers
                improve their frontend coding skills with projects in HTML, CSS, and
                JavaScript. It's suitable for all levels and ideal for portfolio building
                Is Frontend Mentor free?
              </p>
            </div>
            <div className="py-5 flex flex-row justify-between">
              <p className="font-semibold text-lg ">Is Frontend Mentor free?</p>
              <img src={iconPlus} alt="" className="w-8" />
            </div>
            <div className="py-5 flex flex-row justify-between">
              <p className="font-semibold text-lg">
                Can I use Frontend Mentor projects in my portfolio?
              </p>
              <img src={iconPlus} alt="" className="w-8" />
            </div>
            <div className="pt-5 flex flex-row justify-between">
              <p className="font-semibold text-lg">
                How can I get help if I'm stuck on a challenge?
              </p>
              <img src={iconPlus} alt="" className="w-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
