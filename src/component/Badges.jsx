import { Component } from "rainbowui-core";
import { Util } from 'rainbow-foundation-tools';
import "../css/style.css";
import PropTypes from 'prop-types';

export default class Badges extends Component {

    renderComponent() {

        const className = Util.parseBool(this.props.pill)?`badge badge-pill badge-${this.props.styleClass}`:`badge badge-${this.props.styleClass}`;

        if (this.props.onClick) {
            return (<a  href="javascript: void(0);"  onClick={this.props.onClick.bind(this)} className={className}>{this.props.children}</a>);
        } else {
            return (
                <span className={className}>{this.props.children}</span>
            );
        }

    }

};


Badges.propTypes = $.extend({}, Component.propTypes, {
    styleClass: PropTypes.string,
    onClick: PropTypes.func,
    pill: PropTypes.boolean
});


Badges.defaultProps = $.extend({}, Component.defaultProps, {
    styleClass: 'default',
    pill: "false",
    onClick:null
});

