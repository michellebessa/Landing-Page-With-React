import React from "react";

export default function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg pt-3 pb-3 bg-secondary">
      <div className="container">
        <a className="navbar-brand position-relative fs-3 m-auto text-light" href="#">Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse fs-5" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
