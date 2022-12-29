import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        {/*əsas əkranda hər məhsulun üçün card adlı massiv kimi olan ana div yaradaq*/}
        <div className="card">
          <ProductConsumer>
            {(value) => (
              //yaradilan div-in içərisinə başqa bir div yaradaq və şəkil kimi link qoyaq
              //bu div-ə className ilə aimasiya yükləyək
              <div
                className="img-container p-4"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product image" className="card-img-top" />
                </Link>
              </div>
            )}
          </ProductConsumer>
          {/*ana div-in üstünə məhsl adı və qiyməti əlavə edək*/}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center ">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              {/*mb-0 margin-bottom xüsusiyətini daşıyır*/}
              {price}
              <span className="mr-1">₼</span>
              {/*mr-1 yazıyı sağa-sola sürüşdürür*/}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape(
    {
      id: PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      inCart: PropTypes.bool
    }.isRequired
  )
};

//styling
const ProductWrapper = styled.div`
  /*məhsl adı və qiyməti göstərən div üçün stil*/
  .card-footer {
    background: cyan;
    border-color: blue;
  }

  /*şəkilin yaxınlaşma sürəti*/
  .card-img-top {
    transition: all 0.3s linear;
  }

  /*maus gələndə şəkilin ölçünün böyüməsi*/
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
`;
