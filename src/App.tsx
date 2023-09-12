import { Header, Page } from "@components";

function App() {
	return (
		<div>
			<Header title="Dale's React Boilerplate" />
			<Page>
				<p>This boilerplate uses:</p>
				<ul>
					<li>React</li>
					<li>Typescript</li>
					<li>Vite</li>
					<li>PicoCSS</li>
					<li>Classnames</li>
					<li>Vite Inline CSS</li>
				</ul>
			</Page>
		</div>
	)
}

export default App;
