import { getContinent } from "@/app/data/continents";
import Link from "next/link";

const SingleContinent = async ({ params }) => {
  const { id } = params;
  const { data } = await getContinent(id);
  return (
    <div>
      {data?.map((country) => (
        <div key={country?.id}>
          <Link href={`/`}>{country?.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default SingleContinent;
