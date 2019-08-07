import React from 'react'
import {Typography} from '@material-ui/core';

export default function Rules() {
    return (
        <div>
            <Typography variant="h4">
                Steps to cast a decentralised vote
            </Typography>            
            <Typography variant="caption">
                <ol>
                    <li>Choose account in metamask and refresh the page</li>
                    <li>Wait for list to be rendered</li>
                    <li>Click on vote</li>
                    <li>Done</li>
                </ol>
            </Typography>
        </div>
    )
}
