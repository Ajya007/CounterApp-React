import React, { Component } from "react";
import Counter from "./Counter";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"


test("header render with correct text", () => {
    const {getByTestId} = render (<Counter />)
    const headerEl = getByTestId("header")

    expect(headerEl.textContent).toBe("Counter App")
});


test("counter initially start with 0", () =>{
    const {getByTestId} = render (<Counter/>)
    const counterEl= getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
})

test("button with Add value", () =>{
    const {getByTestId} = render (<Counter/>)
    const counterEl= getByTestId("Add")

    expect(counterEl.textContent).toBe("Add")
})

test("render Button with Subtract", () =>{
    const {getByTestId} = render (<Counter/>)
    const counterEl= getByTestId("Sub")

    expect(counterEl.textContent).toBe("Sub")
})