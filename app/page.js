import Image from "next/image"
import { getAllContinents } from "./data/continents"
import Link from "next/link"


const Home = async () => {
  let {data} = await getAllContinents()
  
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4">
      {data?.map((continent, _i) => <Link href={`/continents/${continent?.id}`} key={_i}>
        <Image width={300} height={300} alt="continent image" src={continent?.img} />
      </Link>)}
    </div>
  )
}

export default Home