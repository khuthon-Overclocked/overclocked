import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showAllSubmenus, setShowAllSubmenus] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);
  const submenuRef = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setShowAllSubmenus(false);
        setShowSubmenu(false);
        setActiveCategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSubmenu = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
      setShowSubmenu(false);
    } else {
      setActiveCategory(category);
      setShowSubmenu(true);
    }
  };

  const toggleAllSubmenus = () => {
    setShowAllSubmenus(!showAllSubmenus);
    if (!showAllSubmenus) {
      setShowSubmenu(true);
    } else {
      setShowSubmenu(false);
      setActiveCategory(null);
    }
  };

  return (
    <header className="absolute w-full z-30">
      <div className="w-[85%] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* 사이트 로고 */}
          <div className="shrink-0 mr-4">
            {/* 로고 */}
            <Link to="/" className="block" aria-label="Cruip">
              <img src={logo} alt="이웃집 소작농" className="w-11 h-11" />
            </Link>
          </div>

          <div className="text-2xl font-bold px-1 text-black">이웃집 소작농</div>

          <div className="flex flex-col">
            <div className="text-sm text-black px-3">신선한 농산물 직거래 플랫폼</div>
          </div>

          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">로그인</Link>
              </li>
              <li>
                <Link to="/signup" className="btn-sm text-white bg-[#688A08] hover:bg-[#688A08]/80 ml-3">회원가입</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* 카테고리 내비게이션 */}
      <div className="border-t border-gray-100 shadow-md w-full">
        <div className="w-[85%] mx-auto">
          <nav className="hidden md:flex md:grow">
            <div className="relative flex items-center" ref={submenuRef}>
              <button
                className="p-2"
                onClick={toggleAllSubmenus}
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
              {showAllSubmenus && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-4 w-[800px] z-50">
                  <div className="grid grid-cols-4 gap-4 px-6">
                    {/* 채소 */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">채소</h3>
                      <div className="space-y-1">
                        <Link to="/category/vegetables/carrot" className="block text-gray-600 hover:text-gray-900">당근</Link>
                        <Link to="/category/vegetables/greens" className="block text-gray-600 hover:text-gray-900">시금치/쌈채소/나물</Link>
                        <Link to="/category/vegetables/cruciferous" className="block text-gray-600 hover:text-gray-900">브로콜리/파프리카/양배추</Link>
                        <Link to="/category/vegetables/allium" className="block text-gray-600 hover:text-gray-900">양파/대파/마늘/배추</Link>
                        <Link to="/category/vegetables/cucurbit" className="block text-gray-600 hover:text-gray-900">오이/호박/고추</Link>
                      </div>
                    </div>
                    {/* 과일 */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">과일</h3>
                      <div className="space-y-1">
                        <Link to="/category/fruits/apple" className="block text-gray-600 hover:text-gray-900">사과</Link>
                        <Link to="/category/fruits/pear" className="block text-gray-600 hover:text-gray-900">배</Link>
                        <Link to="/category/fruits/citrus" className="block text-gray-600 hover:text-gray-900">감귤</Link>
                        <Link to="/category/fruits/grape" className="block text-gray-600 hover:text-gray-900">포도</Link>
                        <Link to="/category/fruits/peach" className="block text-gray-600 hover:text-gray-900">복숭아</Link>
                        <Link to="/category/fruits/strawberry" className="block text-gray-600 hover:text-gray-900">딸기</Link>
                      </div>
                    </div>
                    {/* 감자/고구마/옥수수 */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">감자/고구마/옥수수</h3>
                      <div className="space-y-1">
                        <Link to="/category/potatoes/potato" className="block text-gray-600 hover:text-gray-900">감자</Link>
                        <Link to="/category/potatoes/sweet-potato" className="block text-gray-600 hover:text-gray-900">고구마</Link>
                        <Link to="/category/potatoes/corn" className="block text-gray-600 hover:text-gray-900">옥수수</Link>
                      </div>
                    </div>
                    {/* 견과 */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">견과</h3>
                      <div className="space-y-1">
                        <Link to="/category/nuts/walnut" className="block text-gray-600 hover:text-gray-900">호두</Link>
                        <Link to="/category/nuts/pine-nut" className="block text-gray-600 hover:text-gray-900">잣</Link>
                      </div>
                    </div>
                    {/* 쌀/잡곡 */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">쌀/잡곡</h3>
                      <div className="space-y-1">
                        <Link to="/category/rice/foxtail-millet" className="block text-gray-600 hover:text-gray-900">조</Link>
                        <Link to="/category/rice/sorghum" className="block text-gray-600 hover:text-gray-900">수수</Link>
                        <Link to="/category/rice/barley" className="block text-gray-600 hover:text-gray-900">보리</Link>
                        <Link to="/category/rice/brown-rice" className="block text-gray-600 hover:text-gray-900">현미</Link>
                        <Link to="/category/rice/black-rice" className="block text-gray-600 hover:text-gray-900">흑미</Link>
                        <Link to="/category/rice/glutinous-rice" className="block text-gray-600 hover:text-gray-900">찹쌀</Link>
                        <Link to="/category/rice/oats" className="block text-gray-600 hover:text-gray-900">귀리</Link>
                        <Link to="/category/rice/millet" className="block text-gray-600 hover:text-gray-900">기장</Link>
                      </div>
                    </div>
                    {/* 나물 */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">나물</h3>
                      <div className="space-y-1">
                        <Link to="/category/wild-greens/chwi-namul" className="block text-gray-600 hover:text-gray-900">취나물</Link>
                        <Link to="/category/wild-greens/cham-namul" className="block text-gray-600 hover:text-gray-900">참나물</Link>
                        <Link to="/category/wild-greens/bireum-namul" className="block text-gray-600 hover:text-gray-900">비름나물</Link>
                        <Link to="/category/wild-greens/gondre-namul" className="block text-gray-600 hover:text-gray-900">곤드레나물</Link>
                      </div>
                    </div>
                    {/* 장류/양념류/기름 */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">장류/양념류/기름</h3>
                      <div className="space-y-1">
                        <Link to="/category/seasoning/gochujang" className="block text-gray-600 hover:text-gray-900">고추장</Link>
                        <Link to="/category/seasoning/doenjang" className="block text-gray-600 hover:text-gray-900">된장</Link>
                        <Link to="/category/seasoning/soy-sauce" className="block text-gray-600 hover:text-gray-900">간장</Link>
                        <Link to="/category/seasoning/red-pepper-powder" className="block text-gray-600 hover:text-gray-900">고춧가루</Link>
                        <Link to="/category/seasoning/garlic" className="block text-gray-600 hover:text-gray-900">마늘</Link>
                        <Link to="/category/seasoning/sesame-oil" className="block text-gray-600 hover:text-gray-900">참기름</Link>
                        <Link to="/category/seasoning/perilla-oil" className="block text-gray-600 hover:text-gray-900">들기름</Link>
                      </div>
                    </div>
                    {/* 농수산 가공품 */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">농수산 가공품</h3>
                      <div className="space-y-1">
                        <Link to="/category/processed/misutgaru" className="block text-gray-600 hover:text-gray-900">미숫가루</Link>
                        <Link to="/category/processed/nurungji" className="block text-gray-600 hover:text-gray-900">누룽지</Link>
                        <Link to="/category/processed/jam" className="block text-gray-600 hover:text-gray-900">잼</Link>
                        <Link to="/category/processed/fruit-syrup" className="block text-gray-600 hover:text-gray-900">과일청</Link>
                        <Link to="/category/processed/dried-fruits" className="block text-gray-600 hover:text-gray-900">건과일</Link>
                        <Link to="/category/processed/kimchi" className="block text-gray-600 hover:text-gray-900">김치</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <ul className="flex grow justify-start flex-wrap items-center ml py-2 w-[85%]">
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu('vegetables')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  채소
                </button>
                {showSubmenu && activeCategory === 'vegetables' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                    <Link to="/category/vegetables/carrot" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">당근</Link>
                    <Link to="/category/vegetables/greens" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">시금치/쌈채소/나물</Link>
                    <Link to="/category/vegetables/cruciferous" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">브로콜리/파프리카/양배추</Link>
                    <Link to="/category/vegetables/allium" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">양파/대파/마늘/배추</Link>
                    <Link to="/category/vegetables/cucurbit" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">오이/호박/고추</Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu('fruits')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  과일
                </button>
                {showSubmenu && activeCategory === 'fruits' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                    <Link to="/category/fruits/apple" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">사과</Link>
                    <Link to="/category/fruits/pear" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">배</Link>
                    <Link to="/category/fruits/citrus" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">감귤</Link>
                    <Link to="/category/fruits/grape" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">포도</Link>
                    <Link to="/category/fruits/peach" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">복숭아</Link>
                    <Link to="/category/fruits/strawberry" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">딸기</Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu('potatoes')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  감자/고구마/옥수수
                </button>
                {showSubmenu && activeCategory === 'potatoes' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                    <Link to="/category/potatoes/potato" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">감자</Link>
                    <Link to="/category/potatoes/sweet-potato" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">고구마</Link>
                    <Link to="/category/potatoes/corn" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">옥수수</Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu('nuts')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  견과
                </button>
                {showSubmenu && activeCategory === 'nuts' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                    <Link to="/category/nuts/walnut" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">호두</Link>
                    <Link to="/category/nuts/pine-nut" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">잣</Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu('rice')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  쌀/잡곡
                </button>
                {showSubmenu && activeCategory === 'rice' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                    <Link to="/category/rice/foxtail-millet" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">조</Link>
                    <Link to="/category/rice/sorghum" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">수수</Link>
                    <Link to="/category/rice/barley" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">보리</Link>
                    <Link to="/category/rice/brown-rice" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">현미</Link>
                    <Link to="/category/rice/black-rice" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">흑미</Link>
                    <Link to="/category/rice/glutinous-rice" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">찹쌀</Link>
                    <Link to="/category/rice/oats" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">귀리</Link>
                    <Link to="/category/rice/millet" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">기장</Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu('wild-greens')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  나물
                </button>
                {showSubmenu && activeCategory === 'wild-greens' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                    <Link to="/category/wild-greens/chwi-namul" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">취나물</Link>
                    <Link to="/category/wild-greens/cham-namul" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">참나물</Link>
                    <Link to="/category/wild-greens/bireum-namul" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">비름나물</Link>
                    <Link to="/category/wild-greens/gondre-namul" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">곤드레나물</Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu('seasoning')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  장류/양념류/기름
                </button>
                {showSubmenu && activeCategory === 'seasoning' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                    <Link to="/category/seasoning/gochujang" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">고추장</Link>
                    <Link to="/category/seasoning/doenjang" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">된장</Link>
                    <Link to="/category/seasoning/soy-sauce" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">간장</Link>
                    <Link to="/category/seasoning/red-pepper-powder" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">고춧가루</Link>
                    <Link to="/category/seasoning/garlic" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">마늘</Link>
                    <Link to="/category/seasoning/sesame-oil" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">참기름</Link>
                    <Link to="/category/seasoning/perilla-oil" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">들기름</Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu('processed')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  농수산 가공품
                </button>
                {showSubmenu && activeCategory === 'processed' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                    <Link to="/category/processed/misutgaru" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">미숫가루</Link>
                    <Link to="/category/processed/nurungji" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">누룽지</Link>
                    <Link to="/category/processed/jam" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">잼</Link>
                    <Link to="/category/processed/fruit-syrup" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">과일청</Link>
                    <Link to="/category/processed/dried-fruits" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">건과일</Link>
                    <Link to="/category/processed/kimchi" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">김치</Link>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
