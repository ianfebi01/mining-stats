import React from 'react';

const AddDetail = (
  newDetail,
  newPrice,
  newDateDetail,
  setNewDetail,
  setNewPrice,
  setNewDateDetail
) => {
  return (
    <tr>
      {/* <th className="is-borderless">{index + 1}</th> */}
      <td className="is-borderless">
        <input
          className="input is-small"
          type="text"
          required="required"
          name="detail"
          placeholder="Detail"
          value={newDetail}
          onChange={(e) => setNewDetail(e.target.value)}
        ></input>
      </td>
      <td className="is-borderless">
        <input
          className="input is-small"
          type="number"
          step="0.01"
          placeholder="Price"
          name="price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        ></input>
      </td>
      <td className="is-borderless">
        <input
          className="input is-small "
          type="date"
          name="date"
          value={newDateDetail}
          onChange={(e) => setNewDateDetail(e.target.value)}
        ></input>
      </td>
      <td>
        <button type="submit" className="button is-small">
          Save
        </button>
      </td>
    </tr>
  );
};

export default AddDetail;
