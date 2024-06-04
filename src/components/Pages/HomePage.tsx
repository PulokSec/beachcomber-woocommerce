import React from 'react'
import Hero from '../Index/Hero.component'
import FeaturedHomeProducts from '../PageComponents/FeaturedHomeProducts'
import WhyBeachComber from '../Elements/WhyBeachComber'
import HomeBottomComponent from '../BottomComponents/HomeBottomSection'
import GuideSection from '../Elements/GuideSection'
import ReasonsToChoose from '../Elements/ReasonToChoose'
import ShoppingEasySection from '../Elements/ShoppingEasy'

export default function HomePage() {
  return (
    <main>
      <Hero />
     <FeaturedHomeProducts /> 
     <WhyBeachComber />
     <ReasonsToChoose />
     <HomeBottomComponent/>
     <ShoppingEasySection />
     <GuideSection />
    </main>
  )
}
