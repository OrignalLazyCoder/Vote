import React from 'react'

function Result({data}) {
    return (
        <div>
            {data.map((d)=>{
                return(
                    <div>
                        {d.name} => {d.voteCount}
                    </div>
                )
            })}
        </div>
    )
}

export default Result
