import './App.css'
import Ingredients from './components/Ingredients'
import Instructions from './components/Instructions'
import Nutrition from './components/Nutrition'
import PreparationTime from './components/PreparationTime'
import imageOmelette from './assets/image-omelette.jpeg'

function App() {
  return (
    <div className="px-8 py-9 bg-white mt-28 mb-28 mx-auto w-[720px] rounded-3xl">
      <div className="object-cover rounded-xl ">
        <img src={imageOmelette} alt="" className="rounded-xl" />
      </div>
      <h1 className="mt-8  font-bold text-[40px] font-serif text-gray-800">
        Simple Omelette Recipe
      </h1>
      <p className="text-gray-600 text-[16px] my-3">
        An easy and quick dish, perfect for any meal. This classic omelette combines
        beaten eggs cooked to perfection, optionally filled with your choice of cheese,
        vegetables, or meats. Preparation time
      </p>

      <PreparationTime />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </div>
  )
}

export default App
