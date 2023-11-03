import React from 'react'

const tags = ["Celebrity Of the Week", "Valentine's Days Gifts", "Baby Doll", "Model", "TV Star"];

function CelebrityHeader() {
  return (
    <div className="flex bg-[#161616] rounded-xl overflow-hidden px-8 py-6 text-white">
        <div className="min-h-[275px] rounded-2xl overflow-hidden border border-[#ccc]"
            style={{
                background: 'lightgray 50%',
                minWidth: '225px',
                maxWidth: '225px'
            }}
        >
            <img src="/images/sunny-page.png" alt="celebrity" className="w-full h-full object-cover" />
        </div>
        <div className='ml-6 w-full'>
            <div className='flex justify-between'>
                <div>
                    <h1 className="text-4xl font-extrabold">Sunny Leone</h1>
                </div>
                <div className='flex items-center space-x-2'>
                    <img src="/images/flag.svg" alt="flag" />
                    <p>India’s largest celebrity engagement platform</p>
                    <div className="bg-[#FCAE4B] w-[40px] h-[40px] flex justify-center items-center rounded-full">
                        <img 
                            src='/images/heart.png'
                            alt="heart"
                        />
                    </div>
                </div>
            </div>
            <p className='py-4 text-xl font-medium'>Responds in <b className="text-[#D42978] font-bold">5 Days</b></p>
            <div className='flex flex-wrap'>
                {
                    tags.map((tag)=> (
                        <span className="text-base font-normal px-4 py-2 bg-[#292929] rounded-3xl my-4 mr-4">{tag}</span>
                    ))
                }
            </div>
            <div className="flex flex-wrap space-x-4">
                <span className='bg-[#D42978] font-medium text-lg rounded-3xl px-4 py-2 cursor-pointer my-4'>Book Video @ <b>&#8377; 9999</b> <span className="line-through ml-2 text-sm">10,999</span></span>
                <div class="flex w-fit items-center border border-[#D42978] cursor-pointer my-4"
                    style={{
                        borderRadius: 25
                    }}
                >
                    <span className="px-3">Meet & Greet</span>
                    <span style={{borderRadius: '0px 300px 300px 300px', background: '#D42978', padding: '0 16px'}}>
                        <p>Starts from</p>
                        <p>&#8377; 39,980</p>
                    </span>
                </div>
                <span className="border border-[#D42978] font-medium text-lg rounded-3xl px-4 py-2 cursor-pointer my-4">For Business</span>
            </div>
            <div className='flex space-x-4 text-[#999999]'>
                <span className='flex items-center'>
                    Secured & safe payments
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{marginLeft: 6}} viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_29_3768)">
                        <path d="M14.9485 2.23938C14.9345 2.13842 14.8912 2.04378 14.8241 1.96707C14.757 1.89037 14.6689 1.83495 14.5707 1.80762L8.14004 0.0192448C8.04836 -0.00627251 7.95146 -0.00627251 7.85978 0.0192448L1.4291 1.80762C1.3309 1.83493 1.24282 1.89035 1.1757 1.96706C1.10858 2.04376 1.06534 2.13842 1.05131 2.23938C1.01401 2.50758 0.163116 8.84455 2.3456 11.997C4.5255 15.1457 7.74133 15.9526 7.87714 15.9854C7.95782 16.005 8.042 16.005 8.12268 15.9854C8.25856 15.9526 11.4744 15.1457 13.6542 11.997C15.8367 8.84462 14.9858 2.50765 14.9485 2.23938ZM12.1469 5.93897L7.7605 10.3253C7.65844 10.4274 7.52458 10.4785 7.39079 10.4785C7.25701 10.4785 7.12315 10.4275 7.02109 10.3253L4.30903 7.61328C4.26046 7.56475 4.22193 7.50711 4.19564 7.44367C4.16935 7.38024 4.15582 7.31224 4.15582 7.24358C4.15582 7.17491 4.16935 7.10691 4.19564 7.04348C4.22193 6.98004 4.26046 6.92241 4.30903 6.87387L4.84753 6.33538C4.94558 6.23733 5.07857 6.18225 5.21723 6.18225C5.3559 6.18225 5.48889 6.23733 5.58694 6.33538L7.39079 8.13923L10.869 4.66099C10.9175 4.61242 10.9751 4.57388 11.0386 4.5476C11.102 4.52131 11.17 4.50777 11.2387 4.50777C11.3073 4.50777 11.3753 4.52131 11.4388 4.5476C11.5022 4.57388 11.5598 4.61242 11.6084 4.66099L12.1469 5.19948C12.1954 5.24803 12.2339 5.30568 12.2602 5.36912C12.2865 5.43256 12.3 5.50055 12.3 5.56922C12.3 5.63789 12.2865 5.70589 12.2602 5.76933C12.2339 5.83277 12.1954 5.89041 12.1469 5.93897Z" fill="#999999"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_29_3768">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                    </defs>
                    </svg>
                </span>
                <span className='flex items-center'>
                    Need help? Text Us
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{marginLeft: 6}} viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_29_3773)">
                        <path d="M8 0C3.57841 0 0 3.578 0 8C0 12.4215 3.578 16 8 16C12.4216 16 16 12.422 16 8C16 3.57841 12.422 0 8 0ZM7.76328 11.7443C7.31047 11.7443 6.96297 11.3652 6.96297 10.9335C6.96297 10.4912 7.321 10.1227 7.76328 10.1227C8.20559 10.1227 8.57409 10.4912 8.57409 10.9335C8.57409 11.3652 8.21606 11.7443 7.76328 11.7443ZM8.96372 7.648C8.38456 8.10081 8.374 8.41672 8.374 8.96428C8.374 9.16441 8.26869 9.39606 7.75272 9.39606C7.32094 9.39606 7.17356 9.23809 7.17356 8.69053C7.17356 7.78491 7.57372 7.35316 7.87909 7.08991C8.22659 6.79503 8.81631 6.46863 8.81631 5.9C8.81631 5.41556 8.39509 5.18391 7.86856 5.18391C6.79447 5.18391 7.02616 5.99478 6.45747 5.99478C6.17316 5.99478 5.82566 5.80519 5.82566 5.39453C5.82566 4.82591 6.47853 3.98344 7.90016 3.98344C9.24803 3.98344 10.1431 4.73112 10.1431 5.72097C10.1431 6.71081 9.24803 7.42687 8.96372 7.648Z" fill="#999999"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_29_3773">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                    </defs>
                    </svg>
                </span>
            </div>
        </div>
    </div>
  )
}

export default CelebrityHeader