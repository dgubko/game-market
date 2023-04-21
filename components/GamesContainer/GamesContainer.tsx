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
    return !query.search || item.name.toLowerCase().includes(query.search);
  });

  const sorted = [...filtered].sort((a, b) => {
    const key = query.filter as keyof typeof a;
    const ancCondition = a[key] > b[key];
    const decCondition = a[key] < b[key];
    const condition = query.reversed === "true" ? decCondition : ancCondition;

    return condition ? 1 : -1;
  });

  return (
    <div className="game-container">
      {isLoading && <p>loading....</p>}
      {errorMsg && <p>errorMsg</p>}
      {(query.filter ? sorted : filtered).map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
