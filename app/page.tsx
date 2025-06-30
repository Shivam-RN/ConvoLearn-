import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
         id="1"
         name="Neura the Brainy Explorer"
         topic="Neural Network"
         subject="Science"
         duration={45}
         color="#ffda6e"
         />
        
        <CompanionCard
         id="2"
         name="Neura "
         topic="Neural Network"
         subject="Science"
         duration={4}
         color="#e5d0ff"/>
        
        <CompanionCard
         id="3"
         name="Neura the "
         topic="Neural Network"
         subject="Science"
         duration={450}
         color="#BDE7FF"/>
        
      </section>
      <section className='home-section'>
        <CompanionsList
         title="Recently Completed sessions" 
         companions={recentSessions} 
         classNames="w-2/3 max-lg:w-full"/>
        <CTA/>
      </section>
    </main>
  )
}

export default Page