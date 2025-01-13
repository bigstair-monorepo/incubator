# Installation

```sh
git clone git@github.com:bigstair-monorepo/monorepo.git bigstair-monorepo
cd bigstair-monorepo
yarn install
yarn dev
```

Add apps to `apps` directory:

```sh
cd apps
git clone git@github.com:bigstair-monorepo/app-vite-ts.git
git clone git@github.com:bigstair-monorepo/app-vite-js.git
cd ..
yarn install
yarn dev
```