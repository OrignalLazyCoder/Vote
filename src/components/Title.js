import React, { Component } from 'react';
import {Grid, Typography} from '@material-ui/core';

class Title extends Component {

    render() {
        return (
            <Grid item xs={4}>
                <Typography variant="h3">
                    E-Voting
                </Typography>
                <Typography variant="caption">
                    Secured using Ethereum blockchain
                </Typography>
            </Grid>
        )
    }
}

export default Title
