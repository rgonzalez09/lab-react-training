import React from 'react';

const IdCard = (props) => {
  return (
    <div>
      <div>
        <b>First Name: </b>
        {props.firstName};
      </div>
      <div>
        <b>First Name: </b>
        {props.lastName};
      </div>
      <div>
        <b>Gender:</b>
        {props.gender};
      </div>
      <div>
        <b>Height:</b>
        {props.height};
      </div>
      <div>
        <b>Date Of Birth: </b>
        {props.birth.toString()};
      </div>
      <div>
        <img src={props.img} alt={props.firstName} />
      </div>
    </div>
  );
};

export default IdCard;
