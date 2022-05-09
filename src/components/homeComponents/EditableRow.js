const EditableRow = ({
  item,
  index,
  detail,
  price,
  dateDetail,
  setDetail,
  setPrice,
  setDateDetail,
  handleEditDetailCancel,
}) => {
  return (
    <tr>
      <th className="is-borderless">{index + 1}</th>
      <td className="is-borderless">
        <input
          className="input is-small"
          type="text"
          required="required"
          name="detail"
          placeholder="Detail"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        ></input>
      </td>
      <td className="is-borderless">
        <input
          className="input is-small"
          type="number"
          step="0.01"
          placeholder="Price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
      </td>
      <td className="is-borderless">
        <input
          className="input is-small "
          type="date"
          name="date"
          value={dateDetail}
          onChange={(e) => setDateDetail(e.target.value)}
        ></input>
      </td>
      <td>
        <button type="submit" className="button is-small">
          Save
        </button>
      </td>
      <td>
        <button
          type="button"
          className="button is-small"
          onClick={handleEditDetailCancel}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
