import Head from "next/head";

const GamePage = ({ game }) => {
  console.log(game);
  return (
    <>
      <Head>
        <title>{game.name}</title>
        <meta name="description" content={game.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="game-page">
        <p>{game.name}</p>
        <img className="game-page-image" src={game.image} />
        <p>{game.genre}</p>
        <p>{game.description}</p>
        <p>{game.developer}</p>
        <p>{game.minSystemReq}</p>
      </div>
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
