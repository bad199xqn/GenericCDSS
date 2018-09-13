import React from 'react';
import PropTypes from 'prop-types';
import Reflux from 'reflux';
import {ClinicalVariablesStore, ClinicalVariablesActions} from '../../reflux/ClinicalVariablesReflux.js';
import DisplayOptionsField from '../reusable/DisplayOptionsField.js';
import DisplayField from '../reusable/DisplayField.js';

class InquiryElement extends Reflux.Component {
    constructor(props) {
        super(props);
        this.store = ClinicalVariablesStore;
        this.state = {
            nextElementId: (this.props.elementID + 1).toString(),
            cvInSystem: [],
            cv: undefined
        };
    }

    componentDidMount() {
        ClinicalVariablesActions.loadCVHeaders();
    }


    //Testing if this will be needed
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState !== this.state)
    //         this.props.updateModal();
    // }

    cvSelectHandleChange = (selection) => {
        this.setState({cv: selection.value});
    };

    nextElementIdHandleChange = (event) => {
        event.preventDefault();
        this.setState({nextElementId: event.target.value});
    };
    
    render() {
        return (
            <div>
                <DisplayOptionsField label={"Clinical variable"}
                                     options={this.state.cvInSystem}
                                     onChange={this.cvSelectHandleChange}/>
                <DisplayField label={"Next element"}
                              onChange={this.nextElementIdHandleChange}
                              value={this.state.nextElementId}
                              type={"number"}
                              min={"0"}/>
            </div>
        );
    }

    static propTypes = {
        /**
         * Next element id
         * */
        nextElementId: PropTypes.number,
    };
}

InquiryElement.defaultProps = {
    elementID: 1
};

export default InquiryElement;