import React from 'react'
import { paymentExtras } from '../../Data'
import PaymentExtra from './PaymentExtra'

function PaymentExtrasSection() {
  return (
    <div class="space-y-3 mt-12">
            {
                paymentExtras.map((extra, index)=> (
                    <PaymentExtra extra={extra} key={index} />
                ))
            }
    </div>
  )
}

export default PaymentExtrasSection