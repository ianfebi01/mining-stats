import './main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPowerOff } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar is-transparent nav-height">
        <div className="container is-max-widescreen">
          <div className="navbar-brand">
            <a className="navbar-item brand-text">
              <strong className="is-size-4 navMenuFont has-text-primary">
                MiningStats
              </strong>
            </a>
            <div className="navbar-burger burger" data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="navbar-menu" id="navMenu">
            <div className="navbar-start">
              <a href="#" className="navbar-item has-text-grey-light">
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
      <div className="container is-max-widescreen">
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
          <div className="column is-7 ">
            {/* Overview */}
            <div className="columns">
              <div className="column">
                <section className="hero overview round-corner has-background-white ">
                  <div className="hero-body py-4 px-5 ">
                    <h1 className="title has-text-primary">Overview</h1>
                    <section className="hero hero-overview round-corner has-background-light">
                      <div className="hero-body py-4 px-5">
                        <div className="columns">
                          <div className="column is-6">
                            <section className="hero income round-corner has-background-white">
                              <div className="hero-body px-4 py-5">
                                <div className="columns">
                                  <div className="column is-9 py-1">
                                    <h1 className="is-size-6 has-text-primary">
                                      March Income
                                    </h1>
                                  </div>
                                  <div className="column is-3 py-1">
                                    <div className="box-percentage is-size-7">
                                      <FontAwesomeIcon icon={faArrowUp} />
                                      7.5%
                                    </div>
                                  </div>
                                </div>
                                <div className="columns">
                                  <div className="column py-1">
                                    <h1 className="title is-size-2 has-text-primary">
                                      0.034768
                                    </h1>
                                  </div>
                                </div>
                                <div className="columns">
                                  <div className="column py-1">
                                    <h1 className="title is-size-5 has-text-primary">
                                      ETH
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                          <div className="column is-6">
                            <section className="hero cost round-corner">
                              <div className="hero-body px-4 py-5">
                                <div className="columns">
                                  <div className="column is-9 py-1">
                                    <h1 className="is-size-6 has-text-primary">
                                      March Income
                                    </h1>
                                  </div>
                                  <div className="column is-3 py-1">
                                    <div className="box-percentage is-size-7">
                                      <FontAwesomeIcon icon={faArrowUp} />
                                      7.5%
                                    </div>
                                  </div>
                                </div>
                                <div className="columns">
                                  <div className="column py-1">
                                    <h1 className="title is-size-2 has-text-primary">
                                      0.034768
                                    </h1>
                                  </div>
                                </div>
                                <div className="columns">
                                  <div className="column py-1">
                                    <h1 className="title is-size-5 has-text-primary">
                                      ETH
                                    </h1>
                                  </div>
                                </div>
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
                <section className="hero next-prev round-corner has-background-white">
                  <div className="hero-body py-4 px-5">
                    <h1 className="title has-text-primary">December</h1>
                  </div>
                </section>
              </div>
              <div className="column is-2">
                <section className="hero next-prev round-corner has-background-white">
                  <div className="hero-body py-4 px-5">
                    <h1 className="title has-text-primary">g</h1>
                  </div>
                </section>
              </div>
              <div className="column is-5">
                <section className="hero next-prev round-corner has-background-white">
                  <div className="hero-body py-4 px-5">
                    <h1 className="title has-text-primary">December</h1>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="column is-5">
            {/* Statistics */}
            <div className="columns">
              <div className="column">
                <section className="hero round-corner has-background-white statistics">
                  <div className="hero-body py-4 px-5">
                    <h1 className="title has-text-primary">Statistics</h1>
                  </div>
                </section>
              </div>
            </div>
            {/* Detail */}
            <div className="columns">
              <div className="column is-7">
                <section className="hero next-prev round-corner has-background-white">
                  <div className="hero-body py-4 px-5">
                    <h1 className="title has-text-primary">test</h1>
                  </div>
                </section>
              </div>
              <div className="column is-5">
                <section className="hero next-prev round-corner has-background-white">
                  <div className="hero-body py-4 px-5">
                    <h1 className="title has-text-primary">test</h1>
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

export default App;
