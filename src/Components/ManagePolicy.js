import TextBox from "./TextBox";
import { useEffect, useState } from "react";

let ManagePolicy = (props) => {
  const [data, setData] = useState("");
  const [condition, setCondition] = useState("false");

  //Getting the specific Policy
  useEffect(() => {
    fetch("/getpolicy", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        customerId: props.match.params.customerId,
        policyId: props.match.params.policyId,
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((recievedData) => {
        setData(recievedData[0]);
      });
  }, []);

  //On Form Submit
  let Submit = (event) => {
    event.preventDefault();

    let _body = {
      Fuel: data["Fuel"],
      VEHICLE_SEGMENT: data["VEHICLE_SEGMENT"],
      Premium: data["Premium"],
      '"bodily injury liability"': data["bodily injury liability"],
      '" personal injury protection"': data[" personal injury protection"],
      '" property damage liability"': data[" property damage liability"],
      '" collision"': data[" collision"],
      '" comprehensive"': data[" comprehensive"],
      Customer_Gender: data["Customer_Gender"],
      "Customer_Income group": data["Customer_Income group"],
      Customer_Region: data["Customer_Region"],
      Customer_Marital_Status: data["Customer_Marital_Status"],
    };
    console.log(_body);
    fetch("/updatepolicy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        customerId: props.match.params.customerId,
        policyId: props.match.params.policyId,
      },
      body: JSON.stringify(_body),
    }).then((response) => {
      console.log(response);
    });
  };

  //Change Handler
  let UpdateValue = (event) => {
    switch (event.target.id) {
      case "Fuel":
        setData((data) => {
          return { ...data, Fuel: event.target.value };
        });
        break;
      case "Vehicle Segment":
        setData((data) => {
          return { ...data, VEHICLE_SEGMENT: event.target.value };
        });
        break;
      case "Premium":
        if (event.target.value > 1000000) {
          setCondition("true");
          break;
        }
        setCondition("false");
        setData((data) => {
          return { ...data, Premium: event.target.value };
        });
        break;
      case "Body Injury Liability":
        setData((data) => {
          return { ...data, "bodily injury liability": event.target.value };
        });
        break;
      case "Property Injury Protection":
        setData((data) => {
          return { ...data, " property damage liability": event.target.value };
        });
        break;
      case "Personal Injury Protection":
        setData((data) => {
          return { ...data, " personal injury protection": event.target.value };
        });
        break;
      case "Collision":
        setData((data) => {
          return { ...data, " collision": event.target.value };
        });
        break;
      case "Comprehensive":
        setData((data) => {
          return { ...data, " comprehensive": event.target.value };
        });
        break;
      case "Gender":
        setData((data) => {
          return { ...data, Customer_Gender: event.target.value };
        });
        break;
      case "Income Group":
        setData((data) => {
          return { ...data, "Customer_Income group": event.target.value };
        });
        break;
      case "Customer Region":
        setData((data) => {
          return { ...data, Customer_Region: event.target.value };
        });
        break;
      case "Martial Status":
        setData((data) => {
          return { ...data, Customer_Marital_Status: event.target.value };
        });
        break;
      default:
    }
  };

  return (
    <div>
      <h2> Edit Policy </h2>
      <hr />
      <div className="ManagePolicy">
        <form onSubmit={Submit}>
          <table className="PolicyFormTable">
            <tbody>
              <TextBox
                label="Customer ID"
                values={props.match.params.customerId}
                isDisabled={true}
              />
              <TextBox
                label="Policy ID"
                values={props.match.params.policyId}
                isDisabled={true}
              />
              <TextBox
                label="Fuel"
                values={data["Fuel"]}
                isDisabled={false}
                UpdateValue={UpdateValue}
              />
              <TextBox
                label="Purchase Date"
                values={data["Date of Purchase"]}
                isDisabled={true}
              />
              <TextBox
                label="Vehicle Segment"
                values={data["VEHICLE_SEGMENT"]}
                isDisabled={false}
                UpdateValue={UpdateValue}
              />
              <TextBox
                label="Premium"
                values={data["Premium"]}
                isDisabled={false}
                UpdateValue={UpdateValue}
              />
              <tr>
                <td>
                  {condition === "true"
                    ? "Premium should be less than 1 million"
                    : " "}
                </td>
              </tr>
              <TextBox
                label="Body Injury Liability"
                values={data["bodily injury liability"]}
                isDisabled={false}
                UpdateValue={UpdateValue}
              />
              <TextBox
                label="Property Injury Protection"
                values={data[" property damage liability"]}
                isDisabled={false}
                UpdateValue={UpdateValue}
              />

              <TextBox
                label="Personal Injury Protection"
                values={data[" personal injury protection"]}
                isDisabled={false}
                UpdateValue={UpdateValue}
              />
              <TextBox
                label="Collision"
                values={data[" collision"]}
                isDisabled={false}
                UpdateValue={UpdateValue}
              />
              <TextBox
                label="Comprehensive"
                values={data[" comprehensive"]}
                isDisabled={false}
                UpdateValue={UpdateValue}
              />
              <TextBox
                label="Gender"
                values={data["Customer_Gender"]}
                isDisabled={false}
                UpdateValue={UpdateValue}
              />
              <TextBox
                label="Income Group"
                values={data["Customer_Income group"]}
                isDisabled={false}
                UpdateValue={UpdateValue}
              />
              <TextBox
                label="Customer Region"
                values={data["Customer_Region"]}
                isDisabled={false}
                UpdateValue={UpdateValue}
              />
              <TextBox
                label="Martial Status"
                values={data["Customer_Marital_Status"]}
                isDisabled={false}
                UpdateValue={UpdateValue}
              />
              <tr style={{ textAlign: "center" }}>
                <td colSpan={2}>
                  <input type="Submit" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};
export default ManagePolicy;
