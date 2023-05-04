import React, {useState} from "react";
import Link from "next/link"
import s from './style.module.scss';

type Banner = {
    copyright: string;
    title: string;
    url: string;
    urlbase: string;
}


const SiteHeader: React.FC = () => {
    const [banner, setBanner] = useState<{}>()


    return <section className={s.siteHeader}>
        <div className={s.banner}>
            <svg className={s.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                 viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave"
                          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                </defs>
                <g className={s.parallax}>
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"/>
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"/>
                </g>
            </svg>
        </div>
        <header className="flex align-center space-between">
            <Link id="logo" href="/" title="大胡子博客">
                <h2 className="site-title">Next Blog Demo</h2>
            </Link>
            <nav>
                <ul className="flex">
                    <li className="menu-item"><Link href="/">首页</Link></li>
                </ul>
            </nav>
        </header>
    </section>
}
export default SiteHeader;
