import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import * as vkbeautify from 'vkbeautify';
import { Controlled as CodeMirror } from 'react-codemirror2';
require('codemirror/mode/xml/xml');



class AddressDisplay extends React.Component {

    render() {
        return (
            <div className="form-group col-md-6">
                <label for="exampleFormControlTextarea1" className="alert alert-primary mb-3">Output</label>
                <CodeMirror options={{
                    lineNumbers: true,
                    mode: 'xml',
                    rows: 27,
                    lineWrapping: true,
                }} value={`${vkbeautify.xml(
                    `<FirstName><Value>${this.props.firstName}</Value></FirstName>
                    <LastName><Value>${this.props.lastName}</Value></LastName>
                    <Telephone><Value>${this.props.telephone}</Value></Telephone>
                    <Mobile><Value>${this.props.mobile}</Value></Mobile>
                    <City><Value>${this.props.city}</Value></City>
                    <Street><Value>${this.props.street}</Value></Street>
                    <HouseNo><Value>${this.props.houseNo}</Value></HouseNo>
                    <HouseExt><Value>${this.props.houseExt}</Value></HouseExt>
                    <Postcode><Value>${this.props.postcode}</Value></Postcode>
                    <Province><Value>${this.props.province}</Value></Province>
                    <Country><Value>${this.props.country}</Value></Country>`
                )}`}></CodeMirror>
            </div>
        );
    }
}

export default AddressDisplay;