"use client";
import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [searchedTimeOut, setSearchedTimeOut] = useState(null);
  const [serchedResults, setSearchedResults] = useState([]);
  const handleSearchChange = async (e) => {
    clearTimeout(searchedTimeOut);
    setSearchText(e.target.value);

    setSearchedTimeOut(
      setTimeout(() => {
        const serach = filterProps(e.target.value);
        setSearchedResults(serach);
      }, 500)
    );
  };

  const handleTagClick = (searchText) => {
    setSearchText(searchText);

    const serach = filterProps(searchText);
    setSearchedResults(serach);
  };

  const filterProps = (searchText) => {
    const reg = new RegExp(searchText, "i");
    return allPosts.filter(
      (item) =>
        reg.test(item.creator.username) ||
        reg.test(item.tag) ||
        reg.test(item.prompt)
    );
  };

  const fetchPost = async () => {
    const response = await fetch("/api/prompt", { cache: "no-store" });
    const data = await response.json();

    setAllPosts(data);
    setSearchedResults(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          onChange={handleSearchChange}
          required
          className="search_input peer"
          value={searchText}
        ></input>
      </form>

      <PromptCardList data={serchedResults} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
