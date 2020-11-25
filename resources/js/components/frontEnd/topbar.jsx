import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { withTranslate } from 'react-redux-multilingual'

class TopBar extends Component {

    render() {
        const { translate } = this.props;
        return (
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-contact">
                                <ul>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>{('Liên hệ')}:  123 - 456 - 7890</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right">
                            <ul className="header-dropdown">
                                <li className="onhover-dropdown mobile-account">
                                    <i className="fa fa-user" aria-hidden="true"></i> {('Tài khoản')}
                                    <ul className="onhover-show-div">
                                        <li>
                                            <Link to={`/login`} data-lng="en">Đăng nhập</Link>
                                        </li>
                                        <li>
                                            <Link to={`/register`} data-lng="en">Đăng ký</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TopBar;