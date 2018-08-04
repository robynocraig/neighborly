import React, { Component } from 'react';
import "./MainNav.css";

class MainNav extends Component {
    render() {
        const isAuthenticated = this.props.isLoggedIn2;

        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" id="navCustom">
                <img src="https://i.imgur.com/uwqO6OC.png" className="ml-3" id="logoImg" alt="logo" />
                <a className="navbar-brand ml-1" id="navLogo" href="/">Neighborly</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end mr-3">
                    <ul className="navbar-nav">
                        <li className="nav-item pr-1 pl-4">
                            <a className="nav-link topNavLink" href="/home">Home</a>
                        </li>
                        {
                            !isAuthenticated && (
                                <li className="nav-item pr-1 pl-4">
                                    <a className="nav-link topNavLink" onClick={this.props.login}>Log In</a>
                                </li>
                            )
                        }
                        {
                            isAuthenticated && (
                                <li className="nav-item pr-1 pl-4">
                                    <a className="nav-link topNavLink" onClick={this.props.logout}>Log Out</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        );

        // return (
        //     <div>
        //         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //             <a className="navbar-brand" href="/home">Neighborly</a>
        //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>

        //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul className="navbar-nav mr-auto">
        //                     <li className="nav-item active">
        //                         <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
        //                     </li>


        //                     <li className="nav-item dropdown">
        //                         <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                             Dropdown
        //                         </a>
        //                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                             <a className="dropdown-item" href="/home">Home</a>
        //                             <a className="dropdown-item" href="/">Another action</a>
        //                             <div className="dropdown-divider"></div>
        //                             <a className="dropdown-item" href="/">Something else here</a>
        //                         </div>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </nav>
        //     </div>
        // )
    }
}




// class Nav extends Component {
//     render() {
//         const isAuthenticated = this.props.isLoggedIn2;

//         return (
//             <div>
//                 <Navbar fluid>
//                     <Navbar.Header>
//                         <Navbar.Brand>
//                             <a href="/">Auth0 - React</a>
//                         </Navbar.Brand>

//                         {
//                             !isAuthenticated && (
//                                 <Button
//                                     bsStyle="primary"
//                                     className="btn-margin"
//                                     onClick={this.props.login}
//                                 >
//                                     Log In
//                                 </Button>
//                             )
//                         }
//                         {
//                             isAuthenticated && (
//                                 <Button
//                                     bsStyle="primary"
//                                     className="btn-margin"
//                                     onClick={this.props.logout}
//                                 >
//                                     Log Out
//                                 </Button>
//                             )
//                         }

//                         <Button
//                             bsStyle="primary"
//                             className="btn-margin"
//                         >
//                         <a href="/dummy">Dummy</a>
//                         </Button>
//                     </Navbar.Header>
//                 </Navbar>
//             </div>
//         )
//     }
// }

export default MainNav;
