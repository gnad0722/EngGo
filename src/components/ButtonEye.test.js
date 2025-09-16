import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import ButtonEye from "./ButtonEye";

test("Show content of button", () => {
  const handleShow = jest.fn();
  render(<ButtonEye onShow={handleShow} name="eye" show={false}/>)


  const button=screen.getByRole("button");
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleShow).toHaveBeenCalledTimes(1);
});
