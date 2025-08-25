import React from 'react';
import Branding from './components/Branding';
import RegistrationLink from './components/RegistrationLink';

import './components/styles.css';
const Home = () => {
    return (
        <div>
            <Branding />
            <RegistrationLink />
            {/* Add other sections you want on the home page */}
        </div>
    );
};

export default Home;


// import React from 'react';

// const Home = () => {
//   return <div>Home Page Content</div>;
// };

// export default Home;