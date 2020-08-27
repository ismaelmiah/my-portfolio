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
                UDEMY. This is dynamic chat-application and it's response
                quickly as it should be. Their i use web-socket to access
                network every response as time.
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
                  background: "url(images/chat.jpg) center / cover",
                }}
              >
                Chat Application
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a chat Application developed on a running course from
                UDEMY. This is dynamic chat-application and it's response
                quickly as it should be. Their i use web-socket to access
                network every response as time.
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
            {/* Chat-Application */}
            <Card shadow={5}  className="project-item">
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
                UDEMY. This is dynamic chat-application and it's response
                quickly as it should be. Their i use web-socket to access
                network every response as time.
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
            {/* Chat-Application */}
            <Card shadow={5}  className="project-item">
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
                UDEMY. This is dynamic chat-application and it's response
                quickly as it should be. Their i use web-socket to access
                network every response as time.
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
          <div>
            <h1>This is Asp .Net Tab</h1>
          </div>
        );
      }
      if (this.state.activeTab === 2) {
        return (
          <div>
            <h1>This is SQL Server Tab</h1>
          </div>
        );
      } else {
        return (
          <div>
            <h1>This is PHP Tab</h1>
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
