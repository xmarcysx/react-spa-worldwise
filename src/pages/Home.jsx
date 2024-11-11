import React from "react";
import Nav from "../components/PageNav";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Nav />
      <h1>WorldWise</h1>
      <Link to="/app">Go to App</Link>
    </div>
  );
}
