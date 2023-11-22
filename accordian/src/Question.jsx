import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Question = (props) => {
  const { title, info } = props;
  // add a state variable here
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {/* make this toggle functionality 
				onClick */}
        <button onClick={handleClick} className="btn">
          {toggle ? "🡅":"🡇"}
        </button>
      </header>
      {/* make this render conditionally */}
      {toggle ? <p>{info}</p> : <></>}
    </article>
  );
};

export default Question;
