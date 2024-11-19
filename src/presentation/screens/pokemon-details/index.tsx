import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import { useDetailView } from "./useDetailsView";
import { capitalizeFirstLetter } from "../../../domain/useCases/formatText";
import { TypeBadge } from "../../components/typeColor";
import { PokeSpinner } from "../../components/spinner";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import defaultImage from "../../assets/missigno.png";

export const PokemonDetails = () => {
  const { isLoading, pokemon, previousPokemon, nextPokemon } = useDetailView();
  const pokemonName = `#${pokemon?.id ?? "0"} ${capitalizeFirstLetter(
    pokemon?.name ?? "Missigno"
  )}`;
  return (
    <Grid2 container display={"flex"} direction={"column"}>
      <Button
        variant="contained"
        color="primary"
        href="/"
        sx={{ alignSelf: "center" }}
      >
        Volver a la Pokédex
      </Button>
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
          <Grid2
            container
            display={"flex"}
            direction={"row"}
            alignItems={"center"}
          >
            <Grid2>
              {previousPokemon && (
                <IconButton
                  href={previousPokemon}
                  size="large"
                  sx={[arrowsStyles.arrowLeft]}
                >
                  <ArrowBackIosNew color="primary" fontSize="large" />
                </IconButton>
              )}
            </Grid2>
            <Card elevation={5} sx={{ width: 500, height: 800 }}>
              <CardHeader title={pokemonName} />
              <Divider />
              <CardMedia
                component="img"
                width={450}
                height={450}
                image={
                  pokemon?.sprites.other?.["official-artwork"].front_default ??
                  defaultImage
                }
                src={
                  pokemon?.sprites.other?.["official-artwork"].front_default ??
                  defaultImage
                }
                title={pokemon?.name}
                sx={{ backgroundColor: "#e3e3e3" }}
              />
              <Divider />
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
            <Grid2>
              {nextPokemon && (
                <IconButton
                  href={nextPokemon}
                  size="large"
                  sx={[arrowsStyles.arrowRight]}
                >
                  <ArrowForwardIos color="primary" fontSize="large" />
                </IconButton>
              )}
            </Grid2>
          </Grid2>
        )}
      </Grid2>
    </Grid2>
  );
};

const arrowsStyles = {
  arrowLeft: {
    right: -15,
    backgroundColor: "#FFF",
    // BorderColor: "#000000",
    border: 1,
    "&:hover": {
      background: "#efefef",
    },
  },
  arrowRight: {
    left: -15,
    // backgroundColor: "#e3e3e3",
    backgroundColor: "#FFF",
    border: 1,
    "&:hover": {
      background: "#efefef",
    },
  },
};
