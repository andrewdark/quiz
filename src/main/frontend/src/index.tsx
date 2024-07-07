import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

const container = document.getElementById("root");
const app = (<BrowserRouter><App /></BrowserRouter>);

const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(app);
