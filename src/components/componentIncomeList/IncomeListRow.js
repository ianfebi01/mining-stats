import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const IncomeListRow = (index, item, handleEditIncomeClick, deleteIncome) => {
  return (
    <div>
      <tr key={item.id}>
        <th>{index + 1}</th>
        <td>{item.date}</td>
        <td>{item.value}</td>
        <td>{item.fee}</td>
        <td className="is-centered">
          <td className="is-borderless">
            <FontAwesomeIcon
              className="is-clickable mr-4"
              icon={faPenToSquare}
              onClick={(event) => handleEditIncomeClick(event, item)}
            />
          </td>
          <td className="is-borderless">
            <FontAwesomeIcon
              className="is-clickable"
              onClick={() => deleteIncome(item.id)}
              icon={faTrashCan}
            />
          </td>
        </td>
      </tr>
    </div>
  );
};

export default IncomeListRow;
