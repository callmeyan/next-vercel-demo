import React from "react";
import Link from "next/link"
import s from './style.module.scss';

const SiteHeader:React.FC = ()=>{
    return <section className={s.header}>
        <div className={s.banner}></div>
        <header className={s.flex + ' ' + s.alignBetween}>
            <Link id="logo" href="/" title="大胡子博客">
                <h2 className="site-title">大胡子博客</h2>
            </Link>
            <nav>
                <ul className={s.flex}>
                    <li className="menu-item"><Link href="/">首页</Link></li>
                    <li className="menu-item"><a target="_blank" rel="noopener"
                                                 href="https://www.xintheme.com/theme/94496.html">下载主题</a>
                    </li>
                    <li className="menu-item"><a href="http://dhz.wkbanjia.com/human-fireworks">人间烟火</a>
                    </li>
                    <li className="menu-item"><a href="http://dhz.wkbanjia.com/soul-soother">心灵鸡汤</a></li>
                    <li className="menu-item"><a href="http://dhz.wkbanjia.com/life-style">生活方式</a></li>
                    <li className="menu-item current-post-ancestor current-menu-parent"><a
                        href="http://dhz.wkbanjia.com/technology-digital">科技数码</a></li>
                </ul>
            </nav>
        </header>
    </section>
}
export default SiteHeader;
