import React from 'react'

function OrderHeader() {
  return (
    <div className="my-6 md:my-12">
        <h1 className="text-center md:text-left text-[#999] font-semibold text-xl md:text-2xl my-4">PERSONALIZED VIDEO FROM</h1>
        <div className="flex gap-2 md:gap-4">
            <div className="rounded-xl overflow-hidden border border-[#ccc]">
                <img src="/images/order__sunny.png" alt="" className='w-[75px] md:min-w-[110px]' />
            </div>
            <div className="flex items-center space-x-4 text-white">
                <h1 className="text-xl md:text-4xl font-extrabold">Sunny Leone</h1>
                <img src="/images/verification.svg" alt="verification badge" />
                <span className="flex space-x-1 md:space-x-2 border border-[#fff] px-2 md:px-4 py-2 rounded-3xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                        d="M19.9478 7.28126C19.8839 7.08307 19.763 6.90808 19.6003 6.77811C19.4376 6.64814 19.2402 6.56894 19.0328 6.55038L13.2602 6.02619L10.9776 0.683473C10.8092 0.29194 10.426 0.0385742 10.0001 0.0385742C9.57422 0.0385742 9.19089 0.291979 9.0226 0.68445L6.73997 6.02623L0.9665 6.55038C0.759313 6.56936 0.562253 6.64873 0.39975 6.77865C0.237248 6.90857 0.116451 7.08333 0.052336 7.28126C-0.079347 7.68627 0.0422577 8.13046 0.363164 8.41047L4.72656 12.2371L3.43988 17.9048C3.34574 18.3216 3.50746 18.7524 3.85325 19.0023C4.03908 19.1366 4.25654 19.205 4.47581 19.205C4.66488 19.205 4.85238 19.154 5.02074 19.0533L10.0001 16.0773L14.9776 19.0533C15.3419 19.2724 15.801 19.2524 16.146 19.0023C16.3149 18.88 16.4442 18.7108 16.5177 18.5157C16.5912 18.3206 16.6057 18.1082 16.5594 17.9048L15.2728 12.2371L19.6361 8.41125C19.7931 8.27416 19.9063 8.09397 19.9617 7.89308C20.0171 7.69218 20.0123 7.47943 19.9478 7.28126Z"
                        fill="#FFC107"
                        />
                    </svg>
                    <span className='text-[10px] md:text-base'>4.7 (12)</span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default OrderHeader