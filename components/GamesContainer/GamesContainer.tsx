import React from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Card } from "../Card/Card";
import { useRouter } from "next/router";

export const GamesContainer = () => {
  const { query } = useRouter();

  const [games, setGames] = React.useState([]);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const {} = useSWR<any>(`/api/game`, fetcher, {
    onSuccess: (data) => {
      setErrorMsg("");
      setGames(data.games);
      setIsLoading(false);
    },
    onError: (err) => {
      setErrorMsg(err.message);
      setIsLoading(false);
    },
  });

  const filtered = games.filter((item) => {
    return item.name.toLowerCase().includes(query.search);
  });

  return (
    <div className="game-container">
      {isLoading && <p>loading....</p>}
      {errorMsg && <p>errorMsg</p>}
      {filtered.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
