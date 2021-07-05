import React from 'react';
import cuid from 'cuid';

const UsersDisplay = (props) => {
    return(
        <div>
            {
                props.usersDisplay.map((user) => {
                    return(
                        <div key={cuid()}>
                            <h3>{user.name}</h3>
                            </div>
                    )
                })
            }
        </div>
    )
};

export default UsersDisplay;