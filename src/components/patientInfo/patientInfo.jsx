import "./patientInfo.css";
import Location from "../../components/Data/Location";
import profile from "../../profile.jpg";

export default function PatientInfo() {
  return (
    <div className="featured">
      <div className="featureditem">
        <span className="featuredtitle">Patient Profile</span>
      <div ><img src={profile} height={100} width={100} /></div>
      
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Name: John Doe</span>
          <span className="featuredMoneyRate">
          </span>
        </div><span className="featuredAge"> <Location/></span>
      </div>
    </div>
    
  );
}
