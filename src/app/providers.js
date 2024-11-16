'use client';

const { NextUIProvider } = require("@nextui-org/system");

const Providers = ({ children }) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
};

export default Providers;
