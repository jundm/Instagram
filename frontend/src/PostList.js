import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "Post";

const apiUrl = "http://localhost:8000/api/posts/";

function PostList() {
  const [postList, setPostList] = useState([]); //빈리스트를 넣어 postList && postList.map 체크과정을 생략
  useEffect(() => {
    Axios.get(apiUrl)
      .then((response) => {
        const { data } = response; //axios 리스폰스에서 데이터만 받기
        console.log("loaded response: ", response);
        setPostList(data);
      })
      .catch((error) => {
        // error.response;
      });
    console.log("mounted");
  }, []);

  return (
    <div>
      <h2>PostList</h2>
      {postList.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
}

export default PostList;
