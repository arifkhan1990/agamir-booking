import "./featured.css";
import f1 from "../../images/places/f1.jpg";
import f2 from "../../images/places/f2.jpg";
import f3 from "../../images/places/f3.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={f1} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Cox's Bazzar</h1>
          <h2>123 Properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={f2} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Sajek Vally</h1>
          <h2>220 Properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={f3} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Bichana Knadhi</h1>
          <h2>23 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
