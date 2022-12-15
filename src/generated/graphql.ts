import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  hello?: Maybe<Scalars['String']>;
};


export type MutationHelloArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllAuthors?: Maybe<Array<Maybe<Author>>>;
};


export type QueryGetAllAuthorsArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type Author = {
  __typename?: 'author';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GetAllAuthorsQueryQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllAuthorsQueryQuery = { __typename?: 'Query', getAllAuthors?: Array<{ __typename?: 'author', id?: number | null, email?: string | null, name?: string | null, image?: string | null } | null> | null };


export const GetAllAuthorsQueryDocument = gql`
    query getAllAuthorsQuery($limit: Int, $cursor: Int) {
  getAllAuthors(limit: $limit, cursor: $cursor) {
    id
    email
    name
    image
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAllAuthorsQuery(variables?: GetAllAuthorsQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllAuthorsQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllAuthorsQueryQuery>(GetAllAuthorsQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllAuthorsQuery', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;