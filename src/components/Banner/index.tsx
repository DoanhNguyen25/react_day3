import React from 'react'
import { BannerWrapper } from './style'
import banner from '../../assets/images/banner.jpg'
const Banner = () => {
    return (
     <BannerWrapper>
         <div className='banner_container'>
            <img src={banner}/>
            <div className='banner--content'>
                <div className='banner--content-title'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat.
                </div>
                <div className='banner--content-desc'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde delectus aspernatur consequatur aperiam? Consequatur, dignissimos quidem a eius voluptate expedita harum.
                </div>
                <div className='banner--content-btn'>
                    <button>View more</button>
                </div>
            </div>
         </div>
     </BannerWrapper>
    )
}

export default Banner
