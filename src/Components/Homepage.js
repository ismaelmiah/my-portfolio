import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src="images/DSC_5211-00.jpg"
                alt="Ismail"
              />
            </div>
            <div className="banner-text">
              <h1>Asp .Net Full Stack Developer</h1>
              <hr />
              <p>
                HTML | CSS | BOOTSTRAP | PHP | MYSQL | C# | ASP .NET CORE | SQL
                SERVER
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="http://facebook.com/ismail5g"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-facebook-official"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://twitter.com/ismail_hosen_3g"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-twitter-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://github.com/ismail5g"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ismail5g/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
