import React from 'react';
import Slider from 'react-slick';
import farmer1 from '../images/farmer1.png';
import farmer3 from '../images/farmer3.png';
import farmer4 from '../images/farmer4.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 임시 이미지 배열
const shortsImages = [farmer1, farmer3, farmer4];

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-2 w-10 h-10 flex items-center justify-center"
      style={{ ...style }}
      onClick={onClick}
      aria-label="이전"
    >
      <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-2 w-10 h-10 flex items-center justify-center"
      style={{ ...style }}
      onClick={onClick}
      aria-label="다음"
    >
      <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

export default function ShortsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    arrows: true,
    centerMode: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div>
      <h2 className="w-[85%] mx-auto text-center h3 mt-20 mb-3 text-black">오늘의 농부</h2>

      <div className="w-full flex justify-center my-8 mb-24 relative">
        <div className="w-[900px] h-[500px] rounded-xl overflow-hidden shadow-lg bg-black relative">
          <Slider {...settings}>
            {shortsImages.map((img, idx) => (
              <div key={idx} className="px-3 py-5"> {/* 좌우 간격 적용 */}
                <img
                  src={img}
                  alt={`shorts${idx + 1}`}
                  className="w-[260px] h-[450px] object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
