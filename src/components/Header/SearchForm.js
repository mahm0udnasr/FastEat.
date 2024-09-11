import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from "../../context/mealContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { startFetchMealsBySearch } from "../../actions/mealsActions";
const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch, meals } = useMealContext();
  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    setErrorMsg("");
  };
  const handleSearchResult = (e) => {
    if (searchTerm !== "") {
      e.preventDefault();
      navigate("/");
      startFetchMealsBySearch(dispatch, searchTerm);
    }
  };
  return (
    <form
      className="search-form flex align-center"
      onSubmit={(e) => handleSearchResult(e)}
    >
      <input
        type="text"
        className="form-control-input text-dark-gray fs-15"
        placeholder="Search recipes here..."
        value={searchTerm}
        onChange={(e) => handleSearchTerm(e)}
      />
      <button
        type="submit"
        className="form-submit-btn text-white text-uppercase fs-14"
      >
        <BsSearch className="btn-icon" size={20} />
      </button>
    </form>
  );
};

export default SearchForm;
