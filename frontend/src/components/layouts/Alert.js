import React from 'react';
import { connect } from 'react-redux';

function Alert(props) {
  return (
    <div>
      {props.alerts !== null &&
        props.alerts.length > 0 &&
        props.alerts.map((alert) => (
          <div key={alert.id} className={`alert alert-${alert.alertType}`}>
            {alert.msg}
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
