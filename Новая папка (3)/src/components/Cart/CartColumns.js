import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        {/*col-lg-2 p teqini sağa sola yeri deyişir*/}
        <div className="col-lg-2">
          <p className="text-uppercase">Məhsul</p>
        </div>

        <div className="col-lg-2">
          <p className="text-uppercase">Məhsulun adı</p>
        </div>

        <div className="col-lg-2">
          <p className="text-uppercase">Qiymti</p>
        </div>

        <div className="col-lg-2">
          <p className="text-uppercase">Miqdar</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase">Məhsulu sil</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase">ümumi</p>
        </div>
      </div>
    </div>
  );
}
