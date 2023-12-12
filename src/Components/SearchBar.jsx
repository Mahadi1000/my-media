import { useNavigate } from "react-router-dom";
import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        display: "flex",
        color:"white",
        alignItems: "center",
        background: " white",
        borderRadius: 24,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        pl: [2, 4, 6], // Responsive padding
        pr: [2, 4, 6], // Responsive padding
        width: "full",
        maxWidth: "96",
        mx: "auto",
      }}
    >
      <InputBase
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          flex: 1,
          ml: [1, 2, 3], // Responsive margin
          fontSize: ["sm", "md", "lg"], // Responsive font size
        }}
      />
      <IconButton
        type="submit"
        sx={{
          py: [1, 1.5, 2], // Responsive padding
          px: [2, 2.5, 3], // Responsive padding
          color: "red",
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
