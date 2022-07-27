import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

test("render all buttons", async () => {
	render(<App />)
	const buttons = screen.getAllByRole("button")
	expect(buttons.length).toBe(20)
})
