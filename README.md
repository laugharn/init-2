# Init

This repository is a starter for quickly spinning up a Next.js app that takes advantage of the Vercel ecosystem.

## Up and Running

To start using init, simply run `pnpx create-next-app <project-directory> -e https://github.com/vercel/init` and create-next-app handles the provisioning. Then you can use `pnpm run dev` to get a site going at https://localhost:3000

> [!WARNING]
> By default, `dev` uses `--experimental-https` which will self-sign a certificate and run on https://localhost:3000 instead of http://localhost:3000. This can maybe cause some DNS caching issues if you go back and use standard http on another project. If this sounds annoying, you can use `pnpm run dev:http` instead.
