import React from 'react';

const UsersForm = (props) => {

    return(
        <div>
            <button onClick={props.getUsersBtn}>Get Users</button>
        </div>
    )
}

export default UsersForm;