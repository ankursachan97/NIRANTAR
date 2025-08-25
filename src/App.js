// // import React from 'react';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import Branding from './components/Branding';
// // import Menu from './components/Menu';
// // import About from './components/About';
// // import Apply from './components/Apply';
// // import Blogs from './components/Blogs';
// // import Impact from './components/Impact';
// // import Media from './components/Media';
// // import Partners from './components/Partners';
// // import Awards from './components/Awards';
// // import RegistrationLink from './components/RegistrationLink';

// // function App() {
// //   return (
// //     <Router>
// //       <div>
// //         <Menu />
// //         <Switch>
// //           <Route path="/" exact component={Branding} />
// //           <Route path="/about" component={About} />
// //           <Route path="/apply" component={Apply} />
// //           <Route path="/blogs" component={Blogs} />
// //           <Route path="/impact" component={Impact} />
// //           <Route path="/media" component={Media} />
// //           <Route path="/partners" component={Partners} />
// //           <Route path="/awards" component={Awards} />
// //           <Route path="/registration" component={RegistrationLink} />
// //         </Switch>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './Layout';
// import Home from './Home';
// import About from './About';
// import Apply from './Apply';
// import Blogs from './Blogs';
// import Impact from './Impact';
// import Media from './Media';
// import Partners from './Partners';
// import Awards from './Awards';
// import Registration from './Registration';

// function App() {
//     return (
//         <Router>
//             <Layout>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/apply" element={<Apply />} />
//                     <Route path="/blogs" element={<Blogs />} />
//                     <Route path="/impact" element={<Impact />} />
//                     <Route path="/media" element={<Media />} />
//                     <Route path="/partners" element={<Partners />} />
//                     <Route path="/awards" element={<Awards />} />
//                     <Route path="/registration" element={<Registration />} />
//                 </Routes>
//             </Layout>
//         </Router>
//     );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Home';
import About from './components/About';
import Apply from './components/Apply';
import Blogs from './components/Blogs';
import Impact from './components/Impact';
import Media from './components/Media';
import Partners from './components/Partners';
import Awards from './components/Awards';
import Registration from './components/Registration';
import RegistrationLink from './components/RegistrationLink';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/apply" element={<Apply />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/impact" element={<Impact />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/awards" element={<Awards />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/registrationlink" element={<RegistrationLink />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;