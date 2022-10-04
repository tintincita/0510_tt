import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import React from "react";

import Users from "../pages/users/users.page";
import Login from "../pages/login/login.page";
import ForgottenPW from "../pages/forgottenpw/forgottenpw.page";

const index = () => {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/forgottenpw" element={<ForgottenPW />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </div>
    );
  };
  
  export default index;