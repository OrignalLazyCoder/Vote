import React from 'react';
import Candidate from './Candidate';
import {Grid} from '@material-ui/core'

const Vote = ({cList,handleOnClick}) => {
    console.log("From vote",cList);
    return(
        <Grid container>
            <ol>
            {
                cList.map((candidate)=>{
                    return(
                       <Candidate data={candidate} handleOnClick={handleOnClick} />
                    )
                })
            }
            </ol>
        </Grid>
    )
}
export default Vote;