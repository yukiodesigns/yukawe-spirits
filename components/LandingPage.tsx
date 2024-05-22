import React from 'react'
import Hero from './shared/Hero'
import BestSelling from './shared/BestSelling'
import Featured from './shared/Featured'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      {/* Products card */}
      <BestSelling />
      {/* About us */}
      <Featured />
    </div>
  )
}

export default LandingPage