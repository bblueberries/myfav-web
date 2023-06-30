import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";

const topics = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"]; // Example list of topics

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.2),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
      width: "12ch",
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
    const filteredTopics = topics.filter((topic) =>
      topic.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredTopics);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
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
      {searchText.length > 0 && (
        // <></>
        <Button
          variant="text"
          onClick={clearSearch}
          sx={{ color: "black", fontSize: "9px" }}
          edge="end"
        >
          Clear
        </Button>
      )}
      {/* {searchResults.length > 0 && searchText.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      )} */}
    </Search>
  );
}
