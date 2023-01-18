import "./searchItem.css";
import h1 from "../../images/hotels/h1.jpg";
import h2 from "../../images/hotels/h2.jpg";
import h3 from "../../images/hotels/h3.jpg";
import h7 from "../../images/hotels/h7.png";
import h6 from "../../images/hotels/h6.jpg";
import { useNavigate } from "react-router-dom";

const SearchItem = () => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/hotels/sajek-vally", { state: null });
  };
  return (
    <div className="searchItem" onClick={handleView}>
      <img src={h1} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air condition</span>
        <span className="siFeatures">
          Entire studio - 1 bathroom - 21m 1 full bed
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">
            {" "}
            <span className="siCurrency">BDT</span> 12345
          </span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See Availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
