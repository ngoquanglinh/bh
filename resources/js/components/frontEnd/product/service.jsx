import React, { Component } from 'react';

import {
    svgFreeShipping,
    svgservice,
    svgoffer,
    svgpayment
} from "./../../../services/script"

class Service extends Component {
    render() {

        return (
            <div className="collection-filter-block ">
                <div className="product-service">
                    <div className="media">
                        <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                        <div className="media-body">
                            <h4>Miễn phí vận chuyển</h4>
                            <p>Miễn phí vận chuyển toàn cầu</p>
                        </div>
                    </div>
                    <div className="media">
                        <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                        <div className="media-body">
                            <h4>Dịch vụ 24/7</h4>
                            <p>Dịch vụ trực tuyến cho khách hàng mới</p>
                        </div>
                    </div>
                    <div className="media">
                        <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                        <div className="media-body">
                            <h4>Ưu đãi</h4>
                            <p>Ưu đãi Lễ hội Đặc biệt Trực tuyến Mới</p>
                        </div>
                    </div>
                    <div className="media border-0 m-0">
                        <div dangerouslySetInnerHTML={{ __html: svgpayment }} />
                        <div className="media-body">
                            <h4>online payment</h4>
                            <p>Contrary to popular belief.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Service;