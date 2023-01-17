import h1 from "../../images/hotels/h1.jpg";
import h2 from "../../images/hotels/h2.jpg";
import h3 from "../../images/hotels/h3.jpg";
import h7 from "../../images/hotels/h7.png";
import h6 from "../../images/hotels/h6.jpg";

import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={h1} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>222 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={h2} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Califron Hotels</h1>
          <h2>22 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={h3} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Defaullo D'crus</h1>
          <h2>129 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={h6} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Austin Alice</h1>
          <h2>172 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={h7} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Venuse Hotels</h1>
          <h2>152 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
