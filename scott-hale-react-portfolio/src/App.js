import React from "react";
import PortfolioContainer from "../components/PortfolioContainer";

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';

function App({ PortfolioContainer }) {
    return (
        <NextUIProvider>
      <PortfolioContainer />
    </NextUIProvider>
  );
}

export default App;
