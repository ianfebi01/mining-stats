import '../assets/style/main.scss';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faPowerOff,
  faArrowLeft,
  faArrowRight,
  faEnvelope,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import BarChart from '../components/homeComponents/BarChart.js';
import { useState, useEffect } from 'react';
import { UserData } from '../assets/data/Data';
import useOutsideClick from '../components/homeComponents/useOutsideClick.js';
import axios from 'axios';
import { getDatasetAtEvent } from 'react-chartjs-2';

function Home() {
  // Chart
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map((data) => data.userGain),
        backgroundColor: ['#1456C8'],
        borderRadius: 10,
        borderSkipped: false,
      },
      {
        label: 'Users Lost',
        data: UserData.map((data) => data.userLost),
        backgroundColor: ['#B5BECB'],
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  });
  // Burger
  const [active, setActive] = useState('');

  const changeActive = () => {
    if (active === 'is-active') {
      setActive('');
    } else {
      setActive('is-active');
      console.log(active);
    }
  };
  const ref = useRef();

  useOutsideClick(ref, () => {
    setActive('');
  });

  // Data
  const [income, setIncome] = useState([]);

  useEffect(() => {
    getIncomes();
  }, []);

  const getIncomes = async () => {
    const response = await axios.get('http://localhost:406/income');
    setIncome(response.data);
  };

  const [value, setValue] = useState('');
  const [fee, setFee] = useState('');
  const [date, setDate] = useState('');

  const current = new Date();
  const currentMonth = current.getMonth() + 1;

  const getIncomeById = async (id) => {
    const response = await axios.get(`http://localhost:406/income/${id}`);
    setValue(response.data.value);
    setFee(response.data.fee);
    setDate(response.data.date);
    console.log(fee);
  };

  const getIncomeThisMonth = () => {
    income.map((income) => {
      var id = income;
      const x = Object.keys(id).length;
      console.log(x);
    });

    // var now = getDate(income.data.date);
    // var id = income.data.id;
    // var i = id.lenght;
    // console.log(id);
  };

  const getDate = (date) => {
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    var now = new Date(date);
    return months[now.getMonth()];
  };

  return (
    <div className="overflow">
      {/* NAVBAR */}
      <nav className="navbar is-transparent nav-height">
        <div className="container is-max-widescreen">
          <div className="navbar-brand">
            <a className="navbar-item brand-text">
              <strong className="is-size-4 navMenuFont has-text-primary">
                MiningStats
              </strong>
            </a>
            <div
              ref={ref}
              onClick={changeActive}
              className={`burger navbar-burger ${active}`}
              data-target="navMenu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={`navbar-menu ${active}`} id="navMenu">
            <div className="navbar-start">
              <a
                onClick={getIncomeThisMonth}
                href="#"
                className="navbar-item has-text-grey-light"
              >
                Add Income
              </a>
              <a href="#" className="navbar-item has-text-grey-light">
                Add Cost
              </a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="has-text-grey-light">
                    <FontAwesomeIcon icon={faPowerOff} />
                    <strong> Log Out</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Body */}
      <div className="container is-max-widescreen px-1">
        {/* Header */}
        <section className="hero is-small">
          <div className="hero-body px-2">
            <h1 className="title is-size-1 has-text-primary">
              Profit This Month
            </h1>
          </div>
        </section>
        {/* Body */}
        <div className="columns">
          <div className="column is-7">
            {/* Overview */}
            <div className="columns">
              <div className="column">
                <section className="hero is-medium round-corner has-background-white overview">
                  <div className="hero-body py-4 px-5 ">
                    <ul className="is-flex">
                      <li>
                        <h1 className="title has-text-primary">Overview</h1>
                      </li>
                      <li className="mr-1 ml-auto">
                        {/* Dropdown */}
                        <div className="dropdown is-hoverable">
                          <div className="dropdown-trigger">
                            <button
                              className="button mb-2 has-text-grey-primary"
                              aria-haspopup="true"
                              aria-controls="dropdown-menu"
                            >
                              <span className="is-size-7">Select Month</span>
                              <span className="icon is-small">
                                <FontAwesomeIcon icon={faAngleDown} />
                              </span>
                            </button>
                          </div>
                          <div
                            className="dropdown-menu"
                            id="dropdown-menu"
                            role="menu"
                          >
                            <div className="dropdown-content">
                              <section>
                                {income.map((income) => (
                                  <div key={income.id}>
                                    <a
                                      href="#"
                                      className="dropdown-item"
                                      onClick={() => getIncomeById(income.id)}
                                    >
                                      {getDate(income.date)}
                                    </a>
                                  </div>
                                ))}
                              </section>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <section className="hero round-corner has-background-light mb-4">
                      <div className="hero-body py-4 px-5">
                        <div className="columns">
                          <div className="column is-6">
                            <section className="hero round-corner has-background-white">
                              <div className="hero-body px-4 py-5">
                                <ul className="is-flex">
                                  <li>
                                    <h1 className="is-size-6 has-text-primary">
                                      {getDate(date)}
                                    </h1>
                                  </li>
                                  <li className="mr-1 ml-auto">
                                    <div className="box-percentage is-size-7">
                                      <FontAwesomeIcon icon={faArrowUp} />
                                      7.5%
                                    </div>
                                  </li>
                                </ul>
                                <h1 className="title is-size-2 has-text-primary my-2">
                                  {value - fee}
                                </h1>
                                <h1 className="title is-size-5 has-text-primary">
                                  ETH
                                </h1>
                              </div>
                            </section>
                          </div>
                          <div className="column is-6">
                            <section className="hero cost round-corner">
                              <div className="hero-body px-4 py-5">
                                <ul className="is-flex">
                                  <li>
                                    <h1 className="is-size-6 has-text-primary">
                                      March Cost
                                    </h1>
                                  </li>
                                  <li className="mr-1 ml-auto">
                                    <div className="box-percentage is-size-7">
                                      {/* <FontAwesomeIcon icon={faArrowUp} /> */}
                                      7.5%
                                    </div>
                                  </li>
                                </ul>
                                <h1 className="title is-size-2 has-text-primary my-2">
                                  0.034768
                                </h1>
                                <h1 className="title is-size-5 has-text-primary">
                                  ETH
                                </h1>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
            </div>
            {/* Next-Prev */}
            <div className="columns">
              <div className="column is-5">
                <section className="hero round-corner has-background-white next-prev">
                  <div className="hero-body py-4 px-5">
                    <ul className="is-flex">
                      <li>
                        <h1 className="is-size-6 has-text-primary">
                          March Income
                        </h1>
                      </li>
                      <li className="mr-1 ml-auto">
                        <div className="box-percentage is-size-7">
                          <FontAwesomeIcon icon={faArrowUp} />
                          7.5%
                        </div>
                      </li>
                    </ul>
                    <h1 className="title is-size-3 has-text-primary my-2">
                      0.034768
                    </h1>
                    <h1 className="title is-size-6 has-text-primary">ETH</h1>
                  </div>
                </section>
              </div>
              <div className="column is-2">
                <section className="hero next-prev">
                  <div className="hero-body py-4 px-5">
                    <ul className="arrow has-text-primary">
                      <li>
                        <FontAwesomeIcon
                          className="is-size-4"
                          icon={faArrowLeft}
                        />
                      </li>
                      <li>Next</li>
                      <li>
                        <FontAwesomeIcon
                          className="is-size-4"
                          icon={faArrowRight}
                        />
                      </li>
                      <li>Prev</li>
                    </ul>
                  </div>
                </section>
              </div>
              <div className="column is-5">
                <section className="hero round-corner has-background-white next-prev">
                  <div className="hero-body py-4 px-5">
                    <ul className="is-flex">
                      <li>
                        <h1 className="is-size-6 has-text-primary">
                          March Income
                        </h1>
                      </li>
                      <li className="mr-1 ml-auto">
                        <div className="box-percentage is-size-7">
                          <FontAwesomeIcon icon={faArrowUp} />
                          7.5%
                        </div>
                      </li>
                    </ul>
                    <h1 className="title is-size-3 has-text-primary my-2">
                      0.034768
                    </h1>
                    <h1 className="title is-size-6 has-text-primary">ETH</h1>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="column is-5">
            {/* Statistics */}
            <div className="columns">
              <div className="column">
                <section className="hero round-corner has-background-white is-medium statistics">
                  <div className="hero-body py-4 px-5">
                    <h1 className="title has-text-primary">Statistics</h1>
                    <div className="bar-chart">
                      {/* <BarChart
                        chartData={userData}
                        chartOption={{
                          title: {
                            display: true,
                            text: 'gg',
                          },
                        }}
                      /> */}
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/* Detail */}
            <div className="columns">
              <div className="column is-7">
                <section className="hero detail-cost round-corner has-background-white">
                  <div className="hero-body py-4 px-5">
                    <h1 className="has-text-primary title-underline">
                      Detail Cost
                    </h1>
                    <div className="box-table">
                      <table className="table has-text-primary is-size-7 is-fullwidth is-hoverable">
                        <tbody>
                          <tr>
                            <th className="is-borderless">1.</th>
                            <td className="is-borderless">Sata Cable</td>
                            <td className="is-borderless">0.00003</td>
                            <td className="is-borderless">ETH</td>
                          </tr>
                          <tr>
                            <th className="is-borderless">2.</th>
                            <td className="is-borderless">Sata Cable</td>
                            <td className="is-borderless">0.00003</td>
                            <td className="is-borderless">ETH</td>
                          </tr>
                          <tr>
                            <th className="is-borderless">3.</th>
                            <td className="is-borderless">Sata Cable</td>
                            <td className="is-borderless">0.00003</td>
                            <td className="is-borderless">ETH</td>
                          </tr>
                          <tr>
                            <th className="is-borderless">4.</th>
                            <td className="is-borderless">Sata Cable</td>
                            <td className="is-borderless">0.00003</td>
                            <td className="is-borderless">ETH</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>
              <div className="column is-5">
                <section className="hero round-corner has-background-white about">
                  <div className="hero-body py-4 px-5">
                    <h1 className="has-text-primary title-underline">About</h1>
                    <div className="box-about">
                      <p className="has-text-primary is-size-7">
                        Design by ianfebi01, follow me for more design.
                      </p>
                      <ul>
                        <li className="has-text-primary is-size-7 email">
                          <FontAwesomeIcon icon={faEnvelope} />
                          <p className="email-text">ianfebi01@gmail.com</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
