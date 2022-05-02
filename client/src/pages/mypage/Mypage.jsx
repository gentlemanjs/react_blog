import React from "react";
import "./mypage.css";

export default function Mypage() {
    return (
        <section className="join-type">
            <div className="member-form">
                <h3>회원 정보</h3>
                <div className="join-intro">
                    <div className="face">
                        <img
                            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt="기본이미지"
                        />
                    </div>

                    <div className="intro">자기소개 해주세용~</div>
                </div>

                <div className="join-info">
                    <ul>
                        <li>
                            <strong>이메일</strong>
                            <span>jungsik321@gmail.com</span>
                        </li>
                        <li>
                            <strong>닉네임</strong>
                            <span>젠틀맨 김창식</span>
                        </li>
                        <li>
                            <strong>이름</strong>
                            <span>김정식</span>
                        </li>
                        <li>
                            <strong>생일</strong>
                            <span>1993-02-09</span>
                        </li>
                        <li>
                            <strong>휴대폰 번호</strong>
                            <span>010-2573-8580</span>
                        </li>
                        <li>
                            <strong>성별</strong>
                            <span>남자입니다.</span>
                        </li>
                        <li>
                            <strong>사이트 주소</strong>
                            <span>htpps://gentlemanjs2.netlify.app/</span>
                        </li>
                    </ul>
                </div>

                <div className="join-btn">
                    <a href="/">수정하기</a>
                    <a href="/">탈퇴하기</a>
                </div>
            </div>
        </section>
    );
}
