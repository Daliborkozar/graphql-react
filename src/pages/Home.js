import React from "react";
import { useQuery, gql } from "@apollo/client";
import { QueryResult } from "../components/QueryResults";
import PostDetail from "./PostDetail";

const Home = () => {
    
  const ALLPOSTS = gql`
    query Allposts {
      getAllPosts {
        id
        title
        description
      }
    }
  `;

  const { loading, error, data } = useQuery(ALLPOSTS);
  console.log(data);
  return (
    <div>
      <h1>Home Page</h1>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.getAllPosts?.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.description}</p>
          </div>
        ))}
      </QueryResult>
     <PostDetail />
    </div>
  );
};

export default Home;
