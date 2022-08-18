import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEditUser from "./pages/AddEditUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addUser" component={AddEditUser} />
          <Route exact path="/editUser/:id" component={AddEditUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
