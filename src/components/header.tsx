import { css } from "@emotion/react";
import { Link } from "@tanstack/react-router";
import { HiShoppingBag } from "react-icons/hi";

export default function Header() {
	return (
		<header css={styles.container}>
			<h1 css={styles.logo}>
				<Link to="/">Kitchen house</Link>
			</h1>
			<form css={styles.searchForm}>
				<input type="text" placeholder="" />
			</form>
			<nav css={styles.nav}>
				<Link to="/cart" css={styles.navLink}>
					<HiShoppingBag size={24} color="#000" />
				</Link>
			</nav>
		</header>
	);
}

const styles = {
	container: css`
        display: flex;
        align-items: center;
        padding: 1.5rem 0;
        gap: 20px;
    `,
	logo: css`
        font-size: 1.5rem;
        font-weight: 700;
        color: #111827;
        margin: 0;
        cursor: pointer;
        transition: color 0.2s ease;
        a {
            text-decoration: none;
            color: inherit;
            font-weight: 900;
        }
    `,
	searchForm: css`
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    
        background: #f4f4f4;
        border-radius: 9999px;
        
        input {
            &:focus {
                outline: none;
            }
            padding: 12px 0 12px 8px;
            border: none;
            background: transparent;
            display: block;
            width: 100%;

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
    `,
};
