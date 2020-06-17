import React from "react";
import "./Checkbox.css";

import PropTypes from "prop-types";

function Checkbox(props) {
  return (
    <div>
      <button className="checkbox icon" onClick={props.onChange}>
        <span className="material-icons">
          {props.checked ? "check_box" : "check_box_outline_blank"}
        </span>
      </button>
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
