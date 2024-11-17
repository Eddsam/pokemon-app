import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import { useDetailView } from "./useDetailsView";
import { capitalizeFirstLetter } from "../../../domain/useCases/formatText";
import { TypeBadge } from "../../components/typeColor";
import { PokeSpinner } from "../../components/spinner";

export const PokemonDetails = () => {
  const { isLoading, pokemon } = useDetailView();

  return (
    <Grid2
      container
      spacing={0}
      display={"flex"}
      direction={"column"}
      alignContent={"center"}
      sx={{ marginTop: "5vh" }}
    >
      {isLoading ? (
        <PokeSpinner />
      ) : (
        <Card elevation={5} sx={{ maxWidth: 500 }}>
          <CardHeader
            title={capitalizeFirstLetter(pokemon?.name ?? "Missigno")}
          />
          <CardMedia
            component="img"
            image={pokemon?.sprites.other?.["official-artwork"].front_default}
            src={pokemon?.sprites.other?.["official-artwork"].front_default}
            title={pokemon?.name}
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {pokemon?.abilities.map((ability) => (
                <Typography
                  key={ability.ability.name}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {ability.ability.name}
                  {ability.is_hidden && (
                    <>
                      {" "}
                      <Typography variant="caption">
                        (Hidden Ability)
                      </Typography>
                    </>
                  )}
                </Typography>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 1,
              }}
            >
              {pokemon?.types.map((type) => (
                <TypeBadge key={type.type.name} type={type.type.name} />
              ))}
            </Box>
          </CardContent>
        </Card>
      )}
    </Grid2>
  );
};
