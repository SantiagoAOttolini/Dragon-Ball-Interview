import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CharacterHome from "../character-home.page";
import useCharacters from "../../../hooks/useCharacters.hook";
import useSearch from "../../../hooks/useSearch.hook";

jest.mock("../../../hooks/useCharacters.hook");
jest.mock("../../../hooks/useSearch.hook");

const mockCharacters = [
  { id: 1, name: "Goku", image: "goku.jpg" },
  { id: 2, name: "Vegeta", image: "vegeta.jpg" },
];

describe("CharacterHome", () => {
  beforeEach(() => {
    useCharacters.mockReturnValue({
      characters: mockCharacters,
      loading: false,
      page: 1,
      totalPages: 1,
      nextPage: jest.fn(),
      prevPage: jest.fn(),
    });

    useSearch.mockReturnValue({
      searchTerm: "",
      setSearchTerm: jest.fn(),
      filteredCharacters: mockCharacters,
    });
  });

  test("renders loading state", () => {
    useCharacters.mockReturnValueOnce({
      characters: [],
      loading: true,
      page: 1,
      totalPages: 1,
      nextPage: jest.fn(),
      prevPage: jest.fn(),
    });

    render(
      <MemoryRouter>
        <CharacterHome
          likedCharacters={[]}
          handleLike={jest.fn()}
          showFavorites={false}
        />
      </MemoryRouter>
    );
    expect(screen.getByText("🔄 Cargando personajes...")).toBeInTheDocument();
  });

  test("renders characters", () => {
    render(
      <MemoryRouter>
        <CharacterHome
          likedCharacters={[]}
          handleLike={jest.fn()}
          showFavorites={false}
        />
      </MemoryRouter>
    );
    expect(screen.getByText("Goku")).toBeInTheDocument();
    expect(screen.getByText("Vegeta")).toBeInTheDocument();
  });

  test("handles search input", () => {
    const setSearchTerm = jest.fn();
    useSearch.mockReturnValueOnce({
      searchTerm: "",
      setSearchTerm,
      filteredCharacters: mockCharacters,
    });

    render(
      <MemoryRouter>
        <CharacterHome
          likedCharacters={[]}
          handleLike={jest.fn()}
          showFavorites={false}
        />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText("BUSCA UN PERSONAJE"), {
      target: { value: "Goku" },
    });
    expect(setSearchTerm).toHaveBeenCalledWith("Goku");
  });

  test("renders pagination", () => {
    render(
      <MemoryRouter>
        <CharacterHome
          likedCharacters={[]}
          handleLike={jest.fn()}
          showFavorites={false}
        />
      </MemoryRouter>
    );
    expect(screen.getByText("Página 1 de 1")).toBeInTheDocument();
  });
});
