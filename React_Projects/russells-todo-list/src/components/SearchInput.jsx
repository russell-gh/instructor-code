const SearchInput = ({ onInput }) => {
  return (
    <div className="searchInput">
      <label for="search">Filter todos: </label>
      <input onInput={onInput} type="text" id="search" name="search" />
    </div>
  );
};

export default SearchInput;
