import './App.css'
import productImg from './assets/image-product-desktop.jpg'
import iconCart from './assets/icon-cart.svg'

function App() {
  return (
    <div className="bg-[#F3EAE3] h-screen grid place-content-center">
      <div className="max-w-[600px] bg-white grid grid-cols-2 rounded-lg text-[hsl(228,12%,48%)] ">
        <img src={productImg} alt="" className="rounded-l-lg " />
        <div className="flex flex-col p-8">
          <p className="text-sm font-medium tracking-[4px]">PERFUME</p>
          <h1 className="text-3xl font-bold text-[#2c2c2c] font-ser pr-3 mt-3 ">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="my-4">
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center">
            <span className="font-ser text-3xl font-bold text-[#3D8168] mr-5 ">
              $149.99
            </span>
            <span className="line-through text-sm text-[hsl(228,12%,48%)]">$169.99</span>
          </div>
          <button className="w-full py-3 text-white font-medium bg-[#3D8168] hover:bg-[#4b9c7e] flex items-center justify-center  rounded-lg mt-7">
            <img src={iconCart} alt="" className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
