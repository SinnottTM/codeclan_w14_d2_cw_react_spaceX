import React from 'react';

const LaunchDetails = ({launch}) => {
    return (
        <>
            <h3> {launch.mission_name} </h3>
            <p>Rocket: {launch.rocket.rocket_name}</p>
        </>
    )
}

export default LaunchDetails;