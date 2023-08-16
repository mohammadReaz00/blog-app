import Link from "next/link";

const Random = ({}) => {
  return (
    <div className="my-10 text-center">
      <h1 className="text-4xl uppercase py-16">wrong path</h1>
      <Link className="text-blue-700 text-2xl underline " href="/">
        Home
      </Link>
    </div>
  );
};

export default Random;
