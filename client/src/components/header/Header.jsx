import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id="header">
            <h1 className="logo">
                <Link to="/">
                    REACT <em>class</em>
                </Link>
            </h1>
            <nav className="menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                    <li>
                        <Link to="/join">JOIN</Link>
                    </li>
                    <li>
                        <Link to="/view">POST</Link>
                    </li>
                    <li>
                        <a href="/write">WRITE</a>
                        {/* <ul className="sub">
                            <li>
                                <a href="/">문제 만들기</a>
                            </li>
                            <li>
                                <a href="/">문제 풀기</a>
                            </li>
                        </ul> */}
                    </li>
                </ul>
            </nav>
            <div className="member">
                <span className="ir_so">회원 정보 영역</span>
                <a href="/mypage">
                    <img
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <span>님 환영합니다.</span>
                </a>
            </div>
        </header>
    );
}
