import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import CharacterDetail from '../character-detail.page'
import useCharacterDetail from '../../../hooks/useCharacterDetail.hook'

jest.mock('../../../hooks/useCharacterDetail.hook')

const mockCharacter = {
  id: 1,
  name: 'Goku',
  image: 'goku.jpg',
  description: 'A powerful Saiyan warrior.',
  transformations: [{ id: 2, name: 'Super Saiyan', image: 'super-saiyan.jpg' }],
}

describe('CharacterDetail', () => {
  beforeEach(() => {
    useCharacterDetail.mockReturnValue({
      character: mockCharacter,
      loading: false,
    })
  })

  test('renders loading state', () => {
    useCharacterDetail.mockReturnValueOnce({
      character: null,
      loading: true,
    })

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<CharacterDetail />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Cargando detalles...')).toBeInTheDocument()
  })

  test('renders character details', () => {
    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<CharacterDetail />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Goku')).toBeInTheDocument()
    expect(screen.getByText('A powerful Saiyan warrior.')).toBeInTheDocument()
  })

  test('renders character transformations', () => {
    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<CharacterDetail />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Transformaciones')).toBeInTheDocument()
    expect(screen.getByText('Super Saiyan')).toBeInTheDocument()
  })

  test('renders no character found message', () => {
    useCharacterDetail.mockReturnValueOnce({
      character: null,
      loading: false,
    })

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<CharacterDetail />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('No se encontró el personaje.')).toBeInTheDocument()
  })
})
