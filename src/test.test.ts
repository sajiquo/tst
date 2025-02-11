import { describe, expect, test } from "bun:test";

describe("sample", () => {
	test("sample", () => {
		expect(1).toBeGreaterThan(0);
	});
	test("dom test", () => {
		document.body.innerHTML = "<button>My button</button>";
		const button = document.querySelector("button");
		expect(button?.innerText).toEqual("My button");
	});
});
