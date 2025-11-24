# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/a9d50c10-e028-4015-9497-8c48225571e1

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a9d50c10-e028-4015-9497-8c48225571e1) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a9d50c10-e028-4015-9497-8c48225571e1) and click on Share -> Publish.

## Live Reviews Integration

The Discord bot now streams reviews (designer and general channel reviews) to the React site in real time using Server-Sent Events (SSE).

### Environment Variable
Add an environment variable in your front-end `.env` (or `.env.local`) pointing to the running bot API:

```
VITE_REVIEWS_API_BASE=https://your-bot-domain-or-ip:4000
```

### Running Locally

Open two terminals or run as a single process (bot + API already integrated):

```sh
# Install dependencies at project root
npm install

# Start Vite dev server for the React front-end
npm run dev

# In another terminal start the Discord bot (includes reviews API on port 4000)
node feedback-bot-main/index.js
```

Visit `http://localhost:5173/reviews` to see live updates. The bot exposes:

- `GET /api/reviews` unified list
- `GET /api/reviews/stream` SSE stream providing initial snapshot + incremental events

### Production Hosting

1. Host the bot (and built reviews API) on a VPS/Node host exposing port 4000 (or set `REVIEWS_PORT`).
2. Deploy the built front-end (e.g. Vercel, Netlify). Ensure `VITE_REVIEWS_API_BASE` points to the bot server.
3. Configure Discord channel ID in `feedback-bot-main/config.json` as `reviewChannelId` for general text reviews.
4. Designer reviews are created via the `/review` slash command.

### Security Notes

- The API currently allows public read of reviews; if you need to restrict access add auth middleware.
- CORS is set to `*`. Adjust in `feedback-bot-main/index.js` for production.

### Extending

- Add pagination by modifying `/api/reviews`.
- Store usernames alongside IDs for historical consistency.
- Add deletion endpoints guarded by a secret token.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
