# Render ATL: Netlify + WorkOS Code Challenge 🚀

The challenge, should you choose to accept:

Use AuthKit to add authentication to this full-stack React Router application. Your app should allow users to register for a new account and log in using the following methods:

- Email + password
- Google OAuth
- GitHub OAuth

Good luck!

## Initial set-up

1. Ensure you are using Node 22 or higher. The project will be deployed to Netlify using Node 22, so we recommend using the same version in development.
2. Clone this repo and run `npm install`
3. Run `npm run copy-env` to generate a `.env` file based on `.env.example`
4. Create a [new WorkOS account](https://signin.workos.com/sign-up). If you already have an account you'd like to use you can [sign-in](https://signin.workos.com).
5. Go to your [WorkOS dashboard](https://dashboard.workos.com/)
6. Under the Quick start section, copy the `WORKOS_CLIENT_ID` and `WORKOS_API_KEY` values and update the corresponding values in `.env`
7. In your terminal, run `openssl rand -base64 32` to generate a random secret; copy this value and set `WORKOS_COOKIE_PASSWORD` in `.env`
8. Run the app with `npm run dev`

> NOTE: You may encounter the following error when running `npm run dev`:
>
> ```
> TypeError: Cannot read properties of null (reading 'useContext')
> ```
>
> This is a bug in React Router that typically occurs on the first run. You can
> refresh the page and the error will go away.

## Building for Production

Create a production build:

```bash
npm run build
```

## Previewing a Production build

To preview a production build locally, use the [Netlify CLI](https://cli.netlify.com):

```bash
npx netlify-cli serve
```

```bash
npm run build
```

## Deployment

This template is pre-configured for deployment to Netlify.

Follow <https://docs.netlify.com/welcome/add-new-site/> to add this project as a site
in your Netlify account.

## See also

- [`@workos-inc/authkit-react-router` docs](https://www.npmjs.com/package/@workos-inc/authkit-react-router)
- [`@workos/mcp-docs-server` docs](https://www.npmjs.com/package/@workos/mcp-docs-server)
- [WorkOS User Management docs](https://workos.com/docs/user-management/overview)
- [Deploy a React Router 7 site to Netlify](https://developers.netlify.com/guides/how-to-deploy-a-react-router-7-site-to-netlify/)
