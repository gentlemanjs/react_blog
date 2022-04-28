import React from "react";
import "./view.css";

export default function View() {
    return (
        <section id="blog-type" className="center mb100">
            <div className="blog__label">
                <h3 className="section__title">REACT로 만든 블로그 입니다.</h3>
                <div>
                    <span className="author">
                        <a href="/">김정식</a>
                    </span>
                    <span className="date">2022.04.27</span>
                    <br></br>
                    <span className="modify">
                        <a href="/">수정</a>
                    </span>
                    <span className="delete">
                        <a href="/">삭제</a>
                    </span>
                </div>
            </div>
            <div className="container">
                <div className="blog__layout">
                    <div className="blog__left">
                        <h4>REACT로 만든 블로그 입니다.</h4>
                        <div>
                            PHP로 만들었던 블로그 페이지를 REACT로 만들어 보았습니다. 계속적인 관리로 기능을 추가할
                            예정입니다. 문의 사항이 있으시다면 아래의 CONTACT 메뉴를 통하여 연락 부탁 드립니다. PHP로
                            만들었던 블로그 페이지를 REACT로 만들어 보았습니다. 계속적인 관리로 기능을 추가할
                            예정입니다. 문의 사항이 있으시다면 아래의 CONTACT 메뉴를 통하여 연락 부탁 드립니다.
                        </div>
                    </div>
                    <div className="blog__right">
                        <div className="ad">
                            <iframe
                                title="쿠팡"
                                src="https://ads-partners.coupang.com/widgets.html?id=572095&template=carousel&trackingCode=AF6329099&subId=&width=300&height=300"
                                width="300"
                                height="300"
                                frameborder="0"
                                scrolling="no"
                                referrerpolicy="unsafe-url"
                            ></iframe>
                            <iframe
                                title="쿠팡"
                                src="https://ads-partners.coupang.com/widgets.html?id=572101&template=carousel&trackingCode=AF6329099&subId=&width=300&height=300"
                                width="300"
                                height="300"
                                frameborder="0"
                                scrolling="no"
                                referrerpolicy="unsafe-url"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
