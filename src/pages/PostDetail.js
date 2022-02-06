import React from "react";
import { useQuery, gql } from "@apollo/client";
import { QueryResult } from "../components/QueryResults";

const PostDetail = () => {
  const POSTDETAILS = gql`
    query GetSinglePost($getSinglePostId: ID) {
      getSinglePost(id: $getSinglePostId) {
        id
        title
        description
      }
    }
  `;

  const getSinglePostId = "61fff15d8305a630fff21b33";

  const { loading, error, data } = useQuery(POSTDETAILS, {
    variables: { getSinglePostId },
  });

  console.log(data);

  return (
    <div>
      <QueryResult error={error} loading={loading} data={data}>
        <h1>nesto</h1>
      </QueryResult>
    </div>
  );
};

export default PostDetail;
