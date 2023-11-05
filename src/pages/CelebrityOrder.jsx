import React from 'react'
import OrderHeader from '../components/CelebrityOrder/OrderHeader';
import HorizontalCurl from '../components/CelebrityOrder/HorizontalCurl';
import OrderDetails from '../components/CelebrityOrder/OrderDetails';

function CelebrityOrder() {

  return (
    <div className="bg-[#000]" style={{border: '1px solid #ccc'}}>
        <HorizontalCurl />
        <div className="px-20">
            <OrderHeader />
            <OrderDetails />
        </div>
    </div>
  )
}

export default CelebrityOrder