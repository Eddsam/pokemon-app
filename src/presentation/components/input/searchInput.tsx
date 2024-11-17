import { Clear, FilterAlt } from "@mui/icons-material";
import { InputAdornment, IconButton, TextField } from "@mui/material";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearField: () => void;
  value: string;
}

export const SearchInput = ({ value, onClearField, onChange }: Props) => {
  return (
    <TextField
      fullWidth
      value={value}
      sx={{ backgroundColor: "white", borderRadius: 1, marginBottom: 1 }}
      autoComplete="on"
      onChange={onChange}
      slotProps={{
        input: {
          endAdornment: (
            <>
              <InputAdornment position="end">
                <FilterAlt />
              </InputAdornment>
              <InputAdornment position="end">
                <IconButton
                  aria-label="Limpiar texto de busqueda"
                  onClick={onClearField}
                  edge="end"
                >
                  <Clear />
                </IconButton>
              </InputAdornment>
            </>
          ),
        },
      }}
    />
  );
};
