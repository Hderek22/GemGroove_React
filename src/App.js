import React from 'react';
import OurPurpose from './Pages/ourPurpose';
import Home from './Pages/home';
import JamLounge from './Pages/jamLounge';
import "./dashBoard.js"
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import RecordStore from './Pages/recordStore';
 
function DashBoard() {
  
    <div className="Pages" > 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/jamLounge" component={JamLounge} />
          <Route exact path="/shop" component={DashBoard} />
          <Route exact path="/ourPurpose" component={OurPurpose} />
          <Route exact path="/recordStore" component={RecordStore} />
          <Route exact path="*" component={RecordStore} />
        </Routes>
      </BrowserRouter>
    </div>;
}
export default DashBoard;