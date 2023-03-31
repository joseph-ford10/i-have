import { useState } from 'react'
import Form from './Form'
import Card from './Card'

export default function Home() {
  const [page, setPage] = useState('form')

  function pageChange(val) {
    setPage(val)
  }

  if (page == 'form') {
    return <Form page={page} pageChange={pageChange} />
  } else if (page == 'card') {
    return <Card page={page} pageChange={pageChange} />
  }
}
