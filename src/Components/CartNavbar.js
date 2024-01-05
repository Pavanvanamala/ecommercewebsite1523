import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartNavbar = () => {
  const cartData = useSelector((state) => state.user);
  const navigate = useNavigate();

  const HandleNavigateHome = () => {
    navigate('/ProductsList');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand" href="#" style={{ fontWeight: "bolder" }}>
              Cart
            </a>
            <img src="https://cdn-icons-png.flaticon.com/128/2038/2038854.png" width='40' height='40' alt="Cart Icon" />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="container-fluid d-flex justify-content-end">
              <img src='https://cdn-icons-png.flaticon.com/128/2331/2331970.png' width="50" height="50" alt="User Icon" />
              <form className="d-flex" role="search">
                <button className="btn btn-primary" onClick={HandleNavigateHome}>Home</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CartNavbar;
