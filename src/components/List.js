import React from "react";
import datas from "../datas.json";

const List = () => {
  
  const getDatas = () => {
    return (datas.map = (value, key) => {
      return (
        <li key={key} className="user">
          {value.first_name} - {value.email}
        </li>
      );
    });
  };

  return (
    <div className="user_wrapper">
      <ul>{getDatas()}</ul>
    </div>
  );
};

export default List;
