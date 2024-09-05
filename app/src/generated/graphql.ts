/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type LastMood = {
  __typename?: 'LastMood';
  isFromToday: Scalars['Boolean']['output'];
  mood: Scalars['Int']['output'];
};

export type MoodEntry = {
  __typename?: 'MoodEntry';
  date: Scalars['String']['output'];
  entry_id: Scalars['ID']['output'];
  mood: Scalars['Int']['output'];
  user_id: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  postMood?: Maybe<PostMoodReturn>;
  postUser?: Maybe<Scalars['String']['output']>;
};


export type MutationPostMoodArgs = {
  mood: Scalars['Int']['input'];
};


export type MutationPostUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type PostMoodReturn = {
  __typename?: 'PostMoodReturn';
  mood: Scalars['Int']['output'];
  user_id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  getLastMood?: Maybe<LastMood>;
  getMoods?: Maybe<Array<Maybe<MoodEntry>>>;
  getUser?: Maybe<User>;
  loginUser?: Maybe<Scalars['String']['output']>;
};


export type QueryGetUserArgs = {
  user_id: Scalars['ID']['input'];
};


export type QueryLoginUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  password: Scalars['String']['output'];
  user_id: Scalars['ID']['output'];
};

export type GetMoodsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoodsQueryQuery = { __typename?: 'Query', getMoods?: Array<{ __typename?: 'MoodEntry', date: string, entry_id: string, mood: number } | null> | null };

export type LoginQueryQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginQueryQuery = { __typename?: 'Query', loginUser?: string | null };

export type PostMoodMutationMutationVariables = Exact<{
  mood: Scalars['Int']['input'];
}>;


export type PostMoodMutationMutation = { __typename?: 'Mutation', postMood?: { __typename?: 'PostMoodReturn', mood: number, user_id: string } | null };

export type PostUserMutationMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type PostUserMutationMutation = { __typename?: 'Mutation', postUser?: string | null };


export const GetMoodsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMoodsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMoods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"entry_id"}},{"kind":"Field","name":{"kind":"Name","value":"mood"}}]}}]}}]} as unknown as DocumentNode<GetMoodsQueryQuery, GetMoodsQueryQueryVariables>;
export const LoginQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoginQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<LoginQueryQuery, LoginQueryQueryVariables>;
export const PostMoodMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PostMoodMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mood"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postMood"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"mood"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mood"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mood"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]} as unknown as DocumentNode<PostMoodMutationMutation, PostMoodMutationMutationVariables>;
export const PostUserMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PostUserMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<PostUserMutationMutation, PostUserMutationMutationVariables>;