import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/homeComponents/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import BackendUrl from '../components/Backend';

const IncomeList = () => {
  useEffect(() => {
    getIncomes();
  }, []);

  const [income, setIncome] = useState([]);

  const getIncomes = async () => {
    const response = await axios.get(`${BackendUrl}/income`);
    setIncome(response.data);
  };

  const sumAllValue = income
    .map((item) => item.value)
    .reduce((acc, item) => item + acc, 0);
  const sumAllFee = income
    .map((item) => item.fee)
    .reduce((acc, item) => item + acc, 0);

  const [editIncomeId, setEditIncomeId] = useState('');
  const [incomeId, setIncomeId] = useState('');
  const [incomeValue, setIncomeValue] = useState('');
  const [incomeFee, setIncomeFee] = useState('');
  const [incomeDate, setIncomeDate] = useState('');

  const editIncome = async (e) => {
    e.preventDefault();
    await axios.patch(`${BackendUrl}/income/${incomeId}`, {
      value: incomeValue,
      fee: incomeFee,
      date: incomeDate,
    });
    handleEditIncomeCancel();
    getIncomes();
  };

  const handleEditIncomeClick = (event, item) => {
    event.preventDefault();
    setEditIncomeId(item.id);
    setIncomeId(item.id);
    setIncomeValue(item.value);
    setIncomeFee(item.fee);
    setIncomeDate(item.date);
  };

  const handleEditIncomeCancel = () => {
    setEditIncomeId('');
  };

  const deleteIncome = async (id) => {
    const response = await axios.delete(`${BackendUrl}/income/${id}`);
    getIncomes();
  };

  return (
    <div>
      <section className="hero is-small ">
        <div className="hero-body px-2 has-text-centered">
          <h1 className="title is-size-1 has-text-primary">Income List</h1>
        </div>
      </section>
      <div className="columns is-centered">
        <div className="column is-12">
          <section className="hero is-medium round-corner has-background-white">
            <div className="hero-body py-4 px-5 ">
              <form onSubmit={editIncome}>
                <table className="table table is-striped is-fullwidth is-hoverable has-text-primary">
                  <thead>
                    <th>No</th>
                    <th>Date</th>
                    <th>Value</th>
                    <th>Fee</th>
                    <th>Action</th>
                  </thead>
                  <tfoot>
                    <th>Total</th>
                    <th></th>
                    <th>{sumAllValue.toString().substring(0, 8)}</th>
                    <th>{sumAllFee.toString().substring(0, 8)}</th>
                    <th></th>
                  </tfoot>
                  <tbody>
                    {income.map((item, index) => {
                      return (
                        <Fragment>
                          {editIncomeId === item.id ? (
                            <tr key={item.id}>
                              <th>{index + 1}</th>
                              <td>
                                <input
                                  className="input is-small"
                                  type="date"
                                  name="date"
                                  value={incomeDate}
                                  onChange={(e) =>
                                    setIncomeDate(e.target.value)
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  className="input is-small"
                                  type="number"
                                  min="0"
                                  step="any"
                                  placeholder="Enter income value"
                                  name="value"
                                  value={incomeValue}
                                  onChange={(e) =>
                                    setIncomeValue(e.target.value)
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  className="input is-small"
                                  type="number"
                                  min="0"
                                  step="any"
                                  placeholder="Enter income fee"
                                  name="fee"
                                  value={incomeFee}
                                  onChange={(e) => setIncomeFee(e.target.value)}
                                />
                              </td>
                              <td className="is-centered">
                                <td className="is-borderless">
                                  <button
                                    type="submit"
                                    className="button is-small "
                                  >
                                    Save
                                  </button>
                                </td>
                                <td className="is-borderless">
                                  <button
                                    type="button"
                                    className="button is-small"
                                    onClick={handleEditIncomeCancel}
                                  >
                                    Cancel
                                  </button>
                                </td>
                              </td>
                            </tr>
                          ) : (
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
                                    onClick={(event) =>
                                      handleEditIncomeClick(event, item)
                                    }
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
                          )}
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IncomeList;
