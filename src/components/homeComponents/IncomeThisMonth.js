import React from 'react';

const IncomeThisMonth = ({
  sumIncomeBySelectedMonth,
  date,
  pp,
  filteredPrevMonth,
  getDateGG,
  FontAwesomeIcon,
  faArrowUp,
}) => {
  return (
    <div className="hero-body px-4 py-5">
      <ul className="is-flex">
        <li>
          <h1 className="is-size-6 has-text-primary">{getDateGG(date)}</h1>
        </li>
        <li className="mr-1 ml-auto">
          <div className="box-percentage is-size-7">
            <FontAwesomeIcon icon={faArrowUp} />
            {pp(sumIncomeBySelectedMonth)}%
          </div>
        </li>
      </ul>
      <h1 className="title is-size-2 has-text-primary my-2">
        {sumIncomeBySelectedMonth}
      </h1>
      <h1 className="title is-size-5 has-text-primary">ETH</h1>
    </div>
  );
};

export default IncomeThisMonth;
