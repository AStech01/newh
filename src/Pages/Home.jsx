import React from 'react'
import { Carousel } from 'antd';
import img_04 from '../assets/slider-psy-2.jpg'
import img_01 from '../assets/img_01.jpg'
import img_02 from '../assets/img_02.jpg'
import img_03 from '../assets/img_02.jpg'
import benf from '../assets/benefits-1.png'
import benf_01 from '../assets/benefits-2.png'
import benf_02 from '../assets/benefits-3.png'
import './home.css'
import Services from './Services';

// const contentStyle = {
//     margin: 0,
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
// };
const Home = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <div>

            <Carousel
                autoplay={{
                    dotDuration: true,
                }}
                autoplaySpeed={10000}
            >
                <div className='h-[40vh]   ' >
                    <img className='absolute h-full ' src={img_04} alt="" />
                    <div className='relative md:top-10 lg:py-40 md:left-10 md:py-0 py-16 md:ml-0 ml-3'>
                        <h1 className='lg:text-8xl md:text-5xl text-3xl font-semibold text-white tracking-tight'>Bringing Health</h1>
                         <h6 className='lg:text-5xl md:text-3xl text-2xl text-white font-light '>to life for the whole family</h6>
                          
                        <div className=' md:mt-3 mt-5  md:w-96 w-40   '>
                            <button className='custom-btn btn-3 px-2 '>VIEW DIPARTMENTS</button>
                            <button className='btnl custom-btn btn-3 md:ml-4 ml-0 md:mt-0 mt-2  md:px-2 px-4 text-white font-semibold cursor-pointer'>VIEW CONTACTS</button>
                        </div>
                    </div>
                </div>
                <div className='h-[40vh] md:h-[100%] ' >
                    <img className='absolute h-full ' src={img_02} alt="" />
                    <div className='relative md:top-10 lg:py-40 md:left-10 md:py-0 py-16 md:ml-0 ml-3'>
                        <h1 className='lg:text-8xl md:text-5xl text-3xl font-semibold text-white tracking-tight'>Bringing Health</h1>
                         <h6 className='lg:text-5xl md:text-3xl text-2xl text-white font-light '>to life for the whole family</h6>
                          
                        <div className=' md:mt-3 mt-5  md:w-96 w-40   '>
                            <button className='custom-btn btn-3 px-2 '>VIEW DIPARTMENTS</button>
                            <button className='btnl custom-btn btn-3 md:ml-4 ml-0 md:mt-0 mt-2  md:px-2 px-4 text-white font-semibold cursor-pointer'>VIEW CONTACTS</button>
                        </div>
                    </div>
                </div>
                <div className='h-[40vh] md:h-[100%] ' >
                    <img className='absolute h-full ' src={img_03} alt="" />
                    <div className='relative md:top-10 lg:py-40 md:left-10 md:py-0 py-16 md:ml-0 ml-3'>
                        <h1 className='lg:text-8xl md:text-5xl text-3xl font-semibold text-white tracking-tight'>Bringing Health</h1>
                         <h6 className='lg:text-5xl md:text-3xl text-2xl text-white font-light '>to life for the whole family</h6>
                          
                        <div className=' md:mt-3 mt-5  md:w-96 w-40   '>
                            <button className='custom-btn btn-3 px-2 '>VIEW DIPARTMENTS</button>
                            <button className='btnl custom-btn btn-3 md:ml-4 ml-0 md:mt-0 mt-2  md:px-2 px-4 text-white font-semibold cursor-pointer'>VIEW CONTACTS</button>
                        </div>
                    </div>
                </div>
                <div className='h-[40vh] md:h-[100%] ' >
                    <img className='absolute h-full ' src={img_01} alt="" />
                    <div className='relative md:top-10 lg:py-40 md:left-10 md:py-0 py-16 md:ml-0 ml-3'>
                        <h1 className='lg:text-8xl md:text-5xl text-3xl font-semibold text-white tracking-tight'>Bringing Health</h1>
                         <h6 className='lg:text-5xl md:text-3xl text-2xl text-white font-light '>to life for the whole family</h6>
                          
                        <div className=' md:mt-3 mt-5  md:w-96 w-40   '>
                            <button className='custom-btn btn-3 px-2 '>VIEW DIPARTMENTS</button>
                            <button className='btnl custom-btn btn-3 md:ml-4 ml-0 md:mt-0 mt-2  md:px-2 px-4 text-white font-semibold cursor-pointer'>VIEW CONTACTS</button>
                        </div>
                    </div>
                </div>
             
            </Carousel>

            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap sm:flex-nowrap mx-auto -m-4  lg:gap-8 md:gap-1 gap-6">
      <div class=" lg:w-96 md:w-64  md:h-80 lg:h-36 w-64 lg:ml-0 md:ml-6 ml-8 relative ">
        <div class="h-full bg-gradient-to-r from-blue-300  to-blue-700  px-8 pt-2 pb-3 rounded-[40px] overflow-hidden  ">
          {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
          <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-2 px-6">Expert Doctors </h1>
          <p class="leading-relaxed text-white mb-5 px-6">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
       

          <div className='absolute -left-6 -top-4   rounded-full p-3 bg-gradient-to-r from-sky-100  to-sky-100'>
              <img src={benf} alt="" />
          </div>
        </div>
      </div>
      <div class=" lg:w-96 md:w-64  md:h-80 lg:h-36 w-64 lg:ml-0 md:ml-6 ml-8 relative ">
        <div class="h-full bg-gradient-to-r from-blue-300  to-blue-700  px-8 pt-2 pb-3 rounded-[40px] overflow-hidden  ">
          {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
          <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-2 px-6">Emergency Care </h1>
          <p class="leading-relaxed text-white mb-5 px-6">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
       

          <div className='absolute -left-6 -top-4   rounded-full p-3 bg-gradient-to-r from-sky-100  to-sky-100'>
              <img src={benf_01} alt="" />
          </div>
        </div>
      </div>
      <div class=" lg:w-96 md:w-64  md:h-80 lg:h-36 w-64 lg:ml-0 md:ml-6 ml-8 relative ">
        <div class="h-full bg-gradient-to-r from-blue-300  to-blue-700  px-8 pt-2 pb-3 rounded-[40px] overflow-hidden  ">
          {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
          <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-2 px-6">24/7 Availability </h1>
          <p class="leading-relaxed text-white mb-5 px-6">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
       

          <div className='absolute -left-6 -top-4   rounded-full p-3 bg-gradient-to-r from-sky-100  to-sky-100'>
              <img src={benf_02} alt="" />
          </div>
        </div>
      </div>
  
    
      
    </div>
  </div>
</section>





        </div>
    )
}

export default Home