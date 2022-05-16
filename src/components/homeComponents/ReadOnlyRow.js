import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReadOnlyRow = ({
  item,
  index,
  handleEditDetailClick,
  faPenToSquare,
  faTrashCan,
  deleteDetail,
}) => {
  return (
    <tr key={item.id}>
      <th className="is-borderless">{index + 1}</th>
      <td className="is-borderless">{item.detail}</td>
      <td className="is-borderless">{item.price}</td>
      <td className="is-borderless">ETH</td>
      <td className="is-borderless">
        <FontAwesomeIcon
          className="is-clickable"
          icon={faPenToSquare}
          onClick={(event) => handleEditDetailClick(event, item)}
        />
      </td>
      <td className="is-borderless">
        <FontAwesomeIcon
          className="is-clickable"
          onClick={() => deleteDetail(item.id)}
          icon={faTrashCan}
        />
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
