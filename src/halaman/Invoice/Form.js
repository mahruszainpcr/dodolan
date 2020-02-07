import React, { Component } from 'react';
import {} from 'reactstrap'

class Invoice_Form extends Component {
state = { }
render() {
return (
<div>
        <div className="row invoice-contact">
            <div className="col-md-8">
                <div className="invoice-box row">
                    <div className="col-sm-12">
                        <table className="table table-responsive invoice-table table-borderless">
                            <tbody>
                                <tr>
                                    <td><img src="..\files\assets\images\logo-blue.png" className="m-b-10" alt /></td>
                                </tr>
                                <tr>
                                    <td>Dodolan</td>
                                </tr>
                                <tr>
                                    <td>123 6th St. Melbourne, FL 32904 West Chicago, IL 60185</td>
                                </tr>
                                <tr>
                                    <td><a href="..\..\..\cdn-cgi\l\email-protection.htm#99fdfcf4f6d9fef4f8f0f5b7faf6f4"
                                            target="_top"><span className="__cf_email__"
                                                data-cfemail="690d0c0406290e04080005470a0604">[email&nbsp;protected]</span></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>+91 919-91-91-919</td>
                                </tr>
                                {/* <tr>
                                    <td><a href="#" target="_blank">www.demo.com</a>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            </div>
        </div>
        <div className="card-block">
            <div className="row invoive-info">
                <div className="col-md-4 col-xs-12 invoice-client-info">
                    <h6>Client Information :</h6>
                    <h6 className="m-0">Josephin Villa</h6>
                    <p className="m-0 m-t-10">123 6th St. Melbourne, FL 32904 West Chicago, IL 60185</p>
                    <p className="m-0">(1234) - 567891</p>
                    <p><a href="..\..\..\cdn-cgi\l\email-protection.htm" className="__cf_email__"
                            data-cfemail="eb8f8e8684ab939291c5888486">[email&nbsp;protected]</a></p>
                </div>
                <div className="col-md-4 col-sm-6">
                    <h6>Order Information :</h6>
                    <table className="table table-responsive invoice-table invoice-order table-borderless">
                        <tbody>
                            <tr>
                                <th>Date :</th>
                                <td>November 14</td>
                            </tr>
                            <tr>
                                <th>Status :</th>
                                <td>
                                    <span className="label label-warning">Pending</span>
                                </td>
                            </tr>
                            <tr>
                                <th>Id :</th>
                                <td>
                                    #145698
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4 col-sm-6">
                    <h6 className="m-b-20">Invoice Number <span>#12398521473</span></h6>
                    <h6 className="text-uppercase text-primary">Total Due :
                        <span>$900.00</span>
                    </h6>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="table-responsive">
                        <table className="table  invoice-detail-table">
                            <thead>
                                <tr className="thead-default">
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <h6>Logo Design</h6>
                                        <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt </p>
                                    </td>
                                    <td>6</td>
                                    <td>$200.00</td>
                                    <td>$1200.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6>Logo Design</h6>
                                        <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt </p>
                                    </td>
                                    <td>7</td>
                                    <td>$100.00</td>
                                    <td>$700.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6>Logo Design</h6>
                                        <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt </p>
                                    </td>
                                    <td>5</td>
                                    <td>$150.00</td>
                                    <td>$750.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <table className="table table-responsive invoice-table invoice-total">
                        <tbody>
                            <tr>
                                <th>Sub Total :</th>
                                <td>$4725.00</td>
                            </tr>
                            <tr>
                                <th>Taxes (10%) :</th>
                                <td>$57.00</td>
                            </tr>
                            <tr>
                                <th>Discount (5%) :</th>
                                <td>$45.00</td>
                            </tr>
                            <tr className="text-info">
                                <td>
                                    <hr />
                                    <h5 className="text-primary">Total :</h5>
                                </td>
                                <td>
                                    <hr />
                                    <h5 className="text-primary">$4827.00</h5>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h6>Terms And Condition :</h6>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>
                </div>
            </div>
        </div>
   
    {/* Invoice card end */}
    <div className="row text-center">
        <div className="col-sm-12 invoice-btn-group text-center">
            <button type="button"
                className="btn btn-primary btn-print-invoice m-b-10 btn-sm waves-effect waves-light m-r-20">Print</button>
            <button type="button" className="btn btn-danger waves-effect m-b-10 btn-sm waves-light">Cancel</button>
        </div>
    </div>
</div>

);
}
}

export default Invoice_Form;