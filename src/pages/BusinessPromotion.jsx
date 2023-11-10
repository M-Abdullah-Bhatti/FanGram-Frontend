import React from 'react'
import CTA from '../components/BusinessPromotion/CTA'
import PromotionForm from '../components/BusinessPromotion/PromotionForm'
import LatestWork from '../components/BusinessPromotion/LatestWork'

function BusinessPromotion() {
  return (
    <div className="text-white">
        <CTA />
        <div className="w-full px-6 md:px-12 lg:px-24 bg-[#000]">
            <PromotionForm />
            <LatestWork />
        </div>
    </div>
  )
}

export default BusinessPromotion