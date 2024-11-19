import { SearchInput } from "../../components/input/searchInput";
import PaginationControlled from "../../components/pagination";
import { useHomeView } from "./useHomeView";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid2,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export const Home = () => {
  const {
    numberOfPages,
    list,
    page,
    handleChangePage,
    textFilters,
    handleOnChange,
    handleOnClearField,
  } = useHomeView();

  return (
    <Grid2
      container
      sx={{
        marginTop: "10vh",
      }}
    >
      <Grid2 size={{ xs: 12, md: 6 }} offset={{ md: 3 }}>
        <SearchInput
          value={textFilters}
          onChange={handleOnChange}
          onClearField={handleOnClearField}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }} offset={{ md: 3 }} textAlign={"center"}>
        <Card elevation={5}>
          <CardHeader title="Pokédex" />
          <Divider />
          <CardContent>
            <List sx={{ height: "50vh", overflow: "auto", padding: "0px" }}>
              {list.map((item) => (
                <ListItemButton
                  key={item.name}
                  href={`/pokemon-details/${window.btoa(item.url)}`}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              ))}
            </List>
          </CardContent>
          <Divider />
          <CardActions>
            <PaginationControlled
              count={numberOfPages}
              page={page}
              handleChange={handleChangePage}
            />
          </CardActions>
        </Card>
      </Grid2>
    </Grid2>
  );
};
