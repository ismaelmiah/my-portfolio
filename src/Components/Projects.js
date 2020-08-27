import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import { Link, Redirect } from "react-router-dom";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

    this.toggleCategories = () => {
      if (this.state.activeTab === 0) {
        return (
          
          <div className="projects-grid">
            {/* Chat-Application */}
            <Card shadow={5} className="project-item" >
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/chat.jpg) center / cover",
                }}
              >
                Chat Application
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a chat Application developed on a running course from
                UDEMY. 
              </CardText>
              <CardActions border>
                <Button style={{ margin: "0 10px" }} raised ripple primary>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Calculator */}
            <Card shadow={5} className="project-item" >
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/calculator.png) center / cover",
                }}
              >
                Standard Calculator
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a first REACT app i developed. The noobie calculator
              </CardText>
              <CardActions border>
                <Button style={{ margin: "0 10px" }} raised ripple primary>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Portfolio */}
            <Card shadow={5}  className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/portfolio.png) center / cover",
                }}
              >
                Portfolio
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This portfolio designed by REACT JS on 25th August 2020. And it takes 2 days to Complete.
              </CardText>
              <CardActions border>
                <Button style={{ margin: "0 10px" }} raised ripple primary>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            {/* Ecom-Application */}
            <Card shadow={5}  className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/e-commerce.png) center / cover",
                }}
              >
                E-Commerce Shop
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is an Ecommerce Online Shop developed with following MODAZ e-commerce theme.
              </CardText>
              <CardActions border>
                <Button style={{ margin: "0 10px" }} raised ripple primary>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Ecom-Application */}
            <Card shadow={5}  className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/leave-management.png) center / cover",
                }}
              >
                Leave Management
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is dynamic Leave management system developed for an corporate organization.
              </CardText>
              <CardActions border>
                <Button style={{ margin: "0 10px" }} raised ripple primary>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Ecom-Application */}
            <Card shadow={5}  className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/crud-app.png) center / cover",
                }}
              >
                CRUD Application
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a CRUD Application developed on a running course from
                UDEMY.
              </CardText>
              <CardActions border>
                <Button style={{ margin: "0 10px" }} raised ripple primary>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
      if (this.state.activeTab === 2) {
        return (
          <div>
          {/* Store-Procedure */}
          <Card shadow={5}  className="project-item">
            <CardTitle
              style={{
                color: "#333",
                height: "180px",
                background: "url(images/store-procedure.png) center / cover",
              }}
            >
              Store Procedures
            </CardTitle>
            <CardText style={{ textAlign: "justify" }}>
              This is simple Store Procedure among lot's of SQL query.
            </CardText>
            <CardActions border>
              <Button style={{ margin: "0 10px" }} raised ripple primary>
                <i className="fa fa-github" aria-hidden="true" /> Github
              </Button>
              <Button raised accent ripple style={{ margin: "0 10px" }}>
                <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        );
      } else {
        return (
          <div>
          {/* facebook */}
          <Card shadow={5}  className="project-item">
            <CardTitle
              style={{
                color: "#333",
                height: "180px",
                background: "url(images/facebook.jpg) center / cover",
              }}
            >
              Facebook
            </CardTitle>
            <CardText style={{ textAlign: "justify" }}>
              This facebook developed on a semester for educational purpose only.
            </CardText>
            <CardActions border>
              <Button style={{ margin: "0 10px" }} raised ripple primary>
                <i className="fa fa-github" aria-hidden="true" /> Github
              </Button>
              <Button raised accent ripple style={{ margin: "0 10px" }}>
                <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        );
      }
    };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React JS</Tab>
          <Tab>Asp .Net</Tab>
          <Tab>SQL SERVER</Tab>
          <Tab>PHP</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
