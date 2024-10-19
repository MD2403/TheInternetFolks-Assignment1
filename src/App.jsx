import { useState } from 'react'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { ArticleContainer } from './components/ArticleContainer'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='text-blueish font-open mx-auto'>
      <Hero/>
      <AboutUs/>
      <ArticleContainer/>
      <Footer/>
    </div>
  )
}

export default App
