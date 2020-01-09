import React, { Component } from 'react'
// import Link from 'next/link'
  
export default class ProdukDistributor extends Component {
    render() {
        return (
            <div>
                
<div>
    <div className="page-body">
    <div className="row">
  <div className="col-sm-12">
    {/* Product list card start */}
    <div className="card">
      <div className="card-header">
        <h5>Product List</h5>
       
        <button
          type="button"
          className="btn btn-primary waves-effect waves-light f-right d-inline-block md-trigger"
          data-modal="modal-13"
        >
          {" "}
          <i className="icofont icofont-plus m-r-5" /> Add Product
        </button>
 
      </div>
      <div className="card-block">
        <div className="table-responsive">
          <div className="table-content">
            <div className="project-table">
              <table
                id="e-product-list"
                className="table table-striped dt-responsive nowrap"
              >
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Amount</th>
                    <th>Stock</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l1.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6>Frock Designs</h6>
                      <span>
                        Lorem ipsum dolor sit consec te imperdiet iaculis
                        ipsum..
                      </span>
                    </td>
                    <td>$456</td>
                    <td>
                      <label className="text-danger">Out Of Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l6.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> Style Tops </h6>
                      <span>
                        Interchargebla lens Digital Camera with APS-C-X Trans
                        CMOS Sens
                      </span>
                    </td>
                    <td>$689</td>
                    <td>
                      <label className="text-success">In Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l2.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> Kurta Women </h6>
                      <span>
                        Lorem ipsum dolor sit consec te imperdiet iaculis
                        ipsum..
                      </span>
                    </td>
                    <td>$755</td>
                    <td>
                      <label className="text-warning">Low Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l3.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> T Shirts For Women </h6>
                      <span>
                        Lorem ipsum dolor sit consec te imperdiet iaculis
                        ipsum..
                      </span>
                    </td>
                    <td>$989</td>
                    <td>
                      <label className="text-success">In Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l4.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> Black Frock For Women </h6>
                      <span>
                        Interchargebla lens Digital Camera with APS-C-X Trans
                        CMOS Sens
                      </span>
                    </td>
                    <td>$1150</td>
                    <td>
                      <label className="text-success">In Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l5.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> T Shirts For Women </h6>
                      <span>
                        Lorem ipsum dolor sit consec te imperdiet iaculis
                        ipsum..
                      </span>
                    </td>
                    <td>$2006</td>
                    <td>
                      <label className="text-danger">Out Of Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l7.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> Digital Print Top </h6>
                      <span>
                        sum dolor sit consec te imperdiet iaculis ipsum..
                      </span>
                    </td>
                    <td>$1199</td>
                    <td>
                      <label className="text-success">In Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l8.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> One Piece Dress</h6>
                      <span className="text-muted f-12">
                        Lorem ipsum dolor sit consec te imperdiet iaculis
                        ipsum..
                      </span>
                    </td>
                    <td>$589</td>
                    <td>
                      <label className="text-warning">Low Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l9.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> kurat style Dress </h6>
                      <span>
                        sum dolor sit consec te imperdiet iaculis ipsum..
                      </span>
                    </td>
                    <td>$1255</td>
                    <td>
                      <label className="text-danger">Out Of Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l8.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> T Shirts For Women </h6>
                      <span>
                        Interchargebla lens Digital Camera with APS-C-X Trans
                        CMOS Sens
                      </span>
                    </td>
                    <td>$499</td>
                    <td>
                      <label className="text-success">In Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l7.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> T Shirts For Women </h6>
                      <span>
                        Interchargebla lens Digital Camera with APS-C-X Trans
                        CMOS Sens
                      </span>
                    </td>
                    <td>$259</td>
                    <td>
                      <label className="text-success">In Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l6.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> T Shirts For Women </h6>
                      <span>
                        Interchargebla lens Digital Camera with APS-C-X Trans
                        CMOS Sens
                      </span>
                    </td>
                    <td>$456</td>
                    <td>
                      <label className="text-success">In Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l5.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> T Shirts For Women </h6>
                      <span>
                        Interchargebla lens Digital Camera with APS-C-X Trans
                        CMOS Sens
                      </span>
                    </td>
                    <td>$456</td>
                    <td>
                      <label className="text-success">In Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l4.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> T Shirts For Women </h6>
                      <span>
                        Interchargebla lens Digital Camera with APS-C-X Trans
                        CMOS Sens
                      </span>
                    </td>
                    <td>$456</td>
                    <td>
                      <label className="text-success">In Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l2.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> T Shirts For Women </h6>
                      <span>
                        Interchargebla lens Digital Camera with APS-C-X Trans
                        CMOS Sens
                      </span>
                    </td>
                    <td>$456</td>
                    <td>
                      <label className="text-success">In Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pro-list-img">
                      <img
                        src="..\files\assets\images\product-list\pro-l1.png"
                        className="img-fluid"
                        alt="tbl"
                      />
                    </td>
                    <td className="pro-name">
                      <h6> T Shirts For Women </h6>
                      <span>
                        Interchargebla lens Digital Camera with APS-C-X Trans
                        CMOS Sens
                      </span>
                    </td>
                    <td>$456</td>
                    <td>
                      <label className="text-success">In Stock</label>
                    </td>
                    <td className="action-icon">
                      <a
                        href="#!"
                        className="m-r-15 text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Edit"
                      >
                        <i className="icofont icofont-ui-edit" />
                      </a>
                      <a
                        href="#!"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete"
                      >
                        <i className="icofont icofont-delete-alt" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Product list card end */}
  </div>
</div>;

       </div>
</div>
            </div>
        )
    }
}
