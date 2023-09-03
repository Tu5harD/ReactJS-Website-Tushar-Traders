import React, { useState, useEffect } from "react";

import "./GoToTop.css";

const GoToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                // <FaAngleUp
                //     className="icon-position icon-style"
                    
                // />
                
                <i class="fa-solid flex justify-content-center  fa-arrow-up icon-position icon-style" onClick={goToTop}></i>
            )}{" "}
        </div>
    );
};
export default GoToTop;

