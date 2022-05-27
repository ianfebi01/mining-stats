import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BackendLoginUrl from '../components/BackendLoginUrl.js';

const Register = () => {
  const [users, setUsers] = useState('');

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // const getUsers = async () => {
  //   const response = await axios.get('http://localhost:407/users');
  //   setUsers(response.data);
  // };

  // Register

  const register = async () => {
    await axios.post(`${BackendLoginUrl}/users`, {
      name: input.username,
      email: input.email,
      password: input.password,
    });
  };

  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
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
        case 'username':
          if (!value) {
            stateObj[name] = 'Please enter Username.';
          }
          break;
        case 'email':
          if (!value) {
            stateObj[name] = 'Please enter Email.';
          }
          break;
        case 'password':
          if (!value) {
            stateObj[name] = 'Please enter Password.';
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj['confirmPassword'] = 'Password does not match.';
          } else {
            stateObj['confirmPassword'] = input.confirmPassword
              ? ''
              : error.confirmPassword;
          }
          break;

        case 'confirmPassword':
          if (!value) {
            stateObj[name] = 'Please enter Confirm Password.';
          } else if (input.password && value !== input.password) {
            stateObj[name] = 'Password does not match.';
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  // Password Show/hide
  const [passwordShown, setPasswordShown] = useState(false);

  const toglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <section className="hero is-small ">
        <div className="hero-body px-2 has-text-centered">
          <h1 className="title is-size-1 has-text-primary">Register</h1>
        </div>
      </section>
      <div className="columns is-centered ">
        <div className="column is-9">
          <form action="/" onSubmit={register}>
            <div className="columns is-centered">
              <div className="column is-4">
                <section className="hero round-corner has-background-white">
                  <div className="hero-body py-3 px-4 ">
                    <ul>
                      <li>
                        <h1 className="is-size-6 has-text-primary">Name</h1>
                      </li>
                      <li>
                        <input
                          className="input my-2"
                          type="text"
                          placeholder="Type here"
                          name="username"
                          value={input.username}
                          onChange={onInputChange}
                          onBlur={validateInput}
                        ></input>
                        {error.username && (
                          <span className="is-size-7 has-text-danger">
                            {error.username}
                          </span>
                        )}
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div className="column is-4">
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
                          <span className="is-size-7 is-size-7 has-text-danger">
                            {error.email}
                          </span>
                        )}
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div className="column is-3">
                <button type="submit" className="button input-register is-info">
                  Register
                </button>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column is-4">
                <section className="hero  round-corner has-background-white">
                  <div className="hero-body py-3 px-4 ">
                    <ul>
                      <li>
                        <h1 className="is-size-6 has-text-primary">Password</h1>
                      </li>
                      <li>
                        <div>
                          <input
                            className="input my-2"
                            type="password"
                            placeholder="Type here"
                            name="password"
                            value={input.password}
                            onChange={onInputChange}
                            onBlur={validateInput}
                          />
                        </div>

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
                <section className="hero  round-corner has-background-white">
                  <div className="hero-body py-3 px-4 ">
                    <ul>
                      <li>
                        <h1 className="is-size-6 has-text-primary">
                          Confirm Password
                        </h1>
                      </li>
                      <li>
                        <input
                          className="input my-2"
                          type="password"
                          placeholder="Type here"
                          name="confirmPassword"
                          value={input.confirmPassword}
                          onChange={onInputChange}
                          onBlur={validateInput}
                        ></input>

                        {error.confirmPassword && (
                          <span className="is-size-7 is-size-7 has-text-danger">
                            {error.confirmPassword}
                          </span>
                        )}
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div className="column is-3">
                <Link to="/login">
                  <button className="button input-register">
                    <p className="is-size-7 has-text-grey-light">
                      Have accounnt?
                    </p>
                    <p>Login</p>
                  </button>
                </Link>
              </div>
            </div>

            {/* <div className="columns">
                  <div className="column is-6">
                    <section className="hero round-corner has-background-white">
                      <div className="hero-body py-3 px-4 ">
                        <ul>
                          <li>
                            <h1 className="is-size-6 has-text-primary">Name</h1>
                          </li>
                          <li>
                            <input
                              className="input my-2"
                              type="text"
                              placeholder="Type here"
                              name="username"
                              value={input.username}
                              onChange={onInputChange}
                              onBlur={validateInput}
                            ></input>
                            {error.username && (
                              <span className="is-size-7">
                                {error.username}
                              </span>
                            )}
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                  <div className="column is-6">
                    <section className="hero round-corner has-background-white">
                      <div className="hero-body py-3 px-4 ">
                        <ul>
                          <li>
                            <h1 className="is-size-6 has-text-primary">
                              Email
                            </h1>
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
                              <span className="is-size-7">{error.email}</span>
                            )}
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div> */}
            {/* <div className="columns">
                  <div className="column is-6">
                    <section className="hero  round-corner has-background-white">
                      <div className="hero-body py-3 px-4 ">
                        <ul>
                          <li>
                            <h1 className="is-size-6 has-text-primary">
                              Password
                            </h1>
                          </li>
                          <li>
                            <input
                              className="input my-2"
                              type="text"
                              placeholder="Type here"
                              name="password"
                              value={input.password}
                              onChange={onInputChange}
                              onBlur={validateInput}
                            ></input>
                            {error.password && (
                              <span className="is-size-7">
                                {error.password}
                              </span>
                            )}
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                  <div className="column is-6">
                    <section className="hero  round-corner has-background-white">
                      <div className="hero-body py-3 px-4 ">
                        <ul>
                          <li>
                            <h1 className="is-size-6 has-text-primary">
                              Confirm Password
                            </h1>
                          </li>
                          <li>
                            <input
                              className="input my-2"
                              type="text"
                              placeholder="Type here"
                              name="confirmPassword"
                              value={input.confirmPassword}
                              onChange={onInputChange}
                              onBlur={validateInput}
                            ></input>
                            {error.confirmPassword && (
                              <span className="is-size-7">
                                {error.confirmPassword}
                              </span>
                            )}
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div> */}

            {/* <div className="column is-3">
                <div className="columns">
                  <div className="column">
                    <button
                      type="submit"
                      className="button input-register is-info"
                    >
                      Register
                    </button>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <Link to="/login">
                      <button className="button input-register">
                        <p className="is-size-7 has-text-grey-light">
                          Have accounnt?
                        </p>
                        <p>Login</p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
