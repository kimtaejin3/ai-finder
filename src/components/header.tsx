import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<Wrapper>
			<h1>Header</h1>
			<div>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
    display: flex;
    items: center;
    justify-content: space-between;
`;
