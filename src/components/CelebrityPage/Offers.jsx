import React from 'react'
import OfferTicket from './OfferTicket'
import { ticketData } from '../../Data'

function Offers() {
  return (
    <div className='py-12'>
        <h1 className="text-5xl font-semibold mb-4">Available Offers</h1>
        <div className="flex flex-wrap gap-2">
            {
                ticketData.map((ticket, index)=> (
                    <OfferTicket ticket={ticket} key={index} />
                ))
            }
        </div>
    </div>
  )
}

export default Offers