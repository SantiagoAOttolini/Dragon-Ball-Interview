import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../pagination.component";

describe("Pagination", () => {
  test("renders pagination component", () => {
    render(
      <Pagination
        page={1}
        totalPages={5}
        onNext={jest.fn()}
        onPrev={jest.fn()}
      />
    );
    expect(screen.getByText("Página 1 de 5")).toBeInTheDocument();
  });

  test("calls onNext when next button is clicked", () => {
    const onNext = jest.fn();
    render(
      <Pagination page={1} totalPages={5} onNext={onNext} onPrev={jest.fn()} />
    );
    fireEvent.click(screen.getByText("Siguiente ➡️"));
    expect(onNext).toHaveBeenCalled();
  });

  test("calls onPrev when previous button is clicked", () => {
    const onPrev = jest.fn();
    render(
      <Pagination page={2} totalPages={5} onNext={jest.fn()} onPrev={onPrev} />
    );
    fireEvent.click(screen.getByText("⬅️ Anterior"));
    expect(onPrev).toHaveBeenCalled();
  });

  test("disables previous button on first page", () => {
    render(
      <Pagination
        page={1}
        totalPages={5}
        onNext={jest.fn()}
        onPrev={jest.fn()}
      />
    );
    expect(screen.getByText("⬅️ Anterior")).toBeDisabled();
  });

  test("disables next button on last page", () => {
    render(
      <Pagination
        page={5}
        totalPages={5}
        onNext={jest.fn()}
        onPrev={jest.fn()}
      />
    );
    expect(screen.getByText("Siguiente ➡️")).toBeDisabled();
  });
});
