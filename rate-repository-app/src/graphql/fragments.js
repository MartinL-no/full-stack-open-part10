import gql from 'graphql-tag';

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id,
    fullName,
    description,
    createdAt
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
    url
  }
`;

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
  }
`;