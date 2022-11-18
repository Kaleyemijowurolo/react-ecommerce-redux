import { SearchContainer } from "./search.styles";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <SearchContainer>
      <input />
      <div>
        <AiOutlineSearch size={"20px"} />
      </div>
    </SearchContainer>
  );
};

export default Search;
