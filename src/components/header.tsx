import { css } from "@emotion/react";
import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header css={styles.container}>
			<h1 css={styles.logo}>AI Finder</h1>
			<nav css={styles.nav}>
				<Link to="/" css={styles.navLink}>
					홈
				</Link>
				<Link to="/about" css={styles.navLink}>
					소개
				</Link>
			</nav>
		</header>
	);
}

const styles = {
	container: css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 0;
        margin-bottom: 2rem;
        border-bottom: 1px solid #f3f4f6;
    `,
	logo: css`
        font-size: 1.5rem;
        font-weight: 700;
        color: #111827;
        margin: 0;
        cursor: pointer;
        transition: color 0.2s ease;
        &:hover {
            color: #4f46e5;
        }
    `,
	nav: css`
        display: flex;
        gap: 2rem;
        align-items: center;
    `,
	navLink: css`
        color: #4b5563;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s ease;
        position: relative;
        &:hover {
            color: #4f46e5;
        }
        &:after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: #4f46e5;
            transition: width 0.2s ease;
        }
        &:hover:after {
            width: 100%;
        }
    `,
};
