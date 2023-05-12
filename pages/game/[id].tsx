import { SidePanel } from "@/components/SidePanel/SidePanel";
import Head from "next/head";
import PageLayout from "@/components/PageLayout/PageLayout";

const GamePage = ({ game }) => {
  console.log(game);
  const hasSalePrice = game.salePrice < game.price;

  return (
    <>
      <Head>
        <title>{game.name}</title>
        <meta name="description" content={game.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <div className="game-page">
          <div id="banner">
            <img className="game-page-image" src={game.image} />
            <div className="game-info">
              <h1>{game.name}</h1>
              <div>
                <span>
                  <p className={hasSalePrice ? "on-sale" : ""}>
                    {!game.price ? "Free" : "$" + game.price}
                  </p>
                  {hasSalePrice && <p>${game.salePrice}</p>}
                </span>
                <button className="buy-button">Buy</button>
              </div>
            </div>
          </div>
          <div id="about">
            <h2>About this game</h2>
            {game.genre.split(", ").map((genre) => (
              <p className="genre-pill">{genre}</p>
            ))}
            <p>{game.description}</p>
            <h3>Developed by:</h3>
            <p>{game.developer}</p>
          </div>
          <div id="requirements">
            <h2>System Requirements</h2>
            <h3>Minimal system requirements</h3>
            <ul>
              {game.minSystemReq.split("; ").map((req) => (
                <li>{req}</li>
              ))}
            </ul>
            {game.recSystemReq && (
              <>
                <h3>Recommended system requirements</h3>
                <ul>
                  {game.recSystemReq.split("; ").map((req) => (
                    <li>{req}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div id="reviews">
            <h2>Reviews</h2>
            <p>No reviews yet</p>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id: gameId } = context.query;
  const res = await fetch(`http://localhost:3000/api/game/${gameId}`);
  const { game } = await res.json();

  return {
    props: { game },
  };
}

export default GamePage;
