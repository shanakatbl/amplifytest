import React from 'react';

import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
    return (
        <React.Fragment>
            <SideDrawer content={props.children}/>
        </React.Fragment>
    );
}

export default layout;