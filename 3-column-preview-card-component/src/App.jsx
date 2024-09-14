import './App.css'
import Card from './components/card'

function App() {
  return (
    <div className=" bg-[hsl(0,0%,95%)] sm:h-screen h-full sm:grid sm:place-items-center  flex justify-center">
      <div className="sm:grid sm:grid-cols-3 sm:max-w-[930px] sm:min-h-[500px] max-w-[310px] my-10">
        <Card cardNbr={0} />
        <Card cardNbr={1} />
        <Card cardNbr={2} />
      </div>
    </div>
  )
}

export default App
