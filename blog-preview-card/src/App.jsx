import './App.css'
import image from './assets/illustration-article.svg'
import imgProfile from './assets/image-avatar.webp'

function App() {
  return (
    <div>
      <div className="">
        <div className="shadow-[8px_8px_0px_-1px_rgba(0,0,0,1)]  max-w-[380px] bg-white p-6 rounded-2xl border-black border mx-auto mt-40">
          <img src={image} alt="" className="rounded-xl" />
          <p className="mb-3 font-extrabold bg-[#F4D04E] mt-6 px-3 py-1 inline-block rounded-md">
            Learning
          </p>
          <p>Published 21 Dec 2023</p>
          <h1 className="mt-4 font-extrabold text-2xl mb-4 hover:text-[#F4D04E] cursor-pointer">
            HTML & CSS foundations
          </h1>
          <p>
            These languages are the backbone of every website, defining structure,
            content, and presentation.
          </p>
          <div className="mt-6 flex items-center">
            <img src={imgProfile} alt="" className="w-8 mr-3" />
            <p className="font-extrabold">Greg Hooper</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
