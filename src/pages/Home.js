import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
export default function Home() {
  return (
    <main>
      <img src="https://d1uxq5uu95as1y.cloudfront.net/covers/3bd8570f2d74094c_Screen-Shot-2021-03-10-at-3.08.11-PM.png" alt="img" />
      <SearchForm />
      <CocktailList />
    </main>
  )
}
