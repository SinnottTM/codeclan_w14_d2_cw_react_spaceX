import React from 'react';

// we check if loaded is false to ensure that we don't crash the app looking for .rocket_name as we cannot seek an element within an object within an api before the api has loaded (js issue)
const LaunchDetails = ({launch, loaded}) => {
    if (!loaded){
        return<p>Loading...</p>
    }
    return (
        <>
            <h3> {launch.mission_name} </h3>
            <p>Rocket: {launch.rocket.rocket_name}</p>
        </>
    )
}

export default LaunchDetails;