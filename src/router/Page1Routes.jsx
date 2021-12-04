import { Page1A } from "../Page1DetailA";
import { Page1B } from "../Page1DetailB";
import { Page1 } from "../Page1";
export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1A />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1B />
  }
];
