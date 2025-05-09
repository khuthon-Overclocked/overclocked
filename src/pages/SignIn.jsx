import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import Banner from '../partials/Banner';

function SignIn() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        <section className="relative">
          <div className=" mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="w-[38%] mx-auto text-left pb-12 md:pb-20">
                <h1 className="h2">로그인 한 번으로 <br /> 이웃집 소작농의 서비스를 사용해보세요</h1>
              </div>

              {/* Form */}
              <div className="w-[30%] mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                      <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="이메일 주소" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">비밀번호</label>
                      <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="비밀번호" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[#688A08] focus:ring-[#688A08] border-gray-700 rounded" />
                          <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-400">Remember me</label>
                        </div>

                        <Link to="/reset-password" className="text-sm text-gray-600 hover:underline" href="#0">Forgot Password?</Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-[#688A08] hover:bg-[#688A08]/80 w-full">로그인</button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-300 text-center mt-6">
                  계정이 없으세요? <Link to="/signup" className="text-gray-600 hover:underline" href="#0">회원가입</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignIn;