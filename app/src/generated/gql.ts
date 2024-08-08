/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetMoodsQuery {\n  getMoods {\n    date\n    entry_id\n    mood\n  }\n}": types.GetMoodsQueryDocument,
    "query LoginQuery($email: String!, $password: String!) {\n  loginUser(email: $email, password: $password)\n}": types.LoginQueryDocument,
    "mutation PostMoodMutation($mood: Int!) {\n  postMood(mood: $mood) {\n    mood\n    user_id\n  }\n}": types.PostMoodMutationDocument,
    "mutation PostUserMutation($email: String!, $password: String!) {\n  postUser(email: $email, password: $password)\n}": types.PostUserMutationDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetMoodsQuery {\n  getMoods {\n    date\n    entry_id\n    mood\n  }\n}"): (typeof documents)["query GetMoodsQuery {\n  getMoods {\n    date\n    entry_id\n    mood\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query LoginQuery($email: String!, $password: String!) {\n  loginUser(email: $email, password: $password)\n}"): (typeof documents)["query LoginQuery($email: String!, $password: String!) {\n  loginUser(email: $email, password: $password)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation PostMoodMutation($mood: Int!) {\n  postMood(mood: $mood) {\n    mood\n    user_id\n  }\n}"): (typeof documents)["mutation PostMoodMutation($mood: Int!) {\n  postMood(mood: $mood) {\n    mood\n    user_id\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation PostUserMutation($email: String!, $password: String!) {\n  postUser(email: $email, password: $password)\n}"): (typeof documents)["mutation PostUserMutation($email: String!, $password: String!) {\n  postUser(email: $email, password: $password)\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;