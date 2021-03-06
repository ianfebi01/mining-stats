import React, { useEffect, useRef, useState } from 'react';
import useOutsideClick from './useOutsideClick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // Burger
  const [active, setActive] = useState('');

  const changeActive = () => {
    if (active === 'is-active') {
      setActive('');
    } else {
      setActive('is-active');
    }
  };
  const ref = useRef();

  useOutsideClick(ref, () => {
    setActive('');
  });

  // Navbar
  const [navActiveAddIncome, setNavActiveAddIncome] = useState(
    'has-text-grey-primary'
  );
  const [navActiveAddCost, setNavActiveAddCost] = useState(
    'has-text-grey-primary'
  );
  const [navActiveIncomeList, setNavActiveIncomeList] = useState(
    'has-text-grey-primary'
  );

  const handleClickMiningStats = () => {
    setNavActiveAddCost('has-text-grey-primary');
    setNavActiveIncomeList('has-text-grey-primary');
    setNavActiveAddIncome('has-text-grey-primary');
  };
  const handleClickAddIncome = () => {
    setNavActiveAddCost('has-text-grey-primary');
    setNavActiveIncomeList('has-text-grey-primary');
    setNavActiveAddIncome('has-text-primary');
  };
  const handleClickAddCost = () => {
    setNavActiveAddIncome('has-text-grey-primary');
    setNavActiveIncomeList('has-text-grey-primary');
    setNavActiveAddCost('has-text-primary');
  };

  const handleClickIncomeList = () => {
    setNavActiveAddIncome('has-text-grey-primary');
    setNavActiveAddCost('has-text-grey-primary');
    setNavActiveIncomeList('has-text-primary');
  };

  const [userLogin, setUserLogin] = useState('');
  // User Login
  const handleUserLogin = () => {
    localStorage.setItem('login', 'false');
  };

  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (userLogin == 'false') {
  //     navigate('/');
  //   }
  // }, [userLogin]);
  return (
    <div>
      <nav className='navbar is-transparent nav-height'>
        <div className='container is-max-widescreen'>
          <div className='navbar-brand'>
            <Link
              to='/'
              className='navbar-item brand-text'
              onClick={handleClickMiningStats}
            >
              <strong className='is-size-4 navMenuFont has-text-primary'>
                MiningStats
              </strong>
            </Link>
            <div
              ref={ref}
              onClick={changeActive}
              className={`burger navbar-burger ${active}`}
              data-target='navMenu'
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={`navbar-menu ${active}`} id='navMenu'>
            <div className='navbar-start'>
              <Link
                to='/addIncome'
                onClick={handleClickAddIncome}
                className={`navbar-item ${navActiveAddIncome}`}
              >
                Add Income
              </Link>
              <Link
                to='/addCost'
                onClick={handleClickAddCost}
                className={`navbar-item ${navActiveAddCost}`}
              >
                Add Cost
              </Link>
              <Link
                to='/incomeList'
                onClick={handleClickIncomeList}
                className={`navbar-item ${navActiveIncomeList}`}
              >
                Income List
              </Link>
            </div>
            <div className='navbar-end'>
              <div className='navbar-item'>
                <div className='buttons'>
                  <form onSubmit={handleUserLogin}>
                    <button
                      type='submit'
                      className='button has-text-grey-light'
                    >
                      <FontAwesomeIcon icon={faPowerOff} />
                      <strong> Log Out</strong>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
