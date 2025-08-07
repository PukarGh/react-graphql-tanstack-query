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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation IncrementTrackViews($incrementTrackViewsId: ID!) {\n    incrementTrackViews(id: $incrementTrackViewsId) {\n      code\n      success\n      message\n      track {\n        id\n        numberOfViews\n      }\n    }\n  }\n": typeof types.IncrementTrackViewsDocument,
    "\nquery GetTrack($trackId: ID!) {\n  track(id: $trackId) {\n    id\n    title\n    author {\n      id\n      name\n      photo\n    }\n    thumbnail\n    length\n    modulesCount\n    description\n    numberOfViews\n    modules {\n      id\n      title\n      length\n      content\n      videoUrl\n    }\n  }\n}\n": typeof types.GetTrackDocument,
    "\nquery TracksForHome {\n  tracksForHome {\n    id\n    title\n    thumbnail\n    length\n    modulesCount\n    author {\n      id  \n      name\n      photo\n    }\n  }\n}\n": typeof types.TracksForHomeDocument,
};
const documents: Documents = {
    "\n  mutation IncrementTrackViews($incrementTrackViewsId: ID!) {\n    incrementTrackViews(id: $incrementTrackViewsId) {\n      code\n      success\n      message\n      track {\n        id\n        numberOfViews\n      }\n    }\n  }\n": types.IncrementTrackViewsDocument,
    "\nquery GetTrack($trackId: ID!) {\n  track(id: $trackId) {\n    id\n    title\n    author {\n      id\n      name\n      photo\n    }\n    thumbnail\n    length\n    modulesCount\n    description\n    numberOfViews\n    modules {\n      id\n      title\n      length\n      content\n      videoUrl\n    }\n  }\n}\n": types.GetTrackDocument,
    "\nquery TracksForHome {\n  tracksForHome {\n    id\n    title\n    thumbnail\n    length\n    modulesCount\n    author {\n      id  \n      name\n      photo\n    }\n  }\n}\n": types.TracksForHomeDocument,
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
export function gql(source: "\n  mutation IncrementTrackViews($incrementTrackViewsId: ID!) {\n    incrementTrackViews(id: $incrementTrackViewsId) {\n      code\n      success\n      message\n      track {\n        id\n        numberOfViews\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation IncrementTrackViews($incrementTrackViewsId: ID!) {\n    incrementTrackViews(id: $incrementTrackViewsId) {\n      code\n      success\n      message\n      track {\n        id\n        numberOfViews\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetTrack($trackId: ID!) {\n  track(id: $trackId) {\n    id\n    title\n    author {\n      id\n      name\n      photo\n    }\n    thumbnail\n    length\n    modulesCount\n    description\n    numberOfViews\n    modules {\n      id\n      title\n      length\n      content\n      videoUrl\n    }\n  }\n}\n"): (typeof documents)["\nquery GetTrack($trackId: ID!) {\n  track(id: $trackId) {\n    id\n    title\n    author {\n      id\n      name\n      photo\n    }\n    thumbnail\n    length\n    modulesCount\n    description\n    numberOfViews\n    modules {\n      id\n      title\n      length\n      content\n      videoUrl\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery TracksForHome {\n  tracksForHome {\n    id\n    title\n    thumbnail\n    length\n    modulesCount\n    author {\n      id  \n      name\n      photo\n    }\n  }\n}\n"): (typeof documents)["\nquery TracksForHome {\n  tracksForHome {\n    id\n    title\n    thumbnail\n    length\n    modulesCount\n    author {\n      id  \n      name\n      photo\n    }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;