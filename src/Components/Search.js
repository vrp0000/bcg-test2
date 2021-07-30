import React from "react"

let Search = (props) =>
{
    return (
        <div className="Search">
            <div className="search-options">Policy-ID <input type="text" id="policy" onChange={props.PolicyValue} /></div>
            <div className="search-options">Customer-ID <input type="text" id="customer" onChange={props.PolicyValue} /></div>
        </div>
    )
}

export default Search