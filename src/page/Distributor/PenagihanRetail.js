import React, { Component } from 'react'
import TabelTagihRetail from './TabelTagihRetail';
import DataRetail from './DataRetail';

export default class PenagihanRetail extends Component {
render() {
return (
<div>

    <div>
        <div className="page-body">
            <div className="row">
                <div className="col">
                    <DataRetail />
                </div>
            </div>
            <TabelTagihRetail />
            {/* End */}

        </div>
    </div>
</div>
)
}
}