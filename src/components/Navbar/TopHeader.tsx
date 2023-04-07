import MenuIcon from "../../../public/icons/menu.svg";
import FtsLogo from "../../../public/images/fts_logo.png";
import Image from "next/image";
import { useState } from "react";

interface HeaderObj {
  content?: React.ReactNode;
}

const TopHeader = ({ content }: HeaderObj) => {
  const [show, setShow] = useState(false);
  const handleMenuClick = () => {
    setShow(!show);
  };
  return (
    <div className="top-header">
      <div className="header-left">
        <Image src={FtsLogo.src} alt="fts-logo" height={52} width={52} />
      </div>
      <div className="header-right">
        {content}
      </div>
      <div className="header-content">
        <>
          <Image src={FtsLogo.src} alt="fts-logo" height={52} width={52} />
          <Image
            src={MenuIcon.src}
            alt="menu"
            width={24}
            height={24}
            onClick={handleMenuClick}
          />
          {show && (
            <>
              <div className="header-menu">
              {content}
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default TopHeader;
