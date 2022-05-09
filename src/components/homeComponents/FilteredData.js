import React from 'react';

const FilteredData = (
  item,
  getDateGG,
  pp,
  filteredPrevMonth,
  FontAwesomeIcon,
  faArrowUp
) => {
  return (
    <div className="hero-body px-4 py-5" key={item.id}>
      <ul className="is-flex">
        <li>
          <h1 className="is-size-6 has-text-primary">{getDateGG(item.date)}</h1>
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
      <h1 className="title is-size-5 has-text-primary">ETH</h1>
    </div>
  );
};

export default FilteredData;
