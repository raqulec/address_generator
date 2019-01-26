import React from 'react';
// import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import * as vkbeautify from 'vkbeautify';
import { Controlled as CodeMirror } from 'react-codemirror2';
import js from 'codemirror/mode/javascript/javascript';
import * as addressTemplate from '../../addressTemplate';
import { format } from 'path';
require('codemirror/mode/xml/xml');
var a = require('xml-formatter');



class AddressDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            provi: vkbeautify.xml(`<record><Name>${this.props.province}</Name></record><record><Name1>${this.props.province}</Name1></record>`),
        }
    }

    render() {
        return (
            <div className="form-group col-md-6">
                <label for="exampleFormControlTextarea1" className="alert alert-primary mb-3">Output</label>
                <CodeMirror options={{
                    lineNumbers: true,
                    mode: 'xml',
                    rows: 27,
                    lineWrapping: true,
                }} value={`${vkbeautify.xml(`<record><Name>${this.props.province}</Name></record><record><Name>${this.props.province}</Name></record>`)}`}></CodeMirror>
            </div>
        );
    }
}

export default AddressDisplay;