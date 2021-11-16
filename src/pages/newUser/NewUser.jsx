import "./newUser.css";
const axios = require('axios');

async function makePostCall() {
  let params = {
    "ID": "1234",
    "DOB": "01/01/1999",
    "First Name": "Trump",
    "Last Name": "Biden",
    "Sig Health": "Diabetes"
  }

  let res = await axios.post('https://y0j9peczeg.execute-api.us-east-1.amazonaws.com/info_post', params);

  console.log(res.data);

  return res.data;
}
export default function NewUser() {
  const handleSubmit = (event) => {
    event.preventDefault();
    makePostCall();
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <input type="submit" value="Submit" />
        {/* <button className="newUserButton">Create</button> */}
      </form>
    </div>
  );
}
