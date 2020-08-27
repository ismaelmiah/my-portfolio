import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import { Link } from 'react-router-dom';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images/ismail.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Ismael Miah</h2>
            <h4 style={{ color: "grey" }}>Asp .Net Developer</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p>
              This is Ismail Hosen. Now i'm a final year student of BSC in
              Software Engineering Department at Daffodil International
              University. I liked to solve a new real world problem by coding.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Raipura-1630, Narsingdi, Dhaka</p>
            <h5>Phone</h5>
            <p>+88 01642259188</p>
            <h5>Email</h5>
            <p>ismail96dream@gmail.com</p>
            <h5>Web</h5>
            <Link style={{textDecoration: 'none'}} to="https://talent-programmer.blogspot.com"> My Programming Blog</Link>
            <h5>Download CV</h5>
            <Link style={{textDecoration: 'none'}} to="https://drive.google.com/file/d/1a8pQ1Fg6Dqxgc9knrPogmM0GFtOicKjK/view?usp=sharing"> My Update CV</Link>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2020}
              schoolName={"Daffodil International University"}
              degreeName={"Bsc In Software Engineering"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={"Spring 2019"}
              endYear={"Fall 2019"}
              jobName={"Trainer For Junior Solver"}
              jobDesc={"Teach C Programming Language 1st year students"}
            />
            <Experience
              startYear={"Spring 2020"}
              endYear={"Summer 2020"}
              jobName={"ACM Problem Setter"}
              jobDesc={
                "Problem setter on DIU Take OFF Programming Contest And Several others contest on Daffodil"
              }
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill={"C#"} progress={70} />
            <Skills skill={"HTML/CSS"} progress={80} />
            <Skills skill={"ReactJS"} progress={50} />
            <Skills skill={"Asp .Net Core"} progress={70} />
            <Skills skill={"SQL Server"} progress={70} />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Achievments</h2>
            <h6>6th at SWE Junior Programming Contest (03/2019)</h6>
            <h6>9th Position at DIU TakeOff Programming Contest (04/2017)</h6>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
