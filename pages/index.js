import HomePage from '../src/pages/Home'
import "isomorphic-fetch";

export default function Home(props) {
  return (
      <HomePage {...props} />
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/letters')
  const letters = await res.json();

  return {
    props: {
      letters,
    },
  }
}
