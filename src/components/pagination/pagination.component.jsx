//Vendors
import React from 'react'
//Styles
import './pagination.styles.css'

function Pagination({ page, totalPages, onNext, onPrev }) {
  return (
    <div className="pagination">
      <button onClick={onPrev} disabled={page === 1}>
        ⬅️ Anterior
      </button>
      <span>
        Página {page} de {totalPages}
      </span>
      <button onClick={onNext} disabled={page === totalPages}>
        Siguiente ➡️
      </button>
    </div>
  )
}

export default Pagination
