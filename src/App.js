import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


export const userData = [
  {
    name: "7PM",
    "Temperature Reading": 99.5,
  },
  {
    name: "8PM",
    "Temperature Reading": 97,
  },
  {
    name: "9PM",
    "Temperature Reading": 98.5,
  },
  {
    name: "10PM",
    "Temperature Reading": 97,
  },
  {
    name: "11PM",
    "Temperature Reading": 97,
  },
  {
    name: "12AM",
    "Temperature Reading": 98.5,
  },
  {
    name: "1AM",
    "Temperature Reading": 97,
  },
  {
    name: "2AM",
    "Temperature Reading": 96.5,
  },
  {
    name: "3AM",
    "Temperature Reading": 97,
  },
  {
    name: "4AM",
    "Temperature Reading": 97.5,
  },
  {
    name: "5AM",
    "Temperature Reading": 96.5,
  },
  {
    name: "6AM",
    "Temperature Reading": 97,
  },
];

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
