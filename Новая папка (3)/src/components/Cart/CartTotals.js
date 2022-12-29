import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className=" ml-md-auto text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Səbəti ümumi təmizlə
              </button>
            </Link>
            <h5>
              <span className="text-title">
                Səbətə əlvavə olunan bütün məhslların ümumi qiymeti :
              </span>
              <strong> {cartSubTotal} ₼ </strong>
            </h5>

            <h5>
              <span className="text-title">vergi : </span>
              <strong>{cartTax} ₼ </strong>
            </h5>

            <h5>
              <span className="text-title">yekun məbləğ : </span>
              <strong>{cartTotal} ₼ </strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
