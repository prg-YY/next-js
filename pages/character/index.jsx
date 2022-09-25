import Link from "next/link"

const CharacterList = ({ characters }) => {
  return (
    <div>
      <h2>Character List</h2>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <Link href={`character/${character.id}`} passHref>
              <h3>{character.name}</h3>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default CharacterList

export async function getStaticProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character")
  const characters = await res.json()
  return {
    props: {
      characters: characters.results,
    },
  }
}
