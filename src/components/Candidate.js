import React from 'react'
import {Paper,Typography,Button,Grid} from '@material-ui/core';

function Candidate({data,handleOnClick}) {
    return (
        <li>
        <div Key={data.id}>
            <Grid item spacing={4} xs={12}>
                <Paper>
                    <Typography variant="h4">
                        {data.name}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={()=>handleOnClick(data)}>
                        vote
                    </Button>
                </Paper>
            </Grid>
        </div>
        </li>
    )
}

export default Candidate
