import React from 'react';
import PropTypes from 'prop-types';
import './components.css';

export default function Alert(props) {
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type.toLowerCase()}`} role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}
      </div>
    )
  );
}

Alert.propTypes = {
  alert: PropTypes.shape({
    msg: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};
