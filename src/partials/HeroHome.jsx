// 메인 페이지 herohome
import React, { useState, useRef, useEffect } from 'react';
import Modal from '../utils/Modal';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeroImage from '../images/hero-image-01.jpg';
import onion from '../images/onion.jpg';
import grape from '../images/grape.png';
import rice from '../images/rice.png';

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
    { id: 1, image: onion },
    { id: 2, image: grape },
    { id: 3, image: rice },
  ];

  return (
    <section>
      <div className="max-w-full mx-auto sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-40 pb-10 md:pt-60 md:pb-20">
          {/* Section header */}
          <div className="mt-10 max-w-4xl mx-auto text-center pb-0 md:pb-4">
            <h1 className="h1 text-black mb-4">
            작은 농가를 위한 특별한 판매 공간
            </h1>
            <p className="mt-10 mb-20 text-xl text-black mb-8">
              농부와 소비자를 직접 연결하는 작은 농가를 위한 특별한 판매 공간<br />
              당신의 식탁에 신선함을 전달합니다
            </p>

            {/* Product Carousel */}
            <div className="w-full px-4 md:px-8" data-aos="fade-up" data-aos-delay="300">
              <Slider {...settings}>
                {products.map((product) => (
                  <div key={product.id} className="px-4">
                    <div className="bg-gray-800 rounded-lg p-0 h-full min-h-[280px] overflow-hidden">
                      <img src={product.image} alt="슬라이드 이미지" className="w-full h-full object-contain" />
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
