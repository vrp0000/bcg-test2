import React from "react";
import { Link } from "react-router-dom";
let TableData = (props) => {
  let input = props.policy === "" ? [] : props.policy;
  return (
    <tbody className="TableData">
      {input.map((data) => {
        return (
          <tr key={data.Policy_id}>
            <td>{data.Policy_id}</td>
            <td>{data["Date of Purchase"]}</td>
            <td>{data.Customer_id}</td>
            <td>{data.Fuel}</td>
            <td>{data.VEHICLE_SEGMENT}</td>
            <td>{data.Premium}</td>
            <td>{data["bodily injury liability"]}</td>
            <td>{data[" personal injury protection"]}</td>
            <td>{data[" collision"]}</td>
            <td>{data[" comprehensive"]}</td>
            <td>{data.Customer_Gender}</td>
            <td>{data["Customer_Income group"]}</td>
            <td>{data.Customer_Region}</td>
            <td>{data.Customer_Marital_Status}</td>
            <td id={data.Policy_id}>
              <Link to={"/policy/" + data.Policy_id + "/" + data.Customer_id}>
                <i className="fa fa-edit"></i>
              </Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableData;
