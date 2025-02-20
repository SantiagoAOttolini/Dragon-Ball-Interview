import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import CharacterCard from '../character-card.component'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

const mockCharacter = {
  id: 1,
  name: 'Goku',
  image: 'goku.jpg',
}

describe('CharacterCard', () => {
  const mockNavigate = jest.fn()

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate)
  })

  test('renders character card', () => {
    render(
      <MemoryRouter>
        <CharacterCard
          name={mockCharacter.name}
          image={mockCharacter.image}
          characterData={mockCharacter}
          handleLike={jest.fn()}
          isLiked={false}
        />
      </MemoryRouter>
    )
    expect(screen.getByText('Goku')).toBeInTheDocument()
    expect(screen.getByAltText('Goku')).toBeInTheDocument()
  })

  test('calls handleLike when like icon is clicked', () => {
    const handleLike = jest.fn()
    render(
      <MemoryRouter>
        <CharacterCard
          name={mockCharacter.name}
          image={mockCharacter.image}
          characterData={mockCharacter}
          handleLike={handleLike}
          isLiked={false}
        />
      </MemoryRouter>
    )
    fireEvent.click(screen.getByRole('button'))
    expect(handleLike).toHaveBeenCalledWith(mockCharacter)
  })

  test('navigates to character details on card click', () => {
    const { container } = render(
      <MemoryRouter>
        <CharacterCard
          name={mockCharacter.name}
          image={mockCharacter.image}
          characterData={mockCharacter}
          handleLike={jest.fn()}
          isLiked={false}
        />
      </MemoryRouter>
    )
    fireEvent.click(container.firstChild)
    expect(mockNavigate).toHaveBeenCalledWith(`/details/${mockCharacter.id}`)
  })
})
