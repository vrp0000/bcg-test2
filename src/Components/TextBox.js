let TextBox = (props) => {
  return (
    <tr key={props.label + "-" + props.valuess}>
      <td>
        <label>{props.label}</label>
      </td>
      <td>
        <input
          id={props.label}
          type="text"
          defaultValue={props.values}
          disabled={props.isDisabled}
          onChange={props.UpdateValue}
        />
      </td>
    </tr>
  );
};
export default TextBox;
