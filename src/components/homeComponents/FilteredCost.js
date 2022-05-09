import React from 'react';

const FilteredCost = (filteredData, getDateGG, sumCostThisMonth) => {
  return (
    <div className="hero-body px-4 py-5">
      <ul className="is-flex">
        <li>
          <h1 className="is-size-6 has-text-primary">
            {getDateGG(filteredData.map((item) => item.date))} Cost
          </h1>
        </li>
        <li className="mr-1 ml-auto">
          <div className="box-percentage is-size-7">7.5%</div>
        </li>
      </ul>
      <h1 className="title is-size-2 has-text-primary my-2">
        {sumCostThisMonth}
      </h1>
      <h1 className="title is-size-5 has-text-primary">ETH</h1>
    </div>
  );
};

export default FilteredCost;
