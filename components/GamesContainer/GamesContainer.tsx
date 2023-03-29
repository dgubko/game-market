import React from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Card } from "../Card/Card";

export const GamesContainer = () => {
  const [games, setGames] = React.useState([]);
  const [errorMsg, setErrorMsg] = React.useState("");

  const {} = useSWR<any>(`/api/game`, fetcher, {
    onSuccess: (data) => {
      setErrorMsg("");
      setGames(data.games);
    },
    onError: (err) => setErrorMsg(err.message),
  });
  console.log(games);
  return (
    <div className="game-container">
      {games.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
