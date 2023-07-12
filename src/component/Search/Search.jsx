import React, { useState } from "react";
import "./Search.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useNavigate } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
  if (!query.length) {
    data = null;
  }

  return (
    <div>
      <div className="overlay_search" onClick={() => setShowSearch(false)}></div>
      <div className="search_model">
        <div className="form_field">
          <input type="search" autoFocus placeholder="search for products" value={query} onChange={onChange} />
          <CloseOutlinedIcon className="close_btn" onClick={() => setShowSearch(false)} />
        </div>
        {query && (
          <div className="search_result_content">
            <div className="search_results">
              {data?.data?.length > 0 ? (
                data?.data?.map(item => (
                  <div key={item.id} className="search_result_items" onClick={() => {
                    navigate('/product/' + item.id);
                    setShowSearch(false);
                  }}>
                    <div className="img_container">
                      <img src={item.attributes.img.data[0].attributes.url} alt="" />
                    </div>
                    <div className="prod_details search_prod">
                      <span className="name">{item.attributes.title}</span>
                      <span className="price" style={{fontSize:'18px',display:'block'}}>₹ {item.attributes.price}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no_results_found">No results found.</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
