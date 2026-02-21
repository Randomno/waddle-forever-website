# waddle-forever-website

The main website for Waddle Forever built in Svelte.

## How to run locally

1. Install dependencies

```sh
npm install
```

2. Create the `version-cache` file at the root of the repository. Should be in the format of: "1.2.3"

3. Run:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version:

```sh
npm run build
```

Preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
