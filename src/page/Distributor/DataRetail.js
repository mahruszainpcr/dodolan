import React, { Component, createContext } from 'react'

export default class DataRetail extends Component {
render() {
return (
<div>
    <div className="row">
    <div className="col-xl-4 col-md-12">
    <UserActivity />
    </div>
 

    <div className="col-xl-8 col-md-12">
        <ListRetail/>
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
              <Aktifitas image="..\files\assets\images\breadcrumb-bg.jpg" nama_retail="PT. Surya Swakarsa" aktifitas="Melakukan pembelian" waktu="2 min ago"/>
              <Aktifitas image="..\files\assets\images\breadcrumb-bg.jpg" nama_retail="PT. Surya Swakarsa" aktifitas="Melakukan pembelian" waktu="2 min ago"/>
              <Aktifitas image="..\files\assets\images\breadcrumb-bg.jpg" nama_retail="PT. Surya Swakarsa" aktifitas="Melakukan pembelian" waktu="2 min ago"/>
                  
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
// ..\files\assets\images\breadcrumb-bg.jpg"
class Aktifitas extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row m-b-25">
            <div className="col-auto p-r-0">
                <div className="u-img">
                    <img src={this.props.image} alt="user image"
                        className="img-radius cover-img" />
                </div>
            </div>
            <div className="col">
                <h6 className="m-b-5">{this.props.nama_retail}</h6>
                <p className="text-muted m-b-0">
                    {this.props.aktifitas}
                </p>
                <p className="text-muted m-b-0">
                    <i className="feather icon-clock m-r-10" />{this.props.waktu}
                </p>
            </div>
        </div>
         );
    }
}
 
class ListRetail extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               
        <div className="card table-card">
            <div className="card-header">
                <h3 className="sub-title mb-0">Pelanggan 5 Terbaik</h3>
            </div>
            <div className="card-block">
                <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                        <thead>
                            <tr>
                                <th>Nomor</th>
                                <th>Nama</th>
                                <th>Penjualan</th>
                                <th>Kuantitas %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>PT. Suka Maju</td>
                                <td>3,562</td>
                                <td>56.23%</td>
                            </tr>
                            <tr>
                               <td>2</td>
                                <td>PT. Fajar Mentari</td>
                                <td>2,650</td>
                                <td>25.23%</td>
                            </tr>
                            <tr>
                               <td>3</td>
                                <td>PT. Wonosobo</td>
                                <td>956</td>
                                <td>12.45%</td>
                            </tr>
                            <tr>
                                <td>4</td><td>PT. Indah Jaya</td>
                                <td>689</td>
                                <td>8.65%</td>
                            </tr>
                            <tr>
                               <td>5</td>
                                <td>PT. Makmur</td>
                                <td>560</td>
                                <td>3.56%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-right  m-r-20">
                    <a href="#!" className="b-b-primary text-primary">
                        View all Sales Locations{" "}
                    </a>
                </div>
            </div>
        </div>
    </div>
         );
    }
}

