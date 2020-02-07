import ReactDOM from "react-dom";
import React, { Component } from "react";

import Form from './components/From';

console.log("document.getElementById('container')",document.getElementById('container'));
ReactDOM.render((<Form/>), document.getElementById('container'));
