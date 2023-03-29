import Link from "next/link";

export const Card = (item) => {
  return (
    <div className="card">
      <img className="card-image" src={item.image} />
      <h1 className="card-name">{item.name}</h1>
      <p>{!item.price ? "Free" : "$" + item.price}</p>
      <Link href={"/id"}>Buy</Link>
    </div>
  );
};
