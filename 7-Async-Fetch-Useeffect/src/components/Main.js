import { useEffect, useState } from 'react'
import { useApi } from '../hooks/useApi'

import Movies from './Movies'
import Search from './Search'
import Alert from './Shared/Alert'
import Boxwrapper from './Shared/Boxwrapper'
import Loading from './Shared/Loading'

const Main = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, error, isLoading, getMovies } = useApi()

  const defaultQuery = 'Star Wars'

  useEffect(() => {
    getMovies(defaultQuery, 5)
  }, [getMovies])

  const doSearch = () => getMovies(searchQuery)

  return (
    <main className="w-3/5 mx-auto my-12 flex flex-col space-y-10">
      <Boxwrapper>
        <Search searchQuerHandler={{ setSearchQuery, doSearch }} />
      </Boxwrapper>
      {error ? <Alert type="danger">{error}</Alert> : null}
      {isLoading ? <Loading /> : <Movies movies={data} />}
    </main>
  )
}

export default Main
