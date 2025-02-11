export function App() {
	return (
		<main className="min-h-screen bg-zinc-900 text-zinc-200 flex flex-col gap-16">
			<h1 className="text-7xl font-bold underline">Hello world!</h1>
			<Preview />
		</main>
	);
}

function Preview() {
	return (
		<div className="text-justify [writing-mode:vertical-rl] [line-break:strict] leading-[2.5] w-[calc(2.5*25rem+1px)] h-[30rem] whitespace-pre-wrap">
			{"サンプルテキスト".repeat(100)}
		</div>
	);
}
