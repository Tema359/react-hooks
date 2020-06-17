import React from "react";
import "./Button.css";


import PropTypes from "prop-types";

function Button(props) {
  return (
    <div>
      <button className={props.className} onClick={props.onClick} {...props}>
        {props.icon ? 
          <span className="material-icons">{props.icon}</span> :
          props.children}
      </button>
    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
