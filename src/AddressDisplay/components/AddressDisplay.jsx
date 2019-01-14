import React from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import js from 'codemirror/mode/javascript/javascript';
import * as addressTemplate from '../../addressTemplate';
require('codemirror/mode/xml/xml');

class AddressDisplay extends React.Component {
    constructor() {
        super()
        //  this.codeMirror = this.codeMirror.bind(this);
    }

    componentDidMount() {
        this.codeMirror = CodeMirror.fromTextArea(this.refs.editor, {
            lineNumbers: true,
            mode: 'xml',
            rows: 27,
            lineWrapping: true,
          }).setValue(this.props.province);
    }
    render() {
        return (
            <div className="form-group col-md-6">
                <label for="exampleFormControlTextarea1" className="alert alert-primary mb-3">Output</label>
                <textarea ref='editor' className="form-control mb-2" id="exampleFormControlTextarea1" rows="207" >dsada</textarea>
                <button type="button" class="btn btn-primary" >Generate</button>
            </div>
        );
    }
}

export default AddressDisplay;