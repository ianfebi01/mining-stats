import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AddCost = () => {
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState('');
  const [dateDetail, setDateDetail] = useState('');
  const navigate = useNavigate();

  const addCost = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:406/cost', {
      detail: detail,
      price: price,
      date: dateDetail,
    });
    navigate('/');
  };
  return (
    <div>
      <section className="hero is-small ">
        <div className="hero-body px-2 has-text-centered">
          <h1 className="title is-size-1 has-text-primary">Add Cost</h1>
        </div>
      </section>
      <div className="columns">
        <div className="column is-7 is-offset-one-fifth">
          <section className="hero is-medium round-corner has-background-white overview hero-income">
            <div className="hero-body py-4 px-5 ">
              <ul className="is-flex">
                <li>
                  <h1 className="title has-text-primary">Add cost</h1>
                </li>
              </ul>
              <section className="hero round-corner has-background-light hero-income-2 mt-4">
                <div className="hero-body px-4 py-5">
                  <form onSubmit={addCost}>
                    <div className="columns">
                      <div className="column is-6">
                        <section className="hero round-corner has-background-white shadow ">
                          <div className="hero-body px-4 py-4 add-cost-detail">
                            <ul className="is-flex">
                              <li>
                                <h1 className="is-size-6 has-text-primary">
                                  Detail
                                </h1>
                              </li>
                            </ul>
                            <input
                              placeholder="Type here"
                              type="text"
                              className="input my-2 round-button"
                              onChange={(e) => setDetail(e.target.value)}
                            ></input>
                          </div>
                        </section>
                      </div>
                      <div className="column is-6">
                        <section className="hero round-corner has-background-white shadow">
                          <div className="hero-body px-4 py-4">
                            <ul className="is-flex">
                              <li>
                                <h1 className="is-size-6 has-text-primary">
                                  Price
                                </h1>
                              </li>
                            </ul>
                            <input
                              placeholder="Type here"
                              type="number"
                              min="0"
                              step="any"
                              className="input my-2 round-button"
                              onChange={(e) => setPrice(e.target.value)}
                            ></input>
                            <h1 className="title is-size-5 has-text-primary">
                              ETH
                            </h1>
                          </div>
                        </section>
                      </div>
                    </div>
                    <section className="hero round-corner has-background-white shadow">
                      <div className="hero-body px-4 py-4">
                        <ul className="is-flex">
                          <li>
                            <h1 className="is-size-6 has-text-primary">Date</h1>
                          </li>
                        </ul>
                        <div className="columns">
                          <div className="column is-9">
                            <input
                              placeholder="Type here"
                              type="date"
                              className="input my-2"
                              onChange={(e) => setDateDetail(e.target.value)}
                            ></input>
                          </div>
                          <div className="column is-3">
                            <button
                              type="submit"
                              className="button my-2 btn-add is-info round-button"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </form>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddCost;
