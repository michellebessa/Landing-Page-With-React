import React from "react";

export default function Jumbotron () {
  return (
    <div className="jumbotron h-25 d-inline-block mt-4">
      <h1 className="display-4 ms-5">A Warm Welcome!</h1>
      <p className="lead ms-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      <p className="lead ms-5">
        <a className="btn btn-primary" href="#" role="button">Call to action!</a>
      </p>
    </div>
  );
};
