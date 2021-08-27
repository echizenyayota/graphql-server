const {gql} = require('apollo-server');

const typeDefs = gql`

  type Query {
    posts(query: String): [Post!]!
  }

  type Mutation {
    createPost(data: CreatePostInput!): Post!
    deletePost(id: ID!): Post!
    updatedPost(id: ID!, data: UpdatePostInput): Post!
  }

  # サブスクリプション
  type Subscription {
    post: PostSubscriptionPayload!
  }

  input CreatePostInput {
    title: String!
    author: String!
  }

  input UpdatedPostInput {
    title: String
    author: String!
  }

  type Post {
    id: ID!
    title: String!
    author: String!
  }

  enum Mutation Type {
    CREATED
    UPDATED
    DELETED
  }

  # サブスクリプションのフィールド
  type PostSubscriptionPayLoad {
    mutation: MutationType!
    data: Post!
  }

`

module.exports = typeDefs;



