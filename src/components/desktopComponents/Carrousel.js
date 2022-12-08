import React, { useState } from "react";

import leftArrow from "../../assets/chevronLeft.svg";
import rightArrow from "../../assets/chevronRight.svg";
import "../../style/carrousel.css";
function Carroussel({ pictures }) {
    const [current, setCurrent] = useState(0);
    const length = pictures.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className="box">
            <div>
                {pictures.map((picture, index) => {
                    return (
                        <div className="slide" key={index}>
                            {index === current && (
                                <img
                                    src={picture}
                                    alt="slide"
                                    className="image"
                                ></img>
                            )}
                            <div className="counter">
                                {index === current && `${index + 1}/${length}`}
                            </div>
                            <div className="arrows">
                                {length > 1 && (
                                    <div>
                                        <img
                                            className="chevron left"
                                            src={leftArrow}
                                            alt="précédent"
                                            onClick={prevSlide}
                                        ></img>
                                        <img
                                            className="chevron right"
                                            src={rightArrow}
                                            alt="suivant"
                                            onClick={nextSlide}
                                        ></img>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Carroussel;
