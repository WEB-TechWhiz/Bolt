# Bolt.newer

Bolt.newer is a full-stack AI coding workspace inspired by browser-based sandbox IDEs. It lets a user describe an application, sends the prompt to an LLM-backed API, turns the model response into file operations, and renders generated web apps inside a WebContainer-powered browser preview.

## Project Structure

```text
.
├── be/                 # Express + TypeScript API
│   ├── src/            # API routes, prompts, defaults
│   ├── package.json
│   └── tsconfig.json
├── frontend/           # Vite + React + TypeScript app
│   ├── src/            # Pages, components, hooks, parser, types
│   ├── package.json
│   └── vite.config.ts
├── .gitignore
├── README.md
└── Bolt.zip            # Complete source archive
```

## Technology Stack

| Layer | Tools |
| --- | --- |
| Frontend | Vite, React 18, TypeScript, Tailwind CSS, Monaco Editor, Lucide React |
| Browser sandbox | `@webcontainer/api`, Axios, XML parsing |
| Backend | Node.js, Express, TypeScript |
| LLM provider | Anthropic SDK |

## Getting Started

### Prerequisites

- Node.js 18 or newer
- An Anthropic API key

### Backend

```bash
cd be
npm install
```

Create `be/.env` from the example:

```env
ANTHROPIC_API_KEY=your_key_here
```

Run the API server:

```bash
npm run dev
```

The backend listens on `http://localhost:3000`.

### Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL printed in the terminal. The frontend is configured to call the backend at `http://localhost:3000`.

## Notes

- The previous nested `bolt.newer` Git repository has been flattened so GitHub tracks the real `be/` and `frontend/` folders directly.
- Generated folders such as `node_modules`, `dist`, and local `.env` files are ignored.
- `Bolt.zip` is regenerated from the complete source tree, excluding Git metadata, dependencies, and build output.
