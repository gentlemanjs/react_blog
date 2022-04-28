import React from "react";
import "./post.css";

export default function Post() {
    return (
        <>
            <article className="post">
                <figure className="post__header" aria-hidden="true">
                    <a href="/view">
                        <img src="https://source.unsplash.com/800x600/?nature,water" alt="" />
                    </a>
                </figure>
                <div className="post__body">
                    <span className="post__cate">React</span>
                    <div className="post__title">REACT로 만든 블로그 페이지입니다.</div>
                    <div className="post__desc">
                        PHP로 만들었던 블로그 페이지를 REACT로 만들어 보았습니다. 계속적인 관리로 기능을 추가할
                        예정입니다. 문의 사항이 있으시다면 아래의 CONTACT 메뉴를 통하여 연락 부탁 드립니다. PHP로
                        만들었던 블로그 페이지를 REACT로 만들어 보았습니다. 계속적인 관리로 기능을 추가할 예정입니다.
                        문의 사항이 있으시다면 아래의 CONTACT 메뉴를 통하여 연락 부탁 드립니다.
                    </div>
                    <div className="post__info">
                        <span className="author">김정식</span>
                        <span className="date">2022.04.27</span>
                    </div>
                </div>
            </article>
        </>
    );
}
