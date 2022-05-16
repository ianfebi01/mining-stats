import '../assets/style/main.scss';
import React, { Fragment, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faArrowLeft,
  faArrowRight,
  faAngleDown,
  faPenToSquare,
  faTrashCan,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import BarChart from '../components/homeComponents/BarChart.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getDateGG } from '../components/homeComponents/date';
import ReadOnlyRow from '../components/homeComponents/ReadOnlyRow.js';
import EditableRow from '../components/homeComponents/EditableRow';
import IncomeThisMonth from '../components/homeComponents/IncomeThisMonth';
import Header from '../components/homeComponents/Header';

const Home = () => {
  // Data
  const [income, setIncome] = useState([]);
  const [cost, setCost] = useState([]);
  const [filterResults, setFilterResults] = useState([]);
  const [joh, setJoh] = useState([]);
  const [editDetailId, setEditDetailId] = useState('');
  const [idDetail, setIdDetail] = useState('');
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState('');
  const [dateDetail, setDateDetail] = useState('');

  // UseEffect
  useEffect(() => {
    getIncomes();
  }, []);

  useEffect(() => {
    getCost();
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

  const now = new Date();
  const prev = new Date(date);
  const zzz = prev.getMonth();
  const zzzn = prev.getMonth() + 2;
  const zzznn = now.getMonth() + 2;
  const prevN = prev.getFullYear() + '-' + zzz + '-' + prev.getDate();
  const prevNn = prev.getFullYear() + '-' + zzzn + '-' + prev.getDate();
  const defMonth = now.getFullYear() + '-' + zzznn + '-' + now.getDate();

  const month = () => {
    if (now.getMonth().lenght > 1) {
      return now.getMonth() + 1;
    } else {
      var gg = now.getMonth() + 1;
      return '0' + gg;
    }
  };

  const monthPrev = () => {
    if (prev.getMonth().lenght > 1) {
      return prev.getMonth();
    } else {
      var gg = prev.getMonth();
      return '0' + gg;
    }
  };
  const monthNext = () => {
    if (prev.getMonth().lenght > 1) {
      return prev.getMonth() + 2;
    } else {
      var gg = prev.getMonth() + 2;
      return '0' + gg;
    }
  };

  const fPrevMonth = () => {
    if (now.getMonth().lenght > 1) {
      return now.getMonth();
    } else {
      var gg = now.getMonth();
      return '0' + gg;
    }
  };
  const fNextMonth = () => {
    if (now.getMonth().lenght > 1) {
      return now.getMonth() + 2;
    } else {
      var gg = now.getMonth() + 2;
      return '0' + gg;
    }
  };

  const thisMonth = now.getFullYear() + '-' + month();
  const prevMonthI = prev.getFullYear() + '-' + monthPrev();
  const prevMonthF = now.getFullYear() + '-' + fPrevMonth();
  const nextMonthI = prev.getFullYear() + '-' + monthNext();
  const nextMonthF = now.getFullYear() + '-' + fNextMonth();

  const filteredData = income.filter((item) => item.date.includes(thisMonth));

  const filteredPrevMonth = income.filter((item) =>
    item.date.includes(prevMonthF)
  );

  const filteredNextMonth = income.filter((item) =>
    item.date.includes(nextMonthF)
  );

  const incomePrevMonth = income.filter((item) =>
    item.date.includes(prevMonthI)
  );
  const incomeNextMonth = income.filter((item) =>
    item.date.includes(nextMonthI)
  );

  const sumIncomeThisMonth =
    filteredData
      .map((item) => item.value)
      .reduce((acc, item) => item + acc, 0) -
    filteredData.map((item) => item.fee).reduce((acc, item) => item + acc, 0);

  const sumFilteredPrevMonth =
    filteredPrevMonth
      .map((item) => item.value)
      .reduce((acc, item) => item + acc, 0) -
    filteredPrevMonth
      .map((item) => item.fee)
      .reduce((acc, item) => item + acc, 0);
  const sumIncomePrevMonth =
    incomePrevMonth
      .map((item) => item.value)
      .reduce((acc, item) => item + acc, 0) -
    incomePrevMonth
      .map((item) => item.fee)
      .reduce((acc, item) => item + acc, 0);

  const sumFilteredNextMonth =
    filteredNextMonth
      .map((item) => item.value)
      .reduce((acc, item) => item + acc, 0) -
    filteredNextMonth
      .map((item) => item.fee)
      .reduce((acc, item) => item + acc, 0);

  const sumIncomeNextMonth =
    incomeNextMonth
      .map((item) => item.value)
      .reduce((acc, item) => item + acc, 0) -
    incomeNextMonth
      .map((item) => item.fee)
      .reduce((acc, item) => item + acc, 0);

  const monthByDate = new Date(date);
  const monthSelected = () => {
    if (monthByDate.getMonth().lenght > 1) {
      return monthByDate.getMonth() + 1;
    } else {
      var gg = monthByDate.getMonth() + 1;
      return '0' + gg;
    }
  };
  const selectedMonth = now.getFullYear() + '-' + monthSelected();

  const incomeBySelectedMonth = income.filter((item) =>
    item.date.includes(selectedMonth)
  );
  const sumIncomeBySelectedMonth =
    incomeBySelectedMonth
      .map((item) => item.value)
      .reduce((acc, item) => item + acc, 0) -
    incomeBySelectedMonth
      .map((item) => item.fee)
      .reduce((acc, item) => item + acc, 0);

  const monthToSelect = [
    {
      text: 'January',
      date: '2022-01',
      income:
        income
          .filter((item) => item.date.includes('2022-01'))
          .map((item) => item.value)
          .reduce((acc, item) => item + acc, 0) -
        income
          .filter((item) => item.date.includes('2022-01'))
          .map((item) => item.fee)
          .reduce((acc, item) => item + acc, 0),
    },
    {
      text: 'February',
      date: '2022-02',
      income:
        income
          .filter((item) => item.date.includes('2022-02'))
          .map((item) => item.value)
          .reduce((acc, item) => item + acc, 0) -
        income
          .filter((item) => item.date.includes('2022-02'))
          .map((item) => item.fee)
          .reduce((acc, item) => item + acc, 0),
    },
    {
      text: 'March',
      date: '2022-03',
      income:
        income
          .filter((item) => item.date.includes('2022-03'))
          .map((item) => item.value)
          .reduce((acc, item) => item + acc, 0) -
        income
          .filter((item) => item.date.includes('2022-03'))
          .map((item) => item.fee)
          .reduce((acc, item) => item + acc, 0),
    },
    {
      text: 'April',
      date: '2022-04',
      income:
        income
          .filter((item) => item.date.includes('2022-04'))
          .map((item) => item.value)
          .reduce((acc, item) => item + acc, 0) -
        income
          .filter((item) => item.date.includes('2022-04'))
          .map((item) => item.fee)
          .reduce((acc, item) => item + acc, 0),
    },
    {
      text: 'May',
      date: '2022-05',
      income:
        income
          .filter((item) => item.date.includes('2022-05'))
          .map((item) => item.value)
          .reduce((acc, item) => item + acc, 0) -
        income
          .filter((item) => item.date.includes('2022-05'))
          .map((item) => item.fee)
          .reduce((acc, item) => item + acc, 0),
    },
    {
      text: 'June',
      date: '2022-06',
      income:
        income
          .filter((item) => item.date.includes('2022-06'))
          .map((item) => item.value)
          .reduce((acc, item) => item + acc, 0) -
        income
          .filter((item) => item.date.includes('2022-06'))
          .map((item) => item.fee)
          .reduce((acc, item) => item + acc, 0),
    },
    {
      text: 'July',
      date: '2022-07',
      income:
        income
          .filter((item) => item.date.includes('2022-07'))
          .map((item) => item.value)
          .reduce((acc, item) => item + acc, 0) -
        income
          .filter((item) => item.date.includes('2022-07'))
          .map((item) => item.fee)
          .reduce((acc, item) => item + acc, 0),
    },
    {
      text: 'August',
      date: '2022-08',
      income:
        income
          .filter((item) => item.date.includes('2022-08'))
          .map((item) => item.value)
          .reduce((acc, item) => item + acc, 0) -
        income
          .filter((item) => item.date.includes('2022-08'))
          .map((item) => item.fee)
          .reduce((acc, item) => item + acc, 0),
    },
    {
      text: 'September',
      date: '2022-09',
      income:
        income
          .filter((item) => item.date.includes('2022-09'))
          .map((item) => item.value)
          .reduce((acc, item) => item + acc, 0) -
        income
          .filter((item) => item.date.includes('2022-09'))
          .map((item) => item.fee)
          .reduce((acc, item) => item + acc, 0),
    },
    {
      text: 'October',
      date: '2022-10',
      income:
        income
          .filter((item) => item.date.includes('2022-10'))
          .map((item) => item.value)
          .reduce((acc, item) => item + acc, 0) -
        income
          .filter((item) => item.date.includes('2022-10'))
          .map((item) => item.fee)
          .reduce((acc, item) => item + acc, 0),
    },
    {
      text: 'November',
      date: '2022-11',
      income:
        income
          .filter((item) => item.date.includes('2022-11'))
          .map((item) => item.value)
          .reduce((acc, item) => item + acc, 0) -
        income
          .filter((item) => item.date.includes('2022-11'))
          .map((item) => item.fee)
          .reduce((acc, item) => item + acc, 0),
    },
    {
      text: 'December',
      date: '2022-12',
      income:
        income
          .filter((item) => item.date.includes('2022-12'))
          .map((item) => item.value)
          .reduce((acc, item) => item + acc, 0) -
        income
          .filter((item) => item.date.includes('2022-12'))
          .map((item) => item.fee)
          .reduce((acc, item) => item + acc, 0),
    },
  ];
  console.log(monthToSelect);

  const getIncomeById = async (id) => {
    const response = await axios.get(`http://localhost:406/income/${id}`);
    setFilterResults('gg');
    setJoh(response.data);
    setValue(response.data.value);
    setFee(response.data.fee);
    setDate(response.data.date);
  };

  const getIncomeByMonth = (x) => {
    setDate(x);
    setFilterResults('gg');
  };

  const wer = [{ value: value, fee: fee, date: date }];
  const jembut = getDateGG(prevNn);
  const defaultd = [{ value: 0, fee: 0, date: jembut }];
  const [filterCost, setFilterCost] = useState('');

  const pp = (a) => {
    return a.toString().substring(0, 5);
  };

  // Cost
  const getCost = async () => {
    const response = await axios.get('http://localhost:406/cost');
    setCost(response.data);
  };

  const costThisMonth = cost.filter((item) => item.date.includes(thisMonth));

  const costBySelectedMonth = cost.filter((item) =>
    item.date.includes(selectedMonth)
  );

  const sumCostThisMonth = costThisMonth
    .map((item) => item.price)
    .reduce((acc, item) => item + acc, 0);

  const sumCostBySelectedMonth = costBySelectedMonth
    .map((item) => item.price)
    .reduce((acc, item) => item + acc, 0);

  // Chart

  const [data, setData] = useState({
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    datasets: [
      {
        label: 'Dataset 1',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(25, 90, 13, 0.5)',
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:406/income';
      const labelSet = [];
      const dataSet1 = [];

      await fetch(url)
        .then((data) => {
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log('ressss', res);
          for (const val of res) {
            dataSet1.push(val.value - val.fee);

            labelSet.push(getDateGG(val.date));
          }
          setData({
            labels: labelSet,
            datasets: [
              {
                label: 'Total WD',
                data: dataSet1,
                backgroundColor: ['#1456C8'],
                borderRadius: 20,
                borderSkipped: false,
              },
            ],
          });
        })
        .catch((e) => {
          console.log('error', e);
        });
    };

    fetchData();
  }, []);

  // Detail

  const handleEditDetailClick = (event, item) => {
    event.preventDefault();
    setEditDetailId(item.id);
    setIdDetail(item.id);
    setDetail(item.detail);
    setPrice(item.price);
    setDateDetail(item.date);
  };
  const handleEditDetailCancel = () => {
    setEditDetailId('');
  };
  const editDetail = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:406/cost/${idDetail}`, {
      detail: detail,
      price: price,
      date: dateDetail,
    });
    handleEditDetailCancel();
    getCost();
  };

  const deleteDetail = async (id) => {
    const response = await axios.delete(`http://localhost:406/cost/${id}`);
    getCost();
  };

  const [newDetail, setNewDetail] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newDateDetail, setNewDateDetail] = useState('');

  const addDetail = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:406/cost', {
      detail: newDetail,
      price: newPrice,
      date: newDateDetail,
    });
    getCost();
    handleClickSaveDetail();
  };
  const [handleClickAddDetailValue, setHandleClickAddDetailValue] =
    useState('');
  const handleClickAddDetail = () => {
    setHandleClickAddDetailValue('active');
  };
  const handleClickSaveDetail = () => {
    setHandleClickAddDetailValue('');
  };
  return (
    <div>
      <Header />
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
                              {monthToSelect.map((item) => (
                                <div>
                                  <a
                                    href="#"
                                    className="dropdown-item"
                                    onClick={() => getIncomeByMonth(item.date)}
                                  >
                                    {item.text}
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
                          <section className="hero round-corner has-background-white shadow">
                            {filterResults == '' ? (
                              filteredData.map((item) => {
                                return (
                                  <div
                                    className="hero-body px-4 py-5"
                                    key={item.id}
                                  >
                                    <ul className="is-flex">
                                      <li>
                                        <h1 className="is-size-6 has-text-primary">
                                          {getDateGG(item.date)}
                                        </h1>
                                      </li>
                                      <li className="mr-1 ml-auto">
                                        <div className="box-percentage is-size-7">
                                          <FontAwesomeIcon icon={faArrowUp} />
                                          {pp(
                                            item.value -
                                              item.fee -
                                              filteredPrevMonth.map((n) => {
                                                return n.value - n.fee;
                                              }) /
                                                (item.value - item.fee)
                                          )}
                                          %
                                        </div>
                                      </li>
                                    </ul>
                                    <h1 className="title is-size-2 has-text-primary my-2">
                                      {item.value - item.fee}
                                    </h1>
                                    <h1 className="title is-size-5 has-text-primary">
                                      ETH
                                    </h1>
                                  </div>
                                );
                              })
                            ) : (
                              <IncomeThisMonth
                                sumIncomeBySelectedMonth={
                                  sumIncomeBySelectedMonth
                                }
                                date={date}
                                pp={pp}
                                filteredPrevMonth={filteredPrevMonth}
                                getDateGG={getDateGG}
                                FontAwesomeIcon={FontAwesomeIcon}
                                faArrowUp={faArrowUp}
                              />
                            )}
                          </section>
                        </div>
                        <div className="column is-6">
                          <section className="hero cost round-corner">
                            <div className="hero-body px-4 py-5">
                              <ul className="is-flex">
                                <li>
                                  <h1 className="is-size-6 has-text-primary">
                                    {filterResults == ''
                                      ? getDateGG(
                                          filteredData.map((item) => item.date)
                                        )
                                      : getDateGG(date)}{' '}
                                    Cost
                                  </h1>
                                </li>
                              </ul>
                              <h1 className="title is-size-2 has-text-primary my-2">
                                {filterResults == ''
                                  ? sumCostThisMonth.toString().substring(0, 8)
                                  : sumCostBySelectedMonth
                                      .toString()
                                      .substring(0, 8)}
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
                {filterResults == '' ? (
                  <div className="hero-body py-4 px-5">
                    <ul className="is-flex">
                      <li>
                        <h1 className="is-size-6 has-text-primary">
                          {getDateGG(prevMonthF)}
                        </h1>
                      </li>
                    </ul>
                    <h1 className="title is-size-3 has-text-primary my-2">
                      {sumFilteredPrevMonth}
                    </h1>
                    <h1 className="title is-size-6 has-text-primary">ETH</h1>
                  </div>
                ) : incomePrevMonth == '' ? (
                  wer.map((item) => {
                    return (
                      <div className="hero-body py-4 px-5" key={item.id}>
                        <ul className="is-flex">
                          <li>
                            <h1 className="is-size-6 has-text-primary">
                              {getDateGG(prevN)}
                            </h1>
                          </li>
                        </ul>
                        <h1 className="title is-size-3 has-text-primary my-2">
                          0
                        </h1>
                        <h1 className="title is-size-6 has-text-primary">
                          ETH
                        </h1>
                      </div>
                    );
                  })
                ) : (
                  <div className="hero-body py-4 px-5">
                    <ul className="is-flex">
                      <li>
                        <h1 className="is-size-6 has-text-primary">
                          {getDateGG(prevMonthI)}
                        </h1>
                      </li>
                    </ul>
                    <h1 className="title is-size-3 has-text-primary my-2">
                      {sumIncomePrevMonth}
                    </h1>
                    <h1 className="title is-size-6 has-text-primary">ETH</h1>
                  </div>
                )}
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
                {filterResults == '' && filteredNextMonth == '' ? (
                  defaultd.map((item) => {
                    return (
                      <div className="hero-body py-4 px-5" key={item.id}>
                        <ul className="is-flex">
                          <li>
                            <h1 className="is-size-6 has-text-primary">
                              {getDateGG(defMonth)}
                            </h1>
                          </li>
                        </ul>
                        <h1 className="title is-size-3 has-text-primary my-2">
                          {item.value - item.fee}
                        </h1>
                        <h1 className="title is-size-6 has-text-primary">
                          ETH
                        </h1>
                      </div>
                    );
                  })
                ) : filterResults == '' ? (
                  <div className="hero-body py-4 px-5">
                    <ul className="is-flex">
                      <li>
                        <h1 className="is-size-6 has-text-primary">
                          {getDateGG(nextMonthF)}
                        </h1>
                      </li>
                    </ul>
                    <h1 className="title is-size-3 has-text-primary my-2">
                      {sumFilteredNextMonth}
                    </h1>
                    <h1 className="title is-size-6 has-text-primary">ETH</h1>
                  </div>
                ) : incomeNextMonth == '' ? (
                  wer.map((item) => {
                    return (
                      <div className="hero-body py-4 px-5" key={item.id}>
                        <ul className="is-flex">
                          <li>
                            <h1 className="is-size-6 has-text-primary">
                              {getDateGG(prevNn)}
                            </h1>
                          </li>
                        </ul>
                        <h1 className="title is-size-3 has-text-primary my-2">
                          0
                        </h1>
                        <h1 className="title is-size-6 has-text-primary">
                          ETH
                        </h1>
                      </div>
                    );
                  })
                ) : (
                  <div className="hero-body py-4 px-5">
                    <ul className="is-flex">
                      <li>
                        <h1 className="is-size-6 has-text-primary">
                          {getDateGG(nextMonthI)}
                        </h1>
                      </li>
                    </ul>
                    <h1 className="title is-size-3 has-text-primary my-2">
                      {sumIncomeNextMonth}
                    </h1>
                    <h1 className="title is-size-6 has-text-primary">ETH</h1>
                  </div>
                )}
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
                    <BarChart
                      chartData={data}
                      chartOption={{
                        title: {
                          display: true,
                          text: 'gg',
                        },
                      }}
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* Detail */}
          <div className="columns">
            <div className="column is-12">
              <section className="hero detail-cost round-corner has-background-white">
                <div className="hero-body py-4 px-5">
                  <div className="title-underline is-flex">
                    <h1 className="has-text-primary ">Detail Cost</h1>
                    <FontAwesomeIcon
                      className="my-auto mr-1 ml-auto has-text-primary is-clickable"
                      icon={faPlus}
                      onClick={handleClickAddDetail}
                    />
                  </div>
                  <div className="box-table">
                    {/* testetste */}
                    <form
                      onSubmit={
                        editDetailId == '' &&
                        handleClickAddDetailValue == 'active'
                          ? addDetail
                          : editDetail
                      }
                    >
                      <table className="table has-text-primary is-size-7 is-fullwidth is-hoverable">
                        <tbody>
                          {handleClickAddDetailValue == 'active' ? (
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
                                  onChange={(e) =>
                                    setNewDateDetail(e.target.value)
                                  }
                                ></input>
                              </td>
                              <td>
                                <button
                                  type="submit"
                                  className="button is-small"
                                >
                                  Save
                                </button>
                              </td>
                            </tr>
                          ) : filterResults == '' ? (
                            costThisMonth.map((item, index) => {
                              return (
                                <Fragment key={item.id}>
                                  {editDetailId === item.id ? (
                                    <EditableRow
                                      item={item}
                                      index={index}
                                      detail={detail}
                                      price={price}
                                      dateDetail={dateDetail}
                                      setDetail={setDetail}
                                      setPrice={setPrice}
                                      setDateDetail={setDateDetail}
                                      handleEditDetailCancel={
                                        handleEditDetailCancel
                                      }
                                    />
                                  ) : (
                                    <ReadOnlyRow
                                      item={item}
                                      index={index}
                                      handleEditDetailClick={
                                        handleEditDetailClick
                                      }
                                      faPenToSquare={faPenToSquare}
                                      faTrashCan={faTrashCan}
                                      deleteDetail={deleteDetail}
                                      editDetail={editDetail}
                                    />
                                  )}
                                </Fragment>
                              );
                            })
                          ) : (
                            costBySelectedMonth.map((item, index) => {
                              return (
                                <Fragment key={item.id}>
                                  {editDetailId === item.id ? (
                                    <EditableRow
                                      item={item}
                                      index={index}
                                      detail={detail}
                                      price={price}
                                      dateDetail={dateDetail}
                                      setDetail={setDetail}
                                      setPrice={setPrice}
                                      setDateDetail={setDateDetail}
                                      handleEditDetailCancel={
                                        handleEditDetailCancel
                                      }
                                    />
                                  ) : (
                                    <ReadOnlyRow
                                      item={item}
                                      index={index}
                                      handleEditDetailClick={
                                        handleEditDetailClick
                                      }
                                      faPenToSquare={faPenToSquare}
                                      faTrashCan={faTrashCan}
                                      deleteDetail={deleteDetail}
                                      editDetail={editDetail}
                                    />
                                  )}
                                </Fragment>
                              );
                            })
                          )}
                          {/* <AddDetail
                              newDetail={newDetail}
                              newPrice={newPrice}
                              newDateDetail={newDateDetail}
                              setNewDetail={setNewDetail}
                              setNewPrice={setNewPrice}
                              setNewDateDetail={setNewDateDetail}
                            /> */}
                        </tbody>
                      </table>
                    </form>
                    {/* testes */}
                  </div>
                </div>
              </section>
            </div>
            {/* <div className="column is-5">
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
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
