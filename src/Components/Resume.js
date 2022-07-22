import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

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
            <p style={{ textAlign: "justify" }}>
              This is Ismael Miah. I’m an enthusiastic, responsible, self-motivated and hard-working person.
              I’m able to work well under pressure and adhere to strict deadlines.
              Being worked for different projects helped me to adapt to the changes quickly and made me a mature team worker.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Raipura-1630, Narsingdi, Dhaka</p>
            <h5>Phone</h5>
            <p>(+880) 1642259188</p>
            <h5>Email</h5>
            <p>ismaelmiah.swe@gmail.com</p>
            <h5>Web</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://talent-programmer.blogspot.com"
            >
              My Programming Blog
            </a>
            <h5>Download CV</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/10pokHihjguFSTzuqX__xeXbvNRR-Vpvj/view?usp=sharing"
            >
              My Update CV
            </a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
              startYear={"February 2021"}
              endYear={"Present"}              
              jobName={"Software Engineer"}
              companyName={"ASTHA IT"}
              jobDesc={
                [
                  "Improving functionality and incorporating new features as per requirements on a Communicative tool for building management to be used by owners, residents, building managers, and strata managers. StrataSpot Built using .Net Framework and MSSQL",
                  "Worked on building different sections for the e-commerce platform of Transcom Digital. Built using NextJs, .Net Core 3.1 & MongoDB",
                  "Enhancing features and improvements existing functionality of a social media platform for the Hawai’i-based volunteering students to organize, plan and collaborate as the Global Aloha initiative built using Angular, .Net Core 3.1 & PostgreSQL",
                  "Supported frontend by providing Rest API.",
                  "Revised, modularized and updated old code bases, reducing operating costs."
                ]
              }
            />
            <Experience
              startYear={"April 2021"}
              endYear={"May 2021"}
              duration= {2}
              jobName={"Internship (Remote)"}
              companyName={"Dev Skill"}
              jobDesc={[
                "Worked on active development project. DevSkill built using Asp .Net-5 & MSSQL",
                "Writing, improving & fixing Unit tests.",
                "Designing & developing new features."
              ]
              }
            />
            <Experience
              startYear={"December 2020"}
              endYear={"January 2021"}
              duration= {2}
              jobName={"Internee"}
              companyName={"ASTHA IT"}
              jobDesc={
                [
                  "It was a part-time Internship program " ,
                   "I have completed several assignments that provided by Senior Software Engineers",
                "I learnt lot of tech things from this company I now had a chance to test my knowledge in the real world through an internship."]
              }
            />
            <Experience
              startYear={"Spring 2019"}
              endYear={"Fall 2019"}
              duration= {12}
              jobName={"ACM Trainer"}
              companyName={"Daffodil International University"}
              jobDesc={["Teach C Programming Language 1st year students", "Introduced them to CP world", "Made several team out of them"]}
            />
            <Experience
              startYear={"Spring 2020"}
              endYear={"Summer 2020"}
              duration= {4}
              jobName={"ACM Problem Setter"}
              companyName={"Daffodil International University"}
              jobDesc={
                ["Problem setter on DIU Take OFF Programming Contest And Several others contest at Daffodil"]
              }
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2020}
              schoolName={"Daffodil International University"}
              degreeName={"Bsc In Software Engineering"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />            
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={80} />
            <Skills skill={"ReactJS"} progress={60} />
            <Skills skill={"Angular"} progress={70} />
            <Skills skill={"C#"} progress={90} />
            <Skills skill={"Asp .Net Core"} progress={90} />
            <Skills skill={"SQL Server"} progress={80} />
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
