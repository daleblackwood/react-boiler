import { css, cx } from "@utils";

const styles = css`
	.page {
		margin: 0;
	}
`;

export function Page(props: { className?: string, title?: string, children?: Children, summary?: Children }) {
	return (
		<article className={cx(styles.page, props.className)}>	
			{ props.title && <h2>{ props.title }</h2> }
			{ props.summary && <summary>{ props.summary }</summary> }
			<main>{ props.children }</main>
		</article>
	);
}