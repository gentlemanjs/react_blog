import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import View from "./pages/view/View";
import Write from "./pages/write/Write";
import Mypage from "./pages/mypage/Mypage";
import "./assets/style/reset.css";
import "./assets/style/common.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/view">
                    <View />
                </Route>
                <Route path="/join">
                    <Join />
                </Route>
                <Route path="/write">
                    <Write />
                </Route>
                <Route path="/mypage">
                    <Mypage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
