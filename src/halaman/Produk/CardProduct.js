import React, { Component } from 'react'




class CardProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                  <div className="col-xl-3 col-md-6 col-sm-6 col-xs-12">
        <div className="card prod-view">
            <div className="prod-item text-center">
                <div className="prod-img">
                    <div className="option-hover">
                        <button type="button"
                            className="btn btn-success btn-icon waves-effect waves-light m-r-15 hvr-bounce-in option-icon">
                            <i className="icofont icofont-cart-alt f-20" />
                        </button>
                        <button type="button"
                            className="btn btn-primary btn-icon waves-effect waves-light m-r-15 hvr-bounce-in option-icon">
                            <i className="icofont icofont-eye-alt f-20" />
                        </button>
                        <button type="button"
                            className="btn btn-danger btn-icon waves-effect waves-light hvr-bounce-in option-icon">
                            <i className="icofont icofont-heart-alt f-20" />
                        </button>
                    </div>
                    <a href="#!" className="hvr-shrink">
                        <img src="..\files\assets\images\product\p1.jpg" className="img-fluid o-hidden"
                            alt="prod1.jpg" />
                    </a>
                    <div className="p-new">
                        <a href> { this.props.label } </a>
                    </div>
                </div>
                <div className="prod-info">
                    <a href="#!" className="txt-muted">
                        <h4>{ this.props.namaProduk}</h4>
                    </a>
                    <div className="m-b-10">
                        <label className="label label-success">
                            {  this.props.Rating  } <i className="fa fa-star" />
                        </label>
                        <a className="text-muted f-w-600">{ this.props.jumlahRating } Ratings &amp; { this.props.jumlahReview } Reviews</a>
                    </div>
                    <span className="prod-price">
                        {/* <i className="icofont icofont-cur-dollar" /> */}
                        Rp {  this.props.harga }{" "}
                        {/* <small className="old-price">
                            <i className="icofont icofont-cur-dollar" />
                            
                        </small> */}
                    </span>
                </div>
            </div>
        </div>
            </div>
         );
    }
}
 
export default CardProduct;
