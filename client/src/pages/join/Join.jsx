import React from "react";
import "./join.css";

export default function Join() {
    return (
        <section className="join-type">
            <div className="member-form">
                <h3>회원가입</h3>
                {/* <ul className="list">
                    <li>회원가입은 1인당 1개의 이메일 계정을 이용할 수 있습니다.</li>
                    <li>
                        개인정보를 수집 및 이용하며, 회원의 개인정보를 안전하게 취급하고, 교육을 목적으로 사용됩니다.
                    </li>
                </ul>
                <h4 className="mt30 mb10">개인정보 수집 및 이용에 대한 안내</h4>
                <div className="mb50 blue">
                    <ul className="list">
                        <li>
                            목적: 가입자 개인 식별, 가입 의사 확인, 가입자와의 원활한 의사소통, 가입자와의 교육 커뮤니
                            케이션
                        </li>
                        <li>항목: 아이디(이메일주소), 비밀번호, 이름, 생년월일, 휴대폰번호</li>
                        <li>보유기간: 회원 탈퇴 시까지 보유(탈퇴일로부터 즉시 파기합니다.)</li>
                        <li>
                            개인정보 수집에 대한 동의를 거부할 권리가 있으며, 회원 가입시 개인정보 수집을 동의함으로
                            간주합니다.
                        </li>
                    </ul>
                    <span className="check">
                        <input type="checkbox" name="joinCheck" id="joinCheck" />
                        <label for="joinCheck">약관에 동의합니다.</label>
                    </span>
                </div> */}
                <form action="joinSave.php" name="join" method="post">
                    <fieldset>
                        <legend className="ir_so">회원가입 입력폼</legend>
                        <div className="join-box">
                            <div className="basic">
                                <label htmlFor="youName">이름</label>
                                <input
                                    type="text"
                                    id="youName"
                                    name="youName"
                                    placeholder="이름을 적어주세요!"
                                    autocomplete="off"
                                />
                                <p className="comment" id="youNameComment"></p>
                            </div>
                            <div className="overlap">
                                <label htmlFor="youEmail">이메일</label>
                                <input
                                    type="text"
                                    id="youEmail"
                                    name="youEmail"
                                    placeholder="Sample@naver.com"
                                    autoComplete="off"
                                />
                                {/* <a href="#a" className="test">
                                    중복검사
                                </a>
                                <p className="comment" id="youEmailComment"></p> */}
                            </div>
                            {/* <div className="overlap">
                                <label for="youNickName">닉네임</label>
                                <input
                                    type="text"
                                    id="youNickName"
                                    name="youNickName"
                                    placeholder="닉네임을 적어주세요!"
                                    autocomplete="off"
                                />
                                <a href="#a" className="test">
                                    중복검사
                                </a>
                                <p className="comment" id="youNickNameComment"></p>
                            </div> */}
                            <div className="basic">
                                <label for="youPass">비밀번호</label>
                                <input
                                    type="password"
                                    id="youPass"
                                    name="youPass"
                                    placeholder="비밀번호를 적어주세요!"
                                    autoComplete="off"
                                />
                                <p className="comment" id="youPassComment"></p>
                            </div>
                            {/* <div className="basic">
                                <label for="youPassC">비밀번호 확인</label>
                                <input
                                    type="password"
                                    id="youPassC"
                                    name="youPassC"
                                    maxlength="20"
                                    placeholder="비밀번호를 다시 적어주세요!"
                                    autocomplete="off"
                                />
                                <p className="comment" id="youPassCComment"></p>
                            </div> */}
                            {/* <div className="basic">
                                <label for="youBirth">생년월일</label>
                                <input
                                    type="text"
                                    id="youBirth"
                                    name="youBirth"
                                    maxlength="12"
                                    placeholder="YYYY-MM-DD"
                                    autocomplete="off"
                                />
                                <p className="comment" id="youBirthComment"></p>
                            </div>
                            <div className="basic">
                                <label for="youPhone">휴대폰 번호</label>
                                <input
                                    type="text"
                                    id="youPhone"
                                    name="youPhone"
                                    maxlength="15"
                                    placeholder="000-0000-0000"
                                    autocomplete="off"
                                />
                                <p className="comment" id="youPhoneComment"></p>
                            </div> */}
                        </div>
                        <button id="joinBtn" className="join-submit" type="submit">
                            회원가입 완료
                        </button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}
