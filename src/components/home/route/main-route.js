import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Components*
import PaymentComponent from '../../payment/stripePrivider';

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>home!</div>,
        title: () => <h2>Home</h2>
    },
    {
        path: "/abonnement",
        sidebar: () => <PaymentComponent />,
        title: () => <h2>Abonnement</h2>
    },
    {
        path: "/shoelaces",
        sidebar: () => <div>shoelaces!</div>,
        title: () => <h2>Shoelaces</h2>
    }
];

export default routes;