import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../header.component";

describe("Header", () => {
  test("renders header logo", () => {
    render(
      <MemoryRouter>
        <Header
          likedCount={0}
          onToggleFavorites={jest.fn()}
          onResetCharacters={jest.fn()}
        />
      </MemoryRouter>
    );
    expect(screen.getByAltText("Header Logo")).toBeInTheDocument();
  });

  test("renders like icon with count", () => {
    render(
      <MemoryRouter>
        <Header
          likedCount={5}
          onToggleFavorites={jest.fn()}
          onResetCharacters={jest.fn()}
        />
      </MemoryRouter>
    );
    expect(screen.getByAltText("Like Icon")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("calls onToggleFavorites when like icon is clicked", () => {
    const onToggleFavorites = jest.fn();
    render(
      <MemoryRouter>
        <Header
          likedCount={0}
          onToggleFavorites={onToggleFavorites}
          onResetCharacters={jest.fn()}
        />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByAltText("Like Icon"));
    expect(onToggleFavorites).toHaveBeenCalled();
  });

  test("calls onResetCharacters when logo is clicked", () => {
    const onResetCharacters = jest.fn();
    render(
      <MemoryRouter>
        <Header
          likedCount={0}
          onToggleFavorites={jest.fn()}
          onResetCharacters={onResetCharacters}
        />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByAltText("Header Logo"));
    expect(onResetCharacters).toHaveBeenCalled();
  });
});
