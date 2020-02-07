import React, { Component } from 'react';
import { Card, CardBody,Form, FormGroup, CardFooter, Label, Input, CardHeader, CardText, Button} from 'reactstrap'
import { SubJudul } from '../reuse/Typografi';
import { SelectProduk,SelectPromosi } from '../reuse/Select';
import { FormPromosi, FormBonus } from '../reuse/Form';
import App from '../../App';


class InputPromosiProduk extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>
              <CardHeader>
                  <SubJudul name="Form Input Promosi Produk"/>
              </CardHeader>
              <CardBody>
                  <div className="card-block">
                  <SelectPromosi/>
                
                  </div>
                  <div className="row">
                      <div className="col-md-6">
                          <Appa/>
                      </div>
                      <div className="col-md-6">
                          <Appb/>
                      </div>
                  </div>

              
              </CardBody>
          </Card>
         );
    }
}
class InputNum extends Component {
    state = { }
    render() {
    return (
    <FormGroup>
    <Label for={this.props.name}>{this.props.nama}</Label>
        <input type="number" id={this.props.name} name={this.props.name} placeholder="ex.1212" className="form-control" />
    </FormGroup>
    );
    }
    }
    
    const {useState, useCallback, Fragment} = React

// The added element component
const AddedElement = () => <FormPromosi/>

// The parent component
const Appa = () => {
  const [count, setCount] = useState(0) 

  return <Fragment>
    {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
    <button onClick={() => setCount(count + 1)} class="btn btn-success btn-inline mb-3"><i class="icofont icofont-ui-add"></i>Tambah Produk</button>
    { Array(count).fill(<AddedElement />) }
  </Fragment>
}

const AddedElement2 = () => <FormBonus/>

// The parent component
const Appb = () => {
  const [count, setCount] = useState(0) 

  return <Fragment>
    {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
    <button onClick={() => setCount(count + 1)} class="btn btn-success btn-inline mb-3"><i class="icofont icofont-ui-add"></i>Tambah Bonus</button>
    { Array(count).fill(<AddedElement2 />) }
  </Fragment>
}


// class Input extends Component {
//   state = { }
//   render() {
//   return (
//   <div>
//       <label> {this.props.label} </label>
//       <input type={this.props.type} name={this.props.name} id={this.props.name} className="form-control form-control-capitalize" />
//   </div>
//   );
//   }
//   }
 
export default InputPromosiProduk;