import React, { lazy } from 'react';

const HomePage = lazy(()=>import("~/pages/home"));
const ExamplePage = lazy(()=>import("~/pages/example"));
const ExceptionPage = lazy(()=>import("~/pages/exception"));

export default [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/example",
    component: ExamplePage
  },
  {
    path: "/404",
    component: ExceptionPage
  }
];

// pages
// import HomePage from "~/pages/home";
// import ExamplePage from "~/pages/example";
// import ExceptionPage from "~/pages/exception";

// export default [
//   {
//     path: "/",
//     component: HomePage,
//     exact: true
//   },
//   {
//     path: "/example",
//     component: ExamplePage
//   },
//   {
//     path: "/404",
//     component: ExceptionPage
//   }
// ];
