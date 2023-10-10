# Experimental page with Solid SPA and UnoCSS, hosted locally with Docker and Nginx

## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ pnpm install
```

## Development Environment

In the project directory, you can run:
```bash
pnpm run dev
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>


## Deployment

To deploy locally, run 
```
$ docker build . -t website && docker run -p 80:80 website
```
Open [http://localhost](http://localhost) to view it in the browser.

## Limitations
There are a few limitations of this implementation, namely:
- As a library for single page application, SolidJS can reroute users to other pages, but fresh- or re-loading these pages will result in 404 in the self-hosted deployment.
- The self-hosted deployment didn't corectly render a style using attributify preset of SolidJS and UnoCSS, e.g., \<div bg="blue-200"\>.
- This implementation might not scale reliably, use with caution.

## Learnings
After playing around shortly with this tech stack, I recommend beginners to use more mature methods and tech stack to avoid roadblocks. Although this implementation didn't take use of SolidJS features extensively, we can see some developer experience improvements over react. The idea of self-hosting such application is enticing, but there is no easy and reliable way to maintain and scale such deployments. It is not to say that it's impossible, however, it would require more manpower and investigation.
