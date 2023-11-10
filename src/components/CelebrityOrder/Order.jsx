import React, {useRef, useState} from 'react'
import Extras from './Extras'
import { extras, ocassions, initialMessages } from '../../Data'
import MessageCard from './MessageCard';
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';

const Options = ['He/Him', 'She/Her', 'Other']
const languages = ['English', 'हिंदी'];

function Order({setCurrentIndex}) {

    const scrollContainerRef = useRef(null); 
    const [messages, setMessages] = useState(initialMessages);
    const [language, setLanguage] = useState('');
    const [selectedOcassion, setSelectedOcassion] = useState('');
    
    const handleEditMessage = (index, editedMessage) => {
        const newMessages = [...messages];
        newMessages[index] = editedMessage;
        setMessages(newMessages);
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft -= 300;
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 300;
        }
    };

  return (
    <div className="text-white pb-12">
        {/* Order Details */}
        <div className="w-full bg-[#202020] rounded-xl overflow-hidden p-4 my-6">
            <h2 className="font-semibold text-2xl lg:text-3xl mb-2">Order details</h2>
            <p className="font-semibold text-base lg:text-xl">Who is this video for?</p>
            <div className='flex my-4 gap-4 mb-6 text-sm lg:text-base'>
                <span className="flex items-center gap-2 bg-[#D42978] w-fit px-4 py-2 rounded-3xl">
                    <input type="radio" className="w-[15px] lg:w-[20px] h-[15px] lg:h-[20px]" style={{accentColor: 'white'}} />
                    Someone Else
                </span>
                <span className="flex items-center gap-2 bg-[#D42978] w-fit px-4 py-2 rounded-3xl">
                    <input type="radio" className="w-[15px] lg:w-[20px] h-[15px] lg:h-[20px]" style={{accentColor: 'white'}} />
                    My Self
                </span>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col rounded w-full">
                    <label className='mb-2'>To <span>(First Name)</span></label>
                    <input className="border border-[#6D6D6D] bg-[#292929] px-4 py-2 rounded" type="text" placeholder="Name Of the Receiver" />
                    <div className="flex flex-wrap">
                        {Options.map((tag, index) => (
                            <span key={index} className="text-sm md:text-base font-normal px-4 py-2 bg-[#292929] rounded-3xl my-2 lg:my-4 mr-3 cursor-pointer">
                            {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col rounded w-full">
                    <label className='mb-2'>From <span>(First Name)</span></label>
                    <input className="border border-[#6D6D6D] bg-[#292929] px-4 py-2 rounded" type="text" placeholder="John Doe" />
                    <div className="flex flex-wrap">
                        {Options.map((tag, index) => (
                            <span key={index} className="text-sm md:text-base font-normal px-4 py-2 bg-[#D42978] rounded-3xl my-2 lg:my-4 mr-3 cursor-pointer">
                            {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Ocassion */}
        <div className="bg-[#202020] rounded-xl overflow-hidden p-6 my-6">
            <h2 className="font-semibold text-2xl lg:text-3xl mb-3">Occasion</h2>
            <h3 className="font-semibold text-base lg:text-xl mb-2">What’s the occasion?</h3>

            <div className='flex flex-col flex-wrap gap-2 mb-4'>
                <label className='text-sm lg:text-base'>Select an Occasion</label>
                <div className="flex flex-wrap">
                    {
                        ocassions.map((ocassion, index)=> (
                            <span 
                                className='text-xs md:text-sm lg:text-base mr-1 lg:mr-2 my-2 rounded-3xl px-3 lg:px-4 py-2 cursor-pointer'
                                style={{backgroundColor: selectedOcassion === ocassion ? '#D42978' : '#292929'}}
                                onClick={()=> setSelectedOcassion(ocassion)}
                            >
                                {ocassion}
                            </span>
                        ))
                    }
                </div>
            </div>

            <h2 className="font-semibold text-xl lg:text-3xl mb-1">What do you want Sunny Leone to say in the video?</h2>
            <p className="text-[#D42978] text-xs lg:text-sm mb-3">(Not applicable for Brand, Social Work and Corporate messages)</p>

            <div className='flex flex-col flex-wrap gap-2 mb-4'>
                <label className='text-sm lg:text-base'>Select a Language</label>
                <div className="flex flex-wrap">
                    {
                        languages.map((Language, index)=> (
                            <span 
                                className='text-xs md:text-sm lg:text-base mr-1 lg:mr-2 my-2 rounded-3xl px-3 lg:px-4 py-2 cursor-pointer'
                                style={{backgroundColor: Language === language ? '#D42978' : '#292929'}}
                                onClick={()=> setLanguage(Language)}
                            >
                                {Language}
                            </span>
                        ))
                    }
                </div>
            </div>

            {/* Messages Section */}
            <div className="flex w-full py-3 md:space-x-6 overflow-hidden">
                <div className="flex items-center">
                    <button
                        onClick={scrollLeft}
                        className="hidden md:flex w-[40px] h-[40px] border border-[#D42978] items-center justify-center rounded-full transition duration-300"
                    >
                        <img src="/images/back.svg" alt="back" />
                    </button>
                </div>

                <div className="hidden md:flex w-full overflow-x-scroll no-scrollbar" ref={scrollContainerRef} style={{ scrollBehavior: "smooth" }}>
                    <div className="flex space-x-4 py-4 lg:w-[310px]">
                        {messages.map((message, index) => (
                            <MessageCard
                                key={index}
                                message={message}
                                onEdit={(editedMessage) => handleEditMessage(index, editedMessage)}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile Swiper */}
                <div className="md:hidden py-2 w-full flex justify-center items-center hero__caurosel  ">
                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={1}
                        slidesPerGroup={1}
                        autoplay={true}
                        pagination={true}
                        slideActiveClass="activeSlide"
                        className="swiper-container"
                    >
                        {messages.map((message, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex gap-5 justify-center">
                                <MessageCard message={message} onEdit={(editedMessage) => handleEditMessage(index, editedMessage)} />
                            </div>
                            <div className="h-10"></div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="flex items-center">
                    <button
                    onClick={scrollRight}
                    className="w-[40px] h-[40px] bg-[#D42978] hidden md:flex items-center justify-center rounded-full transition duration-300"
                    >
                    <img src="/images/forward.svg" alt="forward" />
                    </button>
                </div>
            </div>

            <div className="md:px-14">
                <p className='text-xs md:text-base mt-1 text-[#D42978]'>Note - Our celebrities wish to complete your order in their true self. Hence, the message / script may differ in some cases.</p>
                {/* Extra */}
                <div className="flex justify-between items-center px-2 md:px-4 py-2 bg-[#202020] border border-[#888888] rounded-xl my-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-white h-full rounded-xl p-2 md:p-4" style={{height: '100%', padding: 'auto'}}>
                            <img className="w-[30px] md:w-[50px]" src="/images/order__message.svg" alt="" />
                        </div>
                        <div className="text-white">
                            <h2 className="text-sm md:text-xl font-semibold">Write longer message</h2>
                            <span className="text-[#737373] text-base">₹600</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[20px] md:w-[35px] h-[20px] md:h-[35px] bg-[#D42978] rounded-2xl cursor-pointer">
                        <img src="/images/plus.svg" alt="" className="max-w-[60%]" />
                    </div>
                </div>
                <div className='flex items-center gap-2 my-2'>
                    <input type="checkbox" className="w-[14px] h-[14px] bg-[#202020] border border-[#999999]" style={{accentColor: '#D42978'}} />
                    <p className="text-xs md:text-base text-[#999999]">Don’t make this video public on Tring</p>
                </div>
            </div>
        </div>

        {/* Delivery */}
        <div className="bg-[#202020] rounded-xl overflow-hidden p-4 my-6">
            <h2 className="font-semibold text-2xl md:text-3xl mb-2 md:mb-4">Delivery</h2>
            
            <div className="flex flex-col my-2 md:my-4">
                <label className="mb-1 md:mb-2 text-sm md:text-xl">How quickly do you want the video?</label>
                <span className="flex items-center gap-2 bg-[#D42978] w-fit px-[10px] md:px-4 py-2 rounded-3xl text-xs lg:text-base">
                    <input type="radio" className="w-[15px] lg:w-[20px] h-[15px] lg:h-[20px]" style={{accentColor: 'white'}} />
                    Within 4 days Free
                </span>
            </div>
            <div className='flex flex-col my-4'>
                <label className="mb-2 text-sm md:text-xl">Do you want to deliver this surprise to the recipient?</label>
                <div className="flex gap-2 md:gap-4">
                    <span className="flex items-center gap-2 bg-[#D42978] w-fit px-[8px] md:px-4 py-2 rounded-3xl text-xs lg:text-base">
                        <input type="radio" className="w-[15px] lg:w-[20px] h-[15px] lg:h-[20px]" style={{accentColor: 'white'}} />
                        Yes, go head ₹1500
                    </span>
                    <span className="flex items-center gap-2 bg-[#D42978] w-fit px-[8px] md:px-4 py-2 rounded-3xl text-xs lg:text-base">
                        <input type="radio" className="w-[15px] lg:w-[20px] h-[15px] lg:h-[20px]" style={{accentColor: 'white'}} />
                        No, Skip for now
                    </span>
                </div>
            </div>
        </div>

        {/* Extras */}
        <div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4">Extras</h1>
            <div className="space-y-3 md:space-y-4">
                {
                    extras.map((extra, index)=> (
                        <Extras extra={extra} key={index} />
                    ))
                }
            </div>
        </div>

        {/* Payment Info Section */}
        <div className='flex flex-col md:flex-row items-center w-full justify-between pt-6 md:pt-12 lg:pt-24'>
            <p className='text-base md:text-xl font-semibold w-full md:w-1/2 mb-2 md:mb-0 text-center md:text-left'>Secure and fast payments via Card, UPI, Netbanking and more By continuing, you agree to our terms</p>
            <div className='flex flex-col items-center w-full md:w-[30%]'>
                <button className='bg-[#535353] rounded-3xl px-4 py-3 mb-2 w-full' onClick={()=> setCurrentIndex(1)}>Continue</button>
                <p className='text-[#737373] text-xs md:text-sm text-center md:text-left'>You will not be charged when you press this button</p>
            </div>
        </div>
    </div>
  )
}

export default Order