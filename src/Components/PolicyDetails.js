import React, { useEffect, useState } from "react";

import TableData from "./Tabledata";

let PolicyDetails = (props) => {
  const [data, setData] = useState("");
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    setData(props.policy.slice(0, 10));
  }, [props.policy]);

  let getTableData = (event) => {
    let _id = event.target.id,
      _counter = 0;
    if (_id === "Next") {
      _counter = counter + 10;
      setCounter(_counter);
    } else if (_id === "Previous") {
      _counter = counter - 10 < 0 ? 0 : counter - 10;
      setCounter(_counter);
    }
    if (data !== "") {
      if (_id === "Next")
        setData(() => {
          return props.policy.slice(counter, _counter + 1);
        });
      else if (_id === "Previous")
        setData(() => {
          return props.policy.slice(_counter, counter);
        });
    }
  };

  return (
    <div>
      <div className="PolicyDetails">
        <table className="PolicyTable" border="2" cellPadding="5px">
          <thead>
            <tr>
              <td>Policy ID</td>
              <td>Purchase Date</td>
              <td>Customer ID</td>
              <td>Fuel</td>
              <td>Vehicle Segment</td>
              <td>Premium</td>
              <td>Body Injury Liability</td>
              <td>Personal Injury Protection</td>
              <td>Collision</td>
              <td>Comprehensive</td>
              <td>Gender</td>
              <td>Income Group</td>
              <td>Region</td>
              <td>Martial Status</td>
            </tr>
          </thead>

          <TableData policy={data} />
        </table>
      </div>
      <div className="Navigate">
        <div>
          <button
            id="Previous"
            onClick={getTableData}
            disabled={counter <= 0 ? true : false}
          >
            Previous
          </button>
        </div>

        <div>
          <button
            id="Next"
            onClick={getTableData}
            disabled={counter >= props.policy.length ? true : false}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetails;
