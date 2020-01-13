import React, { Component} from 'react'
import {FormStock} from '../reuse/Form'
import { Card, CardHeader, CardBody} from 'reactstrap'

export default class Stock extends Component {
    render(

    ) {
    
    return (
        <Card>
            <CardHeader>
                <h2 className="title">Form Penambahan Stock</h2>
            </CardHeader>
            <CardBody>
            <App/>
                                    
                                    
            <div className="row">
              <div className="col-md-9 .ml-md-auto"></div>
              <div className="col-md-3 .ml-md-auto">
                                        <button type="button" class="btn btn-secondary mr-3">Batal</button>
                                        <button type="button" class="btn btn-primary">Simpan</button>
                                    </div>
                                    </div>
            </CardBody>
            
        </Card>
       
    )
    }
    }
    const {useState, useCallback, Fragment} = React

// The added element component
const AddedElement = () => <FormStock/>

// The parent component
const App = () => {
  const [count, setCount] = useState(0) 

  return <Fragment>
    {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
    <button onClick={() => setCount(count + 1)} class="btn btn-success btn-inline mb-3"><i class="icofont icofont-ui-add"></i>Tambah Stock</button>
    { Array(count).fill(<AddedElement />) }
  </Fragment>
}