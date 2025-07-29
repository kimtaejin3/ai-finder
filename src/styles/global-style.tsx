import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

export default function GlobalStyle() {
	return (
		<Global
			styles={css`
            ${emotionReset}

            button {
                all: unset;
            }

            *, *::after, *::before {
                box-sizing: border-box;
                -moz-osx-font-smoothing: grayscale;
                -webkit-font-smoothing: antialiased;
                font-smoothing: antialiased;
            }
            `}
		/>
	);
}
