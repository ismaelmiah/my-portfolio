import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                <p>{this.props.skill}</p>
                </Cell>
                <Cell col={8}>
                <ProgressBar 
                            progress={this.props.progress}
                        />
                </Cell>
            </Grid>
        );
    }
}

export default Skills;