import React from 'react';
import Container from '../Common/Container';
import { FooterWrapper } from './style';
import imgItem from '../../assets/images/img-item.jpg';
const Footer = () => {
    return (
       <FooterWrapper>
           <div className='footer__top'>
               <Container>
                   <div className='footer__top--wrapper'>
                        <div className='footer__top-item'>
                            <div className='footer__item--title'>About</div>
                            <div className='footer__item-content'>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer__top-item'>
                            <div className='footer__item--title'>Payment</div>
                            <div className='footer__item-content payment-layout'>
                                <div className="payment--item">
                                    <img src={imgItem}/>
                                </div>
                                <div className="payment--item">
                                    <img src={imgItem}/>
                                </div>
                                <div className="payment--item">
                                    <img src={imgItem}/>
                                </div>
                                <div className="payment--item">
                                    <img src={imgItem}/>
                                </div>
                                <div className="payment--item">
                                    <img src={imgItem}/>
                                </div>
                                <div className="payment--item">
                                    <img src={imgItem}/>
                                </div>
                                <div className="payment--item">
                                    <img src={imgItem}/>
                                </div>
                            </div>

                        </div>
                        <div className='footer__top-item'>
                            <div className='footer__item--title'>Contact us</div>
                            <div className='footer__item-content'>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                </ul>
                            </div>

                        </div>
                        <div className='footer__top-item'>
                            <div className='footer__item--title'>Support</div>
                            <div className='footer__item-content'>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>

                        </div>
                   </div>
               </Container>
           </div>
           <div className='footer__bottom'>
               <Container>
                    <div className='footer__bottom--wrapper'>
                       <div className='footer__bottom-left'>
                       <div className='footer__item--title'>About</div>
                            <div className='footer__item-content'>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe.</li>
                                    <li>Lorem ipsum dolor sit amet adipisicing elit. Adipisci saepe.</li>
                                    <li>Lorem ipsum dolor adipisicing elit. Adipisci saepe..</li>
                                </ul>
                            </div>
                       </div>
                       <div className='footer__bottom-right'>
                            <div className='footer__bottom--image'>
                                <img src={imgItem}/>
                            </div>
                            <div className='footer__bottom--detail'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit</div> 

                       </div>

                   </div>
               </Container>
           </div>
       </FooterWrapper>
    )
}

export default Footer
