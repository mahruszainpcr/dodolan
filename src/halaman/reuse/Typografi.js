import React , { Component } from 'react'
import {Card} from 'reactstrap'

class Typografi extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>

            </Card>
         );
    }
}
 
class SubJudul extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <h3 className="sub-title">{this.props.name}</h3>
            <div className="card-header-right">
                    <ul className="list-unstyled card-option">
                        <li><i className="feather icon-credit-card full-card" /></li>
                        <li><i className="feather icon-minus minimize-card" /></li>
                        <li><i className="feather icon-trash-2 close-card" /></li>
                    </ul>
                    </div></div>
         );
    }
}

class SubJudul2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <h3 className="sub-title">{this.props.name}</h3>
            <div className="card-header-right">
                   
                    </div></div>
         );
    }
}

         
export {Typografi,SubJudul,SubJudul2};
