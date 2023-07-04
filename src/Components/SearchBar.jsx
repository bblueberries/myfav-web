import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router";

const topics = [
  "Lord of the mysteries",
  "Omniscient reader's viewpoint",
  "Classroom of the elite",
]; // list of topics
const destination = {
  [topics[0]]: "/novel/lotm",
  [topics[1]]: "/novel/orv",
  [topics[2]]: "/novel/cote",
};

console.log(destination["Lord of the mysteries"]);
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: grey[400],
  "&:hover": {
    backgroundColor: grey[300],
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: grey[600],
  "&:hover": {
    backgroundColor: grey[500],
  },
  width: "100%",
  padding: theme.spacing(1, 1),
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  top: theme.spacing(5, 5),
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [searchText, setSearchText] = React.useState(""); // State to hold the search text
  const [searchResults, setSearchResults] = React.useState([]); // State to hold the search results

  const handleSearch = (event) => {
    const text = event.target.value;
    setSearchText(text);

    // Perform the search logic here
    const filteredTopics = topics.filter((topic) => {
      const lowercaseTopic = topic.toLowerCase();
      const lowercaseText = text.toLowerCase();

      // Check if the first letter of the topic matches the user's input
      if (lowercaseTopic.startsWith(lowercaseText)) {
        return true;
      }

      return false;
    });

    setSearchResults(filteredTopics);
  };
  const navigate = useNavigate();
  return (
    <Grid container sx={{ position: "absolute", zIndex: "1" }}>
      <Grid item>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={searchText}
            onChange={handleSearch}
          />

          {searchResults.length > 0 && searchText.length > 0 && (
            <Grid container direction={"column"} px={2}>
              {searchResults.map((result) => (
                <Grid item key={result} my={1}>
                  <CustomButton onClick={() => navigate(destination[result])}>
                    {result}
                  </CustomButton>
                </Grid>
              ))}
            </Grid>
          )}
        </Search>
      </Grid>
    </Grid>
  );
}
