# Redux Toolkit Tutorial 🚀

A React + TypeScript project demonstrating modern state management using **Redux Toolkit** and **React Redux**.

This repository focuses on understanding Redux Toolkit concepts with a strongly typed React application built using Vite, including store configuration, slices, reducers, actions, selectors, and connecting React components with global state.

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- CSS

### State Management

- Redux Toolkit
- React Redux

### Development Tools

- npm
- Git

---

# 📌 Project Overview

As React applications grow, managing shared state across multiple components becomes challenging.

This project demonstrates how Redux Toolkit provides a predictable and scalable approach for managing application state while TypeScript improves type safety and developer experience.

The project covers:

- Redux store configuration
- Type-safe state management
- Creating slices
- Actions and reducers
- Dispatching actions
- Selecting state using selectors
- Connecting React components with Redux

---

# 🧠 Redux Mental Model

Think of Redux as a centralized application memory.

Without Redux:

```
Component A

    ↓

Component B
```

Sharing state between components becomes difficult.

With Redux:

```
              Redux Store

                  |

        ---------------------

        |                   |

   Component A        Component B
```

Components can access shared state through a single source of truth.

---

# 🔄 Redux Data Flow

Redux follows a predictable one-way data flow:

```
User Interaction

        ↓

dispatch(action)

        ↓

Reducer processes action

        ↓

Redux Store updates state

        ↓

useSelector reads updated state

        ↓

React component re-renders
```
---

# ⚛️ React + Redux Architecture

```
React Component

        |

        ↓

useDispatch()

        |

        ↓

Redux Action

        |

        ↓

Reducer

        |

        ↓

Redux Store

        |

        ↓

useSelector()

        |

        ↓

Updated UI
```

---

# 🔷 TypeScript with Redux Toolkit

TypeScript provides:

- Type safety
- Better autocomplete
- Fewer runtime errors
- Better developer experience

Common Redux TypeScript patterns:

## Root State Type

```typescript
export type RootState = ReturnType<
  typeof store.getState
>;
```

---

## Dispatch Type

```typescript
export type AppDispatch =
  typeof store.dispatch;
```

---

# Redux Toolkit Advantages

Traditional Redux required:

```
actions.js

reducers.js

constants.js

store.js
```

Redux Toolkit provides:

```
createSlice()

configureStore()

Automatic action creators

Less boilerplate

Better TypeScript support
```

---

# Local State vs Redux State

## Local State

Example:

```typescript
const [count, setCount] = useState(0);
```

Use for:

- Component-specific data
- Forms
- Toggles
- Temporary UI state

---

## Redux State

Use for:

- Shared application data
- Authentication
- Shopping carts
- User preferences
- Complex application state

---

# ▶️ Getting Started

## Clone Repository

```bash
git clone varunDarshan356/redux-toolkit

cd redux-toolkit
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```
