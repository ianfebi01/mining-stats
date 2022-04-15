import './main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

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
            <div className="columns">
              <div className="column">
                <section className="hero overview round-corner has-background-white">
                  <div className="hero-body py-4 px-5">
                    <h1 className="title">Overview</h1>
                    <section className="hero hero-overview round-corner has-background-light">
                      <div className="hero-body py-4 px-5">
                        <div className="columns">
                          <div className="column is-6">
                            <section className="hero income round-corner has-background-white">
                              <div className="hero-body">jsjsjsj</div>
                            </section>
                          </div>
                          <div className="column is-6">
                            <section className="hero round-corner">
                              <div className="hero-body">jsjsjsj</div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
            </div>
            <div className="columns">
              <div className="column is-5">ttt</div>
              <div className="column is-2">ttt</div>
              <div className="column is-5">ttt</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
