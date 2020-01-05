import React from 'react';

function Header() {
  return (
  <div>
       
      <div id="pcoded" className="pcoded">
        <div className="pcoded-overlay-box" />
        <div className="pcoded-container navbar-wrapper">
          <nav className="navbar header-navbar pcoded-header">
            <div className="navbar-wrapper">
              <div className="navbar-logo">
                <a className="mobile-menu" id="mobile-collapse" href="#!">
                  <i className="feather icon-menu" />
                </a>
                <a href="index-1.htm">
                  <img className="img-fluid" src="..\files\assets\images\logo.png" alt="Theme-Logo" />
                </a>
                <a className="mobile-options">
                  <i className="feather icon-more-horizontal" />
                </a>
              </div>
              <div className="navbar-container container-fluid">
                <ul className="nav-left">
                  <li className="header-search">
                    <div className="main-search morphsearch-search">
                      <div className="input-group">
                        <span className="input-group-addon search-close"><i className="feather icon-x" /></span>
                        <input type="text" className="form-control" />
                        <span className="input-group-addon search-btn"><i className="feather icon-search" /></span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#!" onclick="javascript:toggleFullScreen()">
                      <i className="feather icon-maximize full-screen" />
                    </a>
                  </li>
                </ul>
                <ul className="nav-right">
                  <li className="header-notification">
                    <div className="dropdown-primary dropdown">
                      <div className="dropdown-toggle" data-toggle="dropdown">
                        <i className="feather icon-bell" />
                        <span className="badge bg-c-pink">5</span>
                      </div>
                      <ul className="show-notification notification-view dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                        <li>
                          <h6>Notifications</h6>
                          <label className="label label-danger">New</label>
                        </li>
                        <li>
                          <div className="media">
                            <img className="d-flex align-self-center img-radius" src="..\files\assets\images\avatar-4.jpg" alt="Generic placeholder image" />
                            <div className="media-body">
                              <h5 className="notification-user">John Doe</h5>
                              <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                              <span className="notification-time">30 minutes ago</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <img className="d-flex align-self-center img-radius" src="..\files\assets\images\avatar-3.jpg" alt="Generic placeholder image" />
                            <div className="media-body">
                              <h5 className="notification-user">Joseph William</h5>
                              <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                              <span className="notification-time">30 minutes ago</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <img className="d-flex align-self-center img-radius" src="..\files\assets\images\avatar-4.jpg" alt="Generic placeholder image" />
                            <div className="media-body">
                              <h5 className="notification-user">Sara Soudein</h5>
                              <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                              <span className="notification-time">30 minutes ago</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="header-notification">
                    <div className="dropdown-primary dropdown">
                      <div className="displayChatbox dropdown-toggle" data-toggle="dropdown">
                        <i className="feather icon-message-square" />
                        <span className="badge bg-c-green">3</span>
                      </div>
                    </div>
                  </li>
                  <li className="user-profile header-notification">
                    <div className="dropdown-primary dropdown">
                      <div className="dropdown-toggle" data-toggle="dropdown">
                        <img src="..\files\assets\images\avatar-4.jpg" className="img-radius" alt="User-Profile-Image" />
                        <span>John Doe</span>
                        <i className="feather icon-chevron-down" />
                      </div>
                      <ul className="show-notification profile-notification dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                        <li>
                          <a href="#!">
                            <i className="feather icon-settings" /> Settings
                          </a>
                        </li>
                        <li>
                          <a href="user-profile.htm">
                            <i className="feather icon-user" /> Profile
                          </a>
                        </li>
                        <li>
                          <a href="email-inbox.htm">
                            <i className="feather icon-mail" /> My Messages
                          </a>
                        </li>
                        <li>
                          <a href="auth-lock-screen.htm">
                            <i className="feather icon-lock" /> Lock Screen
                          </a>
                        </li>
                        <li>
                          <a href="auth-normal-sign-in.htm">
                            <i className="feather icon-log-out" /> Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div></div>

  </div>
  );
}

export default Header;
