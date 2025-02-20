//Hooks
import { useState, useEffect, useMemo } from 'react'
//Serivces
import { getCharacterById } from '../services/dragon-ball-api.services'
//Utils
import { parseKi } from '../utils/parse-ki.utils'

const useCharacterDetail = (id) => {
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const cache = useMemo(() => ({}), [])

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true)
      if (cache[id]) {
        setCharacter(cache[id])
        setLoading(false)
      } else {
        const data = await getCharacterById(id)
        if (data && data.transformations) {
          data.transformations.sort((a, b) => parseKi(a.ki) - parseKi(b.ki))
        }
        cache[id] = data
        setCharacter(data)
        setLoading(false)
      }
    }
    fetchCharacter()
  }, [cache, id])

  return { character, loading }
}

export default useCharacterDetail
