import React from 'react';
import { Link } from 'react-router-dom';

const Type = props => {
  console.log(props);
  return (
    <div>
      <ul>
        <li>
          <Link style={{}} to="/gym">Gym</Link>
        </li>
        <li>
          <Link to="/crossFit">Cross Fit</Link>
        </li>
        <li>
          <Link to="/yoga">Yoga</Link>
        </li>
      </ul>
    </div>
  )
}
export default Type;
