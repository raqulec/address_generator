import React from 'react';
// import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import * as vkbeautify from 'vkbeautify';
import {Controlled as CodeMirror} from 'react-codemirror2';
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

    // componentDidMount() {
    //     this.codeMirror = CodeMirror.fromTextArea(this.refs.editor, {
    //         lineNumbers: true,
    //         mode: 'xml',
    //         rows: 27,
    //         lineWrapping: true,
    //     }).setValue(
    //         //     `<record>
    //         //         <Name>${this.props.province}</Name>
    //         //     </record>` 
    //         //     +
    //         //     `<record>
    //         //     <Name>${this.state.provi}</Name>
    //         // </record>` 
    //         this.state.provi
    //     );
    // }


    render() {
        return (
            <div className="form-group col-md-6">
            <CodeMirror value={`${vkbeautify.xml(`<record><Name>${this.props.province}</Name></record>`)}`}></CodeMirror>
                <label for="exampleFormControlTextarea1" className="alert alert-primary mb-3">Output</label>
                <textarea ref='editor' className="form-control mb-2" id="exampleFormControlTextarea1" rows="5" value={this.props.province}>dsada</textarea>
                <button type="button" class="btn btn-primary">Generate</button>
            </div>
        );
    }
}

export default AddressDisplay;