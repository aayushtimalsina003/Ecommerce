import { debounce, TextField } from "@mui/material";
import { useAppSelector } from "../../app/store/store";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "./catelogSlice";
import { useEffect, useState } from "react";

export default function Search() {
  const { searchTerm } = useAppSelector((state) => state.catelog);
  const dispatch = useDispatch();
  const [term, setTerm] = useState(searchTerm);

  useEffect(() => {
    setTerm(searchTerm);
  }, [searchTerm]);

  const debouncedSearch = debounce((event) => {
    dispatch(setSearchTerm(event.target.value));
  }, 500);

  return (
    <TextField
      label="Search Products"
      variant="outlined"
      fullWidth
      type="search"
      value={term}
      onChange={(e) => {
        setTerm(e.target.value);
        debouncedSearch(e);
      }}
    />
  );
}
