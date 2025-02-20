import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../search.component";

describe("Search", () => {
  test("renders search input", () => {
    render(<Search searchTerm="" handleSearch={jest.fn()} resultsCount={0} />);
    expect(
      screen.getByPlaceholderText("BUSCA UN PERSONAJE")
    ).toBeInTheDocument();
  });

  test("calls handleSearch on input change", () => {
    const handleSearch = jest.fn();
    render(
      <Search searchTerm="" handleSearch={handleSearch} resultsCount={0} />
    );
    fireEvent.change(screen.getByPlaceholderText("BUSCA UN PERSONAJE"), {
      target: { value: "Goku" },
    });
    expect(handleSearch).toHaveBeenCalledWith("Goku");
  });

  test("renders results count", () => {
    render(<Search searchTerm="" handleSearch={jest.fn()} resultsCount={5} />);
    expect(screen.getByText("5 RESULTADOS")).toBeInTheDocument();
  });

  test("does not render results count when it is zero", () => {
    render(<Search searchTerm="" handleSearch={jest.fn()} resultsCount={0} />);
    expect(screen.queryByText("0 RESULTADOS")).not.toBeInTheDocument();
  });
});
