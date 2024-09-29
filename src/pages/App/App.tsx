import React from 'react'
import { Provider } from "react-redux";
import store from '@store/store';

import "@assets/css/main.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from '@pages/Landing/Landing';
import Offcanvas from '@components/Offcanvas/Offcanvas';
import Wrapper from '@pages/App/Wrapper';
import DetailedProduct from '@pages/DetailedProduct/DetailedProduct';
import Auth from '@pages/Auth/Auth';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <Auth/>
      element: <Wrapper><Landing /></Wrapper>
    },
    {
      path: "/home",
      element: <Wrapper><Landing /></Wrapper>
    },
    {
      path: "/detailed-product",
      element: <Wrapper><DetailedProduct />  </Wrapper>
    },
  ]);

  return <Provider store={store}>
    <Offcanvas />

    <RouterProvider router={router} />

  </Provider>
}

export default App