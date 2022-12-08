import { gql } from '@apollo/client';

import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query GetRepositories($first: Int, $after: String, $orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String) {
    repositories(first: $first, after: $after, orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword) {
      totalCount
      edges {
        node {
          ...RepositoryDetails
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query GetRepository($repositoryId: ID!){
    repository(id: $repositoryId) {
      ...RepositoryDetails,
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_REVIEWS = gql`
  query GetReviews($repositoryId: ID!, $first: Int, $after: String){
    repository(id: $repositoryId) {
      id
      fullName
      reviews(first: $first, after: $after) {
        totalCount
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;