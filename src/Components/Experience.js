import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                    {this.props.duration && 
                        <p>Duration: {this.props.duration} month</p>
                    }
                </Cell>
                <Cell col={8}>
                    <h4 style={{margin: '0px'}}>{this.props.jobName}</h4>
                    <h4 style={{margin: '0px', fontStyle: 'italic', fontSize: '15px'}}>{this.props.companyName}</h4>
                    {this.props.jobDesc &&                     
                        this.props.jobDesc.map((text, index) => {
                           return <p key={index} style={{display:'block', textAlign: 'justify'}}>{text}</p>
                        })
                    }
                </Cell>
            </Grid>
        );
    }
}

export default Experience;