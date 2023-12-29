import './index.css';


import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Calculator from "./pages/Calculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "calculate",
    element: (
      <Calculator />
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<
//   App />);