import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-5 text-capitalize text-center">
      <div className="col-lg-2">
        {/*Səbət hissəyə məshsulun şəklin əlavə edilməsi*/}
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>

      <div className="col-lg-2">
        {/*Səbət hissəyə məshsulun adının əlavə edilməsi*/}
        {title}
      </div>

      <div className="col-lg-2">
        {/*Səbət hissəyə məshsulun qiymətinin əlavə edilməsi*/}
        {price}
      </div>

      <div className="col-lg-2 my-2 my-lg-0">
        {/*Səbət hissədə button qiymətinin artırıb azaldılması*/}
        <span
          className="btn btn-black mx-1"
          onClick={() => {
            decrement(id);
          }}
        >
          {" "}
          -{" "}
        </span>
        <span className="btn btn-black mx-1">{count}</span>
        <span
          className="btn btn-black mx-1"
          onClick={() => {
            increment(id);
          }}
        >
          {" "}
          +{" "}
        </span>
      </div>
      {/*Silmə buttonu*/}
      <div className="col-lg-2">
        <div
          className="cart-icon"
          onClick={() => {
            removeItem(id);
          }}
        >
          {/*buttonun zibil qutusu forması*/}
          <i className="fas fa-trash"></i>
        </div>
      </div>

      <div className="col-lg-2">
        <strong>ümumi qiymət : {total} ₼</strong>
      </div>
    </div>
  );
}
