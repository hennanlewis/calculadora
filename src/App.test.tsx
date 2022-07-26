import { render, screen } from "@testing-library/react"
import { click } from "@testing-library/user-event/dist/click"
import App from "./App"

test("render all buttons", () => {
	render(<App />)
	const buttonsElements = screen.getAllByRole("button")
	expect(buttonsElements.length).toBe(20)
})
