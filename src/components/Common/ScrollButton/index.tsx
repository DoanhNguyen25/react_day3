import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "./style";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  // toggle Scroll To Top
  const toggleVissible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  // transition effect
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVissible);

    return () => {
      window.removeEventListener("scroll", toggleVissible);
    };
  }, []);
  return (
    <div>
      <Button style={{ display: visible ? "inline" : "none" }}>
        <FaArrowCircleUp
          onClick={ScrollToTop}
          
        />
      </Button>
    </div>
  );
};

export default ScrollButton;
