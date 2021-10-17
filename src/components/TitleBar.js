import React from 'react';

function TitleBar(props) {
    return (
        <div align = "right">
            <h5>PDP - PRODUCT DISCREPANCY PROGRAM</h5>
            {props.user || <p>Not Logged In</p>}
        </div>
    );

}

export default TitleBar;