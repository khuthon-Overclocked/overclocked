import React from 'react';
import lemonImg from '../images/lemon.png';
import event from '../images/event.png';

function Newsletter() {
  return (
    <section>
      <div
        className="w-[85%] mx-auto px-4 sm:px-6 relative overflow-hidden"

      >
        <div className="relative z-10 bg-yellow-300 py-4 px-8 md:py-0 md:px-12">
          {/* Decorative element (optional) */}
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
            {/* 여기에 SVG나 배경 요소를 추가할 수 있습니다 */}
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            {/* 왼쪽: 텍스트 콘텐츠 */}
            <div className="mb-6 lg:mb-0 lg:mr-16 text-center lg:text-left lg:w-1/2">
              <h3 className="text-5xl font-bold text-white">Time Sale</h3>
              <p className="text-2xl text-white text-lg">
                여수 농부 레몬&라임
              </p>
            </div>

            {/* 오른쪽: 이미지 */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                src={lemonImg}
                className=" h-35 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="pt-12"></div>
      </div>


      <div
        className="w-[85%] mx-auto px-4 sm:px-6 relative overflow-hidden"

      >
        <div className="relative z-10 bg-gray-200 py-4 px-8 md:py-0 md:px-12">
          {/* Decorative element (optional) */}
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
            {/* 여기에 SVG나 배경 요소를 추가할 수 있습니다 */}
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            {/* 왼쪽: 텍스트 콘텐츠 */}
            <div className="mb-6 lg:mb-0 lg:mr-16 text-center lg:text-left lg:w-1/2">
              <h3 className="text-5xl font-bold text-white">Event</h3>
              <p className="text-2xl text-white text-lg">
                포인트 적립은 역시 이웃집 소작농
              </p>
            </div>

            {/* 오른쪽: 이미지 */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                src={event}
                className=" h-35 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="pt-12"></div>
      </div>
    </section>
  );
}

export default Newsletter;
