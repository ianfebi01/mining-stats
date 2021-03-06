import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { getDateGG } from './date';
import { pp } from './pp';

const IncomeThisMonth = (
  sumIncomeThisMonth,
  thisMonth
  //   FontAwesomeIcon,
  //   faArrowUp
) => {
  return (
    <div className='hero-body px-4 py-5'>
      <ul className='is-flex'>
        <li>
          <h1 className='is-size-6 has-text-primary'>{getDateGG(thisMonth)}</h1>
        </li>
        <li className='mr-1 ml-auto'>
          <div className='box-percentage is-size-7'>
            <FontAwesomeIcon icon={faArrowUp} />
            {pp(sumIncomeThisMonth)}%
          </div>
        </li>
      </ul>
      <h1 className='title is-size-2 has-text-primary my-2'>
        {sumIncomeThisMonth.toString().substring(0, 8)}
      </h1>
      <h1 className='title is-size-5 has-text-primary'>ETH</h1>
    </div>
  );
};

export default IncomeThisMonth;
