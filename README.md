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

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.) or locally.

To host locally, run 
```
$ docker build . -t website && docker run -p 80:80 website
```
