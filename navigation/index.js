import React from "react";
import AuthProvider from "../components/providers/AuthProvider";
import Routes from "./Routes";

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Providers;
