import React, { Component } from 'react';
import {} from 'reactstrap'

class ListProduct extends Component {
state = { }
render() {
return (
<div></div>

);
}
}
class ListCart extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card list-view-media">
    <div className="card-block">
        <div className="media">
            <a className="media-left" href="#">
                <img className="media-object card-list-img" src="..\files\assets\images\avatar-1.jpg"
                    alt="Generic placeholder image" />
            </a>
            <div className="media-body">
                <div className="col-xs-12">
                    <h6 className="d-inline-block">
                        Distributor 1</h6>
                    <label className="label label-info ml-2">Distributor</label>
                </div>
                <div className="f-13 text-muted m-b-15">
                    Software Engineer
                </div>
                <p>Hi, This is my short intro text.
                    Lorem ipsum is a dummy content sit
                    dollar. You can copy and paste this
                    dummy content from anywhere and to
                    anywhere. Its all free and must be a
                    good to folllow in prectice</p>
                <div className="m-t-15">
                    <button type="button" data-toggle="tooltip" title="Facebook"
                        className="btn btn-facebook btn-mini waves-effect waves-light">
                        <span className="icofont icofont-social-facebook" />
                    </button>
                    <button type="button" data-toggle="tooltip" title="Twitter"
                        className="btn btn-twitter btn-mini waves-effect waves-light">
                        <span className="icofont icofont-social-twitter" />
                    </button>
                    <button type="button" data-toggle="tooltip" title="Linkedin"
                        className="btn btn-linkedin btn-mini waves-effect waves-light">
                        <span className="icofont icofont-brand-linkedin" />
                    </button>
                    <button type="button" data-toggle="tooltip" title="Drible"
                        className="btn btn-dribbble btn-mini waves-effect waves-light">
                        <span className="icofont icofont-social-dribble" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
         );
    }
}
 

export {ListProduct,ListCart};