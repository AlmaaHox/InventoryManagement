
# InventoryManagement
=======

# Inventory Management React App

## How to Run

1. Install dependencies:
	```sh
	npm install
	```
2. Start the development server:
	```sh
	npm run dev
	```


## Features
- Create new job sites with categories
- Search job sites and inventory items
- Update items in each category via modal
- UI updates automatically after changes
- Unit testing included
- Screenshots included

## Security
How might you make this app more secure?
- Use authentication and authorization for user access
- Validate and sanitize all user input
- Use HTTPS in production
- Store sensitive data securely (e.g., environment variables)
- Keep dependencies up to date

## Scalability
How would you make this solution scale to millions of records?
- Use server-side pagination, filtering, and search
- Implement efficient data fetching (e.g., GraphQL, REST with pagination)
- Use a scalable backend (e.g., cloud database, microservices)
- Optimize React rendering (virtualization, memoization)
- Consider caching and CDN for static assets

## Screenshots
Screenshots are included in the `screenshots` folder.

## Packages & Tooling
This project uses the following main packages and tools:

- **React** (`react`, `react-dom`): UI library for building the app
- **Vite** (`vite`, `@vitejs/plugin-react`): Fast dev server and build tool
- **ESLint** (`eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`): Linting and code quality
- **Testing Library** (`@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`): Unit testing utilities for React
- **Vitest** (`vitest`): Test runner
- **jsdom**: DOM emulation for testing
- **TypeScript types** (`@types/react`, `@types/react-dom`): Type support for React (even if not using TypeScript directly)
- **Globals**: Shared global variables for ESLint

All dependencies are listed in `package.json`.

## How to install packages


### Install dependencies
```sh
npm install
```

### Start development server
```sh
npm run dev
```

### Build for production
```sh
npm run build
```

### Run tests
```sh
npm run test
```

### Lint the code
```sh
npm run lint
```



