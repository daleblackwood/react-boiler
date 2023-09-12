import { css, cx } from "@utils";

const styles = css`
	.header h1 {
		font-size: 2rem;
		font-weight: bold;
		margin: 0;
	}
`;

export function Header(props: { className: string, children: Children }) {
	return (
		<header className={cx(props.className, styles.header)}>	
			<h1>Hello World</h1>
		</header>
	);
}