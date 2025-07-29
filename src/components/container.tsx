import styled from "@emotion/styled";

export default function Container({ children }: { children: React.ReactNode }) {
	return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
    max-width: 750px;
    margin: 0 auto;
    padding: 0 20px;
`;
