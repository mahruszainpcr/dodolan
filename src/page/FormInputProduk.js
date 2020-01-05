import React, { Component } from 'react'

export default class FormInputProduk extends Component {
render() {
return (
<div>
    <div className="page-body">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h3>Input Produk</h3>
                        <span>Harap mengisi <b>semua</b> form yang telah tertera</span>
                    </div>
                    <div className="card-block">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="wizard">
                                    <section>
                                        <form className="wizard-form" id="example-advanced-form" action="#">
                                            <h3> Registration </h3>
                                            <fieldset>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="userName-2" className="block">
                                                            User name *
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="userName-2" name="userName" type="text"
                                                            className="required form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="email-2" className="block">
                                                            Email *
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="email-2" name="email" type="email"
                                                            className="required form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="password-2" className="block">
                                                            Password *
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="password-2" name="password" type="password"
                                                            className="form-control required" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="confirm-2" className="block">
                                                            Confirm Password *
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="confirm-2" name="confirm" type="password"
                                                            className="form-control required" />
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <h3> General information </h3>
                                            <fieldset>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="name-2" className="block">
                                                            First name *
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="name-2" name="name" type="text"
                                                            className="form-control required" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="surname-2" className="block">
                                                            Last name *
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="surname-2" name="surname" type="text"
                                                            className="form-control required" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="phone-2" className="block">
                                                            Phone #
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="phone-2" name="phone" type="number"
                                                            className="form-control required phone" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="date" className="block">
                                                            Date Of Birth
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="date" name="Date Of Birth" type="text"
                                                            className="form-control required date-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">Select Country</div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <select className="form-control required">
                                                            <option>Select State</option>
                                                            <option>Gujarat</option>
                                                            <option>Kerala</option>
                                                            <option>Manipur</option>
                                                            <option>Tripura</option>
                                                            <option>Sikkim</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <h3> Education </h3>
                                            <fieldset>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="University-2" className="block">
                                                            University
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="University-2" name="University" type="text"
                                                            className="form-control required" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="Country-2" className="block">
                                                            Country
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="Country-2" name="Country" type="text"
                                                            className="form-control required" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="Degreelevel-2" className="block">
                                                            Degree level #
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="Degreelevel-2" name="Degree level" type="text"
                                                            className="form-control required phone" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="datejoin" className="block">
                                                            Date Join
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="datejoin" name="Date Of Birth" type="text"
                                                            className="form-control required" />
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <h3> Work experience </h3>
                                            <fieldset>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="Company-2" className="block">
                                                            Company:
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="Company-2" name="Company:" type="text"
                                                            className="form-control required" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="CountryW-2" className="block">
                                                            Country
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="CountryW-2" name="Country" type="text"
                                                            className="form-control required" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="Position-2" className="block">
                                                            Position
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="Position-2" name="Position" type="text"
                                                            className="form-control required" />
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>;

                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
}