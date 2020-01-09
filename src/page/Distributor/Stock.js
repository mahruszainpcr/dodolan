import React, { Component} from 'react'
import FormStock from '../reuse/Form'
import {Page, UserActivity} from '../reuse/Page'

export default class Stock extends Component {
    render() {
    
    return (
    <div>
    <Page title="Stock Product" icon="icofont icofont-stock-search" judul="Stock" subJudul="List"/>

        <FormStock JudulForm="Form Tambah Stock"/>
    
    </div>
    )
    }
    }