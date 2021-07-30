import "./App.css";
import Search from "./Components/Search";
import PolicyDetails from "./Components/PolicyDetails";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  /*   const [policyId, setPolicyId] = useState("");
  const [customerId, setCustomerId] = useState(""); */
  const [policy, setPolicy] = useState("");

  useEffect(() => {
    fetch("/getdata", {
      method: "GET",
    })
      .then((resp) => {
        return resp.json();
      })
      .then((input) => {
        setData(input.data);
      });
  }, []);

  let PolicyValue = (event) => {
    let p_id = event.target.value;
    let policyFound = "";

    if (event.target.id === "customer") {
      /*  setCustomerId(p_id); */
      policyFound = data.filter((element) => element.Customer_id == p_id);
    } else if (event.target.id === "policy") {
      /* setPolicyId(p_id); */
      policyFound = data.filter((element) => element.Policy_id === p_id);
    }

    setPolicy(policyFound);
  };

  return (
    <div className="App">
      <Search PolicyValue={PolicyValue} />
      <PolicyDetails policy={policy} />
    </div>
  );
}

export default App;
