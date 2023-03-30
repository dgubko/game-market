import Link from "next/link";

export const Card = (item) => {
  return (
    <div className="card">
      <img className="card-image" src={item.image} />
      <div className="card-description">
        <h1 className="card-name">{item.name}</h1>
        <div className="price-block">
          <p>{!item.price ? "Free" : "$" + item.price}</p>
          <Link className="buy-button" href={"/id"}>
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};
