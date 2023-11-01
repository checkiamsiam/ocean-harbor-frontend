"use client";
import HeaderBottomBar from "../sectionComponents/Header/HeaderBottomBar";
import HeaderNavigationDesktop from "../sectionComponents/Header/HeaderNavigationDesktop";
import MobileHeader from "../sectionComponents/Header/MobileHeader";

const Header = () => {
  return (
    <div id="ga-header" className="pattern-dark fixed top-0 w-full">
      <div className="ga-container">
        <div className="py-5">
          <div className="hidden lg:block">
            <HeaderNavigationDesktop />
          </div>
          <div className="block lg:hidden">
            <MobileHeader />
          </div>
          <HeaderBottomBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
