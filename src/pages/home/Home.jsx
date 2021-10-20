import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../App";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Data from "../../components/Data/Data";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Patient 1 Temperature" grid dataKey="Temperature Reading"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
        
      </div><Data/>
    </div>
  );
}
