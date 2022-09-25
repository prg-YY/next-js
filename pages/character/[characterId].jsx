import Image from "next/image"
import imageLoader from "../../imageLoder"
const CharacterId = ({ character }) => {
  return (
    <div>
      <p>{character.name}</p>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <Image
        unoptimized
        loader={imageLoader}
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
      />
    </div>
  )
}

export default CharacterId

export async function getStaticPaths() {
  const res = await fetch(`https://rickandmortyapi.com/api/character`)
  const characters = await res.json()
  const paths = characters.results.map((character) => {
    return {
      params: {
        characterId: character.id.toString(),
      },
    }
  })
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const { characterId } = params
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`
  )
  const character = await res.json()
  return {
    props: {
      character: character,
    },
  }
}
