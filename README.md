# React GraphQL with TanStack Query

A modern React application demonstrating GraphQL integration using TanStack Query (formerly React Query) instead of Apollo Client. This project showcases how to build a performant, type-safe GraphQL client with React.

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Full type safety
- **TanStack Query v5** - Powerful data fetching and caching
- **GraphQL** - Query language for APIs
- **GraphQL Code Generator** - Automatic TypeScript type generation
- **graphql-request** - Lightweight GraphQL client
- **Vite** - Fast build tool and dev server
- **React Router v6** - Client-side routing
- **Emotion** - CSS-in-JS styling

## Features

- **Type-safe GraphQL queries** with automatic TypeScript generation
- **Efficient caching and background updates** via TanStack Query
- **Server state management** with intelligent cache invalidation
- **Optimistic updates** for mutations
- **Loading and error states** handled declaratively
- **Responsive design** with modern UI components

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate GraphQL types:
   ```bash
   npm run generate
   ```
4. Start the development server:
   ```bash
   npm start
   ```

The application will open at `http://localhost:3000`.

## GraphQL Code Generation

This project uses GraphQL Code Generator to automatically create TypeScript types from your GraphQL schema and operations. The generated types ensure type safety between your frontend and GraphQL API.

To regenerate types after modifying GraphQL operations:

```bash
npm run generate
```

## Project Structure

- `src/api/` - GraphQL queries, mutations, and API functions
- `src/types/` - Auto-generated GraphQL TypeScript types
- `src/components/` - Reusable React components
- `src/pages/` - Route-level components
- `src/containers/` - Container components with data fetching logic
