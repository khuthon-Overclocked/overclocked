import React from 'react';

function Newsletter() {
  return (
    <section>
      <div className="w-[85%] mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="relative bg-[#688A08] py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">
          {/* Background illustration */}
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
          </div>
          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2 ">....</h3>
              <p className="text-gray-300 text-lg">....</p>
            </div>
          </div>
        </div>

        <div className="pt-12">

        </div>


      </div>
    </section>
  );
}

export default Newsletter;
