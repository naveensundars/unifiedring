import React from "react";
import ReactDOM from "react-dom";
import AppPage from "./component/App";
import './component/style.scss'
class DemoApp extends React.Component {
    render() {
        return <AppPage />
    }
}

let App = document.getElementById("app");

ReactDOM.render(<DemoApp name="hello world" />, App);