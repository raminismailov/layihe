import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                {/*Məhsul haqqında məlumat hissədə şəkil qoymaq */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/*Məhsul haqqında məlumat hissədə məhsulun məlumatları */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model : {title}</h2>

                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    şirket : <span className="text-uppercase">{company}</span>
                  </h4>

                  <h4 className="text-blue">
                    <strong>
                      qiymət : {price} <span>₼</span>
                    </strong>
                  </h4>

                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    məhsulun xüsusiyyətləri:{" "}
                    <p className="text-muted lead">{info}</p>
                    <div>
                      {/*buttonlar*/}
                      <Link to="/">
                        <ButtonContainer>məhsullara qayıt</ButtonContainer>
                      </Link>

                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "inCart" : "səbətə əlavə et"}
                      </ButtonContainer>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
