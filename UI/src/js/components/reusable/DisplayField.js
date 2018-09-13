import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Input/output data component
 * */
class DisplayField extends Component {
    render() {
        return (
            <div className="form-group">
                <div className="input-group">
                    <span className="input-group-addon input-group-infos">
                        <strong>{this.props.label}</strong>
                    </span>
                    {
                         this.props.readOnly ?
                            <input className="form-control enabled" readOnly value={this.props.value}/>
                            :
                            <input data-keydata={this.props.keydata} className="form-control" onChange={this.props.onChange} value={this.props.value}/>
                    }
                </div>
            </div>
        );
    }

    static propTypes = {
        /**
         * Label of the grey box
         * */
        label: PropTypes.string.isRequired,
        /**
         * Value to be shown
         * */
        value: PropTypes.string,
        /**
         * Key data to help the input identification when data is changed
         * */
        keydata: PropTypes.string,
        /**
         * Function comming for the parent component to handle with the selecting change
         *
         * @param event
         * */
        onChange: PropTypes.func,
        /**
         * Boolean to block the display to only show data (as a normal input)
         * */
        readOnly: PropTypes.bool
    };

}

DisplayField.defaultProps = {
    readOnly: false
};

export default DisplayField;







