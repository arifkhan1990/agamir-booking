import "./featuredProperties.css";
import h1 from "../../images/hotels/hr1.jpg";
import h2 from "../../images/hotels/hr2.jpg";
import h3 from "../../images/hotels/h43.jpg";
import h4 from "../../images/hotels/hr4.jpg";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={h1} alt="" className="fpImg" />
        <span className="fpName">
          3 Epoques Apartments by Prague Residences
        </span>
        <span className="fpCity">Prague 1, Czech Republic, Praha 1</span>
        <span className="fpPrice">
          Starting from <span className="fpCurrency">BDT 16,454</span>
        </span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={h2} alt="" className="fpImg" />
        <span className="fpName">Oriente Palace Apartments</span>
        <span className="fpCity">Centro, Spain, Madrid</span>
        <span className="fpPrice">
          Starting from <span className="fpCurrency">BDT 16,454</span>
        </span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Fabulous</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={h3} alt="" className="fpImg" />
        <span className="fpName">Villa Domina</span>
        <span className="fpCity">Split City Centre, Croatia, Split</span>
        <span className="fpPrice">
          Starting from <span className="fpCurrency">BDT 5,454</span>
        </span>
        <div className="fpRating">
          <button>7.7</button>
          <span>Superb</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={h4} alt="" className="fpImg" />
        <span className="fpName">7Seasons Apartments Budapest</span>
        <span className="fpCity">06. Terézváros, Hungary, Budapest</span>
        <span className="fpPrice">
          Starting from <span className="fpCurrency">BDT 8,152</span>
        </span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
