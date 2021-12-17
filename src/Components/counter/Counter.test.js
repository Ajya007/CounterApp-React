import React, { Component } from "react";
import Counter from "./Counter";
import { render,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"


let getByTestId

beforeEach(() => {
    const component=render (<Counter />);
    getByTestId=component.getByTestId
})

test("header render with correct text", () => {
    const headerEl = getByTestId("header")

    expect(headerEl.textContent).toBe("Counter App")
});


test("counter initially start with 0", () =>{

    const counterEl= getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
})

test("button with Add value", () =>{

    const btnEl= getByTestId("Add")

    expect(btnEl.textContent).toBe("Add")
})

test("render Button with Subtract", () =>{

    const btnEl= getByTestId("Sub")

    expect(btnEl.textContent).toBe("Sub")
})


test("changing value of input works correctly",() =>{
 
    const inputEl=getByTestId("input") 
  

    expect(inputEl.value).toBe("1")
    fireEvent.change(inputEl,{

        target:{
            value:"5"
        }
    });

    expect(inputEl.value).toBe("5")

    
})

test("Click on plus button adds 1 to the counter", () => {
    const btnEl= getByTestId("Add")
     const counterEl= getByTestId("counter")

    fireEvent.click(btnEl)

    expect(counterEl.textContent).toBe("1")
})


test("Click on minus button adds 1 to the counter", () => {
    const btnEl= getByTestId("Sub")
     const counterEl= getByTestId("counter")

    fireEvent.click(btnEl)

    expect(counterEl.textContent).toBe("-1")
})



test("changing input and Click on plus button behaviour test", () => {
    const btnEl= getByTestId("Add")
    const counterEl= getByTestId("counter")
    const inputEl=getByTestId("input") 


       fireEvent.change(inputEl,{

        target:{
            value:"5"
        }
    });

    fireEvent.click(btnEl)

    expect(counterEl.textContent).toBe("5")
})
