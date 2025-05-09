// 메인 페이지 herohome
import React, { useState, useRef, useEffect } from 'react';
import Modal from '../utils/Modal';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeroImage from '../images/hero-image-01.jpg';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const video = useRef(null);

  useEffect(() => {
    videoModalOpen ? video.current.play() : video.current.pause();
  }, [videoModalOpen]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const products = [
    {
      id: 1,
      title: "신선한 농산물",
      description: "농부가 직접 기른 신선한 농산물을 만나보세요",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "직거래 시스템",
      description: "농부와 소비자를 직접 연결하는 투명한 거래 시스템",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "농부 커뮤니티",
      description: "농부들과의 소통과 정보 공유를 위한 커뮤니티",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "배송 추적",
      description: "신선한 농산물의 배송 현황을 실시간으로 확인하세요",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    }
  ];

  return (
    <section>
      <div className="max-w-full mx-auto sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-40 pb-10 md:pt-60 md:pb-20">
          {/* Section header */}
          <div className="mt-10 max-w-5xl mx-auto text-center pb-0 md:pb-4">
            <h1 className="h1 text-black mb-4">
              신선한 농산물 직거래 플랫폼
            </h1>
            <p className="mt-10 mb-20 text-xl text-black mb-8">
              농부와 소비자를 직접 연결하는 신선한 농산물 직거래 플랫폼<br />
              당신의 식탁에 신선함을 전달합니다
            </p>

            {/* Product Carousel */}
            <div className="w-full px-4 md:px-8" data-aos="fade-up" data-aos-delay="300">
              <Slider {...settings}>
                {products.map((product) => (
                  <div key={product.id} className="px-4">
                    <div className="bg-gray-800 rounded-lg p-12 h-full min-h-[480px] transform transition-transform duration-300 hover:scale-105 border-0">
                      <div className="w-24 h-24 mx-auto mb-8 bg-[#688A08] rounded-full flex items-center justify-center">
                        {product.icon}
                      </div>
                      <h3 className="text-white text-3xl font-semibold mb-6 text-center">{product.title}</h3>
                      <p className="text-gray-300 text-xl text-center max-w-2xl mx-auto">{product.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Hero image */}
          <div>
            {/* 추후삭제 */}
            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <video ref={video} className="absolute w-full h-full" width="1920" height="1080" loop autoPlay controls>
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
