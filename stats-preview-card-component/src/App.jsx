import './App.css'

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0A0C1B]">
      <div className=" max-w-[300px] sm:max-w-[1000px] sm:grid sm:grid-cols-2 sm:h-[410px] ">
        <div className="relative">
          <div className=" bg-[url('./assets/image-header-mobile.jpg')] w-[300px] h-[200px] bg-cover rounded-t-lg sm:w-full sm:h-full sm:rounded-l-lg sm:rounded-r-none"></div>
          <div className="absolute top-0 left-0 bg-[#450872] bg-opacity-65 w-[300px] h-[200px] rounded-t-lg sm:w-full sm:h-full sm:rounded-l-lg sm:rounded-r-none"></div>
        </div>

        <div className="bg-[#1C1938] py-9 px-7 flex flex-col text-white text-center rounded-lg sm:px-14 sm:text-left sm:py-16 sm:rounded-l-none ">
          <h1 className="font-inter font-bold text-[26px] sm:text-4xl">
            Get <span className="text-[#9D66C9] ">insights </span>that help your business
            grow.
          </h1>
          <p className="text-[#ADABC3] font-lexend text-sm font-light pt-3 pb-8 sm:mt-4">
            Discover the benefits of data analytics ans make better decisions regarding
            revenue, customer experience, and overall efficiency.
          </p>

          <div className="sm:flex sm:justify-between sm:mt-auto">
            <div>
              <p className="font-inter text-xl font-bold">10k+</p>
              <p className="text-xs text-[#ADABC3] font tracking-widest  mb-5 sm:mb-0">
                COMPANIES
              </p>
            </div>
            <div>
              <p className="font-inter text-xl font-bold">314</p>
              <p className="text-xs text-[#ADABC3] font tracking-widest mb-5 sm:mb-0">
                COMPANIES
              </p>
            </div>
            <div>
              <p className="font-inter text-xl font-bold mb5">12M+</p>
              <p className="text-xs text-[#ADABC3] font tracking-widest">COMPANIES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
