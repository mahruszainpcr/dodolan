import React, { Component } from 'react'


class PageJudul extends Component {
render() {
return (
<div>
<div className="page-header">
  <div className="row align-items-end">
    <div className="col-lg-8">
      <div className="page-header-title">
        <div className="d-inline">
          <h4>{this.props.title}</h4>
          <span>{ this.props.deskripsiPage}</span>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      {/* <div className="page-header-breadcrumb">
        <ul className="breadcrumb-title">
          <li className="breadcrumb-item">
            <a href="index-1.htm">
            <i className={ this.props.icon}></i>
           
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#!">{this.props.judul}</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#!">{this.props.subJudul}</a>
          </li>
        </ul>
      </div> */}
    </div>
  </div>
</div>
</div>
)
}
}


class UserActivity extends Component {
    state = { }
    render() {
    return (
    <div>
    
            <div className="card user-activity-card">
                <div className="card-header">
                    <h5>Activity</h5>
                </div>
                <div className="card-block">
                    <div className="row m-b-25">
                        <div className="col-auto p-r-0">
                            <div className="u-img">
                                <img src="..\files\assets\images\breadcrumb-bg.jpg" alt="user image"
                                    className="img-radius cover-img" />
                                <img src="..\files\assets\images\avatar-2.jpg" alt="user image"
                                    className="img-radius profile-img" />
                            </div>
                        </div>
                        <div className="col">
                            <h6 className="m-b-5">PT. Sehat Sentosa</h6>
                            <p className="text-muted m-b-0">
                                Membeli produk anda
                            </p>
                            <p className="text-muted m-b-0">
                                <i className="feather icon-clock m-r-10" />2 min ago
                            </p>
                        </div>
                    </div>
                    <div className="row m-b-25">
                        <div className="col-auto p-r-0">
                            <div className="u-img">
                                <img src="..\files\assets\images\breadcrumb-bg.jpg" alt="user image"
                                    className="img-radius cover-img" />
                                <img src="..\files\assets\images\avatar-2.jpg" alt="user image"
                                    className="img-radius profile-img" />
                            </div>
                        </div>
                        <div className="col">
                            <h6 className="m-b-5">PT. Makmur Jaya</h6>
                            <p className="text-muted m-b-0">
                                Melakukan pemabayaran kredit 
                            </p>
                            <p className="text-muted m-b-0">
                                <i className="feather icon-clock m-r-10" />3 min ago
                            </p>
                        </div>
                    </div>
                    <div className="row m-b-25">
                        <div className="col-auto p-r-0">
                            <div className="u-img">
                                <img src="..\files\assets\images\breadcrumb-bg.jpg" alt="user image"
                                    className="img-radius cover-img" />
                                <img src="..\files\assets\images\avatar-2.jpg" alt="user image"
                                    className="img-radius profile-img" />
                            </div>
                        </div>
                        <div className="col">
                            <h6 className="m-b-5">PT. Lokan Jaya</h6>
                            <p className="text-muted m-b-0">
                                Melakukan pembayaran INV-32912
                            </p>
                            <p className="text-muted m-b-0">
                                <i className="feather icon-clock m-r-10" />5 min ago
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#!" className="b-b-primary text-primary">
                            Lihat Transaksi Lainnya
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
    }
    } 

    export{ PageJudul, UserActivity}