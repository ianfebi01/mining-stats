import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import BackendLoginUrl from '../components/BackendLoginUrl';

const Login = () => {
  // Form
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: '' };

      switch (name) {
        case 'email':
          if (!value) {
            stateObj[name] = 'Please enter Email.';
          }
          break;
        case 'password':
          if (!value) {
            stateObj[name] = 'Please enter Password.';
          }
          break;
      }

      return stateObj;
    });
  };

  // Data
  const [users, setUsers] = useState('');
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`${BackendLoginUrl}/users`);
    setUsers(response.data);
  };

  const userEmailLogin = Object.values(users).filter((item) =>
    item.email.includes(input.email)
  );

  console.log('Email : ', userEmailLogin);
  console.log('Input email : ', input.email);
  console.log('Input password : ', input.password);

  const [userLogin, setUserLogin] = useState(localStorage.getItem('login'));

  useEffect(() => {
    localStorage.setItem('login', userLogin);
  }, [userLogin]);

  console.log('userLogin', userLogin);

  // Handle Login
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState(false);
  const handleClickLogin = () => {
    if (
      userEmailLogin.map((item) => item.email) == input.email &&
      userEmailLogin.map((item) => item.password) == input.password
    ) {
      setUserLogin('true');
      setLoginFailed(false);
      console.log('Login Failed', loginFailed);
    } else {
      setLoginFailed(true);
      console.log('Login Failed', loginFailed);
    }
  };

  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (userLogin == 'true') {
  //     navigate('/');
  //   }
  // }, [userLogin]);
  return (
    <div>
      <section className="hero is-small ">
        <div className="hero-body px-2 has-text-centered">
          <h1 className="title is-size-1 has-text-primary">Login</h1>
        </div>
      </section>
      <div className="columns is-centered">
        <div className="column is-5">
          <form action="/app" onSubmit={handleClickLogin}>
            <div className="columns">
              <div className="column is-8">
                <section className="hero round-corner has-background-white">
                  <div className="hero-body py-3 px-4 ">
                    <ul>
                      <li>
                        <h1 className="is-size-6 has-text-primary">Email</h1>
                      </li>
                      <li>
                        <input
                          className="input my-2"
                          type="text"
                          placeholder="Type here"
                          name="email"
                          value={input.email}
                          onChange={onInputChange}
                          onBlur={validateInput}
                        ></input>
                        {error.email && (
                          <span className="is-size-7 has-text-danger">
                            {error.email}
                          </span>
                        )}
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div className="column is-4">
                <button
                  // onClick={handleClickLogin}
                  type="submit"
                  className="button input-register is-info"
                >
                  Login
                </button>
              </div>
            </div>
            <div className="columns">
              <div className="column is-8">
                <section className="hero  round-corner has-background-white">
                  <div className="hero-body py-3 px-4 ">
                    <ul>
                      <li>
                        <h1 className="is-size-6 has-text-primary">Password</h1>
                      </li>
                      <li>
                        <input
                          className="input my-2"
                          type="password"
                          placeholder="Type here"
                          name="password"
                          value={input.password}
                          onChange={onInputChange}
                          onBlur={validateInput}
                        ></input>
                        {error.password && (
                          <span className="is-size-7 is-size-7 has-text-danger">
                            {error.password}
                          </span>
                        )}
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div className="column is-4">
                <Link to="/register">
                  <button className="button input-register">
                    <p>Register</p>
                  </button>
                </Link>
              </div>
            </div>
          </form>
          {loginFailed == true ? (
            <div className="columns">
              <div className="column is-8">
                <section className="hero  round-corner has-background-white">
                  <div className="hero-body py-3 px-4 has-text-centered">
                    <h1 className="is-size-5 has-text-danger">Login Failed</h1>
                  </div>
                </section>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
