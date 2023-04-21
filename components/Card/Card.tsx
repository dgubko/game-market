import Link from "next/link";

export const Card = (item) => {
  const hasSalePrice = item.salePrice < item.price;
  return (
    <div className="card">
      <div className="card-image">
        <img src={item.image} alt={`${item.name} poster`} />
      </div>
      <div className="card-description">
        <h4 className="card-name">{item.name}</h4>
      </div>
      <div className="card-footer">
        <span>
          <p className={hasSalePrice ? "on-sale" : ""}>
            {!item.price ? "Free" : "$" + item.price}
          </p>
          {hasSalePrice && <p>${item.salePrice}</p>}
        </span>
        <Link className="buy-button" href={"/id"}>
          Buy
        </Link>
      </div>
    </div>
  );
};
