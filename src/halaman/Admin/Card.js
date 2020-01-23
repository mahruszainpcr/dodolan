import React, {Component } from 'react'
import { Card, CardHeader, CardText, CardBody, CardFooter, Button } from 'reactstrap'

class CardUtilitas extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>
            <CardHeader tag="h3">{this.props.judul}</CardHeader>
            <CardBody className="card-block">
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Go somewhere</Button>
            </CardBody>
          </Card>
         );
    }
}
 
export default CardUtilitas;