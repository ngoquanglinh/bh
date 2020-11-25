import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { connect } from 'react-redux'

// import { getBestSeller, getMensWear, getWomensWear } from '../../../services/index'
// import { addToCart, addToWishlist, addToCompare } from "../../../actions/index";
import ProductItem from './productItems';

class SpecialProducts extends Component {
    render() {

        const { symbol, addToCart, addToWishlist, addToCompare } = this.props
        const bestSeller = [];
        const mensWear = [];
        const womensWear = [];
        return (
            <div>
                <div className="title1 section-t-space">
                    <h4>exclusive products</h4>
                    <h2 className="title-inner1">Sản phẩm nổi bật</h2>
                </div>
                <section className="section-b-space p-t-0">
                    <div className="container">
                        <Tabs className="theme-tab">
                            <TabList className="tabs tab-title">
                                <Tab>Sản phẩm mới</Tab>
                                <Tab>Thời trang nam</Tab>
                                <Tab>Thời trang nữ</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="no-slider row">
                                    {bestSeller.map((product, index) =>
                                        <ProductItem product={product} symbol={symbol}
                                            onAddToCompareClicked={() => addToCompare(product)}
                                            onAddToWishlistClicked={() => addToWishlist(product)}
                                            onAddToCartClicked={() => addToCart(product, 1)} key={index} />)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="no-slider row">
                                    {mensWear.map((product, index) =>
                                        <ProductItem product={product} symbol={symbol}
                                            onAddToCompareClicked={() => addToCompare(product)}
                                            onAddToWishlistClicked={() => addToWishlist(product)}
                                            onAddToCartClicked={() => addToCart(product, 1)} key={index} />)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className=" no-slider row">
                                    {womensWear.map((product, index) =>
                                        <ProductItem product={product} symbol={symbol}
                                            onAddToCompareClicked={() => addToCompare(product)}
                                            onAddToWishlistClicked={() => addToWishlist(product)}
                                            onAddToCartClicked={() => addToCart(product, 1)} key={index} />)
                                    }
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </section>
            </div>
        )
    }
}


export default SpecialProducts;