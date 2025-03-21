import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron bg-light p-5 rounded">
      <h1 className="display-4">A Warm Welcome!</h1>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
      <hr className="my-4" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
    </div>
  );
};

export default Jumbotron;