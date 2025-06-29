import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Wws from './Components/Wws'
import Om from './Components/Om'
import Wts from './Components/Wts'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className='min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50'>
      <Navbar />
      <br />
      <main className='flex-1 w-full'>
        <div className='w-full'>
          <Banner />
        </div>
        <div className='w-full'>
          <Wws />
          <Om />
          <Wts />
        </div>
      </main>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default App
