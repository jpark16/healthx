import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Heart Rate</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">112 BPM</span>
          <span className="featuredMoneyRate">
            -3 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Since 30 seconds ago</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Blood Oxygen Level </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">98.5%</span>
          <span className="featuredMoneyRate">
           -0.5% <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Since 30 seconds ago</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Temperature</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">98.6 F</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Since 30 seconds ago</span>
      </div>
    </div>
  );
}
