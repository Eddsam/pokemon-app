import { Typography } from "@mui/material";

interface ITypes {
  [key: string]: string | undefined;
}

const types: ITypes = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export const TypeBadge = ({ type }: { type: string }) => {
  const color = types[type];
  return (
    <Typography
      sx={{
        backgroundColor: color,
        borderRadius: 5,
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 1,
        paddingBottom: 1,
        width: "fit-content",
      }}
    >
      {type}
    </Typography>
  );
};
