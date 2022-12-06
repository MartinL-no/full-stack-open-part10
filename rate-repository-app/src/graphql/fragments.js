import gql from 'graphql-tag';

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
    url
  }
`;