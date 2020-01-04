import React from 'react';

import Loading from './../component/Loading'
import Header from './../component/Header';
import Sidebar from './../component/Sidebar';
function Home() {
  return (
    <div>
      
                      {/* Page-header start */}
                      <div className="page-header">
                        <div className="row align-items-end">
                          <div className="col-lg-8">
                            <div className="page-header-title">
                              <div className="d-inline">
                                <h4>Halaman Home</h4>
                                <span>lorem ipsum dolor sit amet, consectetur adipisicing
                                  elit</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="page-header-breadcrumb">
                              <ul className="breadcrumb-title">
                                <li className="breadcrumb-item">
                                  <a href="index-1.htm"> <i className="feather icon-home" />
                                  </a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Widget</a> </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Page-header end */}
                      </div>
  );
}

export default Home;
