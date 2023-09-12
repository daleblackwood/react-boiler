import { css, cx } from "@utils";

const styles = css`
	.header {
		padding: var(--block-spacing-horizontal);
	}

	.header h1 {
		font-weight: bold;
		margin: 0;
	}
`;

export function Header(props: { className?: string, title: string }) {
	return (
		<header className={cx(styles.header, props.className)}>	
			<h1>{ props.title }</h1>
		</header>
	);
}