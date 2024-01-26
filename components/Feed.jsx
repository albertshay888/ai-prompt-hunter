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
  const [posts, setPosts] = useState([]);
  const [searchPostData, setSearchPostData] = useState([]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    const search = e.target.value;
    if (search !== "") {
      setSearchPostData(
        posts.filter(
          (post) =>
            post?.prompt?.toLowerCase()?.includes(search?.toLowerCase()) ||
            post?.tag?.toLowerCase()?.includes(search?.toLowerCase()) ||
            post?.creator?.username?.toLowerCase()?.includes(search?.toLowerCase())
        )
      );
    }
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    setSearchPostData(
      posts.filter((post) => {
        return post.tag.toLowerCase().includes(tagName);
      })
    );
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      {/* <form className="relative w-full flex-center"> */}
      <input
        type="text"
        placeholder="Search for a tag or a username"
        value={searchText}
        onChange={handleSearchChange}
        className="search_input peer"
      />
      {/* </form> */}
      <PromptCardList
        data={searchText ? searchPostData : posts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;