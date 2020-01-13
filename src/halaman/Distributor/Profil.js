import React, {Component} from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'

class Profil extends Component {
    state = {  }
    render() { 
        return ( 
          <div>
            <Card>
                <CardBody>             
                       <ProfileCover imageBackground="..\files\assets\images\user-profile\bg-img1.jpg" imageProfile="..\files\assets\images\user-profile\user-img.jpg" name="Pt. Swadaya Indo" location="Pekanbaru"/>
                </CardBody> 
            </Card>
           
            <Card>
              <CardHeader>
                <h3 className="card-header-text">Deskripsi</h3>
                <hr></hr>
              </CardHeader>
              <CardBody>
            <Deskripsi isi="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. " />
              </CardBody>
            </Card>
            </div>
            );
    }
}
 
class ProfileCover extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
  <div className="col-lg-12">
    <div className="cover-profile">
      <div className="profile-bg-img">
        <img className="profile-bg-img img-fluid" src={this.props.imageBackground} alt="bg-img" />
        <div className="card-block user-info">
          <div className="col-md-12">
            <div className="media-left">
              <a href="#" className="profile-image">
                <img className="user-img img-radius" src={this.props.imageProfile} alt="user-img" />
              </a>
            </div>
            <div className="media-body row">
              <div className="col-lg-12">
                <div className="user-title">
                  <h2>{this.props.name}</h2>
                  <i class="icofont icofont-map-pins text-white"></i> <span className="text-white">{this.props.location}</span>
                </div>
              </div>
              <div>
                <div className="pull-right cover-btn">
                  <button type="button" className="btn btn-primary m-r-10 m-b-5"><i className="icofont icofont-plus" /> Follow</button>
                  <button type="button" className="btn btn-primary"><i className="icofont icofont-ui-messaging" /> Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

         );
    }
}
class Deskripsi extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="view-desc">
        <p>{this.props.isi}</p>
      </div>
     );
  }
}
 

export default Profil;