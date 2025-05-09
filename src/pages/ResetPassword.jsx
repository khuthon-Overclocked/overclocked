import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import Banner from '../partials/Banner';

function ResetPassword() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        <section className="relative">
          <div className="mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="w-[38%] mx-auto text-left pb-12 md:pb-20">
                <h1 className="h2">비밀번호를 잊으셨나요?</h1>
              </div>

              {/* Form */}
              <div className="w-[30%] mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">이메일</label>
                      <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="이메일 주소" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-[#688A08] hover:bg-[#688A08]/80 w-full">Reset Password</button>
                    </div>
                  </div>
                </form>
                <div className="text-center mt-6">
                  <Link to="/signin" className="text-gray-600 hover:underline" href="#0">Cancel</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default ResetPassword;