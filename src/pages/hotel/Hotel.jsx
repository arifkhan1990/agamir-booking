import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLocation,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import h1 from "../../images/hotels/h1.jpg";
import h2 from "../../images/hotels/h2.jpg";
import h3 from "../../images/hotels/h3.jpg";
import h4 from "../../images/hotels/h4.jpg";
import h7 from "../../images/hotels/h7.png";
import h6 from "../../images/hotels/h6.jpg";
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
const Hotel = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: h1,
    },
    {
      src: h2,
    },
    {
      src: h3,
    },
    {
      src: h4,
    },
    {
      src: h6,
    },

    {
      src: h7,
    },
  ];

  const handleSlider = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleMove = (derection) => {
    let newSLIdx;
    if (derection === "l") {
      newSLIdx = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSLIdx = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }

    setSliderNumber(newSLIdx);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(!open)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[sliderNumber].src}
                alt=""
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500 from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over BDT 11234 at this property and get a free airport
            taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleSlider(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Grace Cox Smart Hotel</h1>
              <p className="hotelDesc">
                You're eligible for a Genius discount at Grace Cox Smart Hotel!
                To save at this property, all you have to do is sign in. Grace
                Cox Smart Hotel is a 4-star property set in Cox's Bazar. With
                free WiFi, this 4-star hotel offers a kids' club and free
                shuttle service. The accommodation offers room service, a
                concierge service and organising tours for guests. At the hotel,
                the rooms include a desk. All rooms are equipped with a safety
                deposit box, while some rooms come with a balcony and others
                also have sea views. The units will provide guests with a
                fridge. A buffet breakfast is available every morning at Grace
                Cox Smart Hotel. The accommodation offers 4-star accommodation
                with a hot tub and terrace. You can play table tennis at this
                4-star hotel.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>BDT 9540</b> ( 6 nights )
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
