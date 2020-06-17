import React from "react";


import PropTypes from 'prop-types'
import Stats from '../stats/Stats'
import Stopwatch from '../stopwatch/Stopwatch'

function Header(props) {
  return (
    <div>
      <header>
        <Stats todos={props.todos}/>
          <h1>{props.title}</h1>
          <Stopwatch />
      </header>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired
}


export default Header