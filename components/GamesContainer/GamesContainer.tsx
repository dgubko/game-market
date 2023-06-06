import React from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Card } from "../Card/Card";
import { useRouter } from "next/router";

const Skeleton = () => (
  <div className="skeleton cards">
    {Array.from({ length: 8 }).map((_, i) => (
      <div className="load-card" key={i}>
        <div className="line image" />
        <div className="line title" />
        <div className="line desc" />
        <div className="line button" />
      </div>
    ))}
  </div>
);

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
    <>
      {isLoading && <Skeleton />}
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      <div className="game-container">
        {(query.filter ? sorted : filtered).map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
