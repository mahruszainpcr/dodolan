import React from 'react';
function Sidebar()  {
    return ( <nav className="pcoded-navbar">
    <div className="pcoded-inner-navbar main-menu">
      <div className="pcoded-navigatio-lavel">Navigation</div>
     
      <ul className="pcoded-item pcoded-left-item">
        <li className>
          <a href="http://html.codedthemes.com/Adminty/doc" target="_blank">
            <span className="pcoded-micon"><i className="feather icon-monitor" /></span>
            <span className="pcoded-mtext">Documentation</span>
          </a>
        </li>
        <li className>
          <a href="#" target="_blank">
            <span className="pcoded-micon"><i className="feather icon-help-circle" /></span>
            <span className="pcoded-mtext">Submit Issue</span>
          </a>
        </li>
      </ul>
    </div>
  </nav> );
}
 
export default Sidebar;