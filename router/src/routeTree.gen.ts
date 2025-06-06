/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PlayImport } from './routes/play'
import { Route as IndexImport } from './routes/index'
import { Route as ProductPidImport } from './routes/Product.$pid'

// Create Virtual Routes

const ProductsLazyImport = createFileRoute('/Products')()

// Create/Update Routes

const ProductsLazyRoute = ProductsLazyImport.update({
  id: '/Products',
  path: '/Products',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/Products.lazy').then((d) => d.Route))

const PlayRoute = PlayImport.update({
  id: '/play',
  path: '/play',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductPidRoute = ProductPidImport.update({
  id: '/Product/$pid',
  path: '/Product/$pid',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/play': {
      id: '/play'
      path: '/play'
      fullPath: '/play'
      preLoaderRoute: typeof PlayImport
      parentRoute: typeof rootRoute
    }
    '/Products': {
      id: '/Products'
      path: '/Products'
      fullPath: '/Products'
      preLoaderRoute: typeof ProductsLazyImport
      parentRoute: typeof rootRoute
    }
    '/Product/$pid': {
      id: '/Product/$pid'
      path: '/Product/$pid'
      fullPath: '/Product/$pid'
      preLoaderRoute: typeof ProductPidImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/play': typeof PlayRoute
  '/Products': typeof ProductsLazyRoute
  '/Product/$pid': typeof ProductPidRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/play': typeof PlayRoute
  '/Products': typeof ProductsLazyRoute
  '/Product/$pid': typeof ProductPidRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/play': typeof PlayRoute
  '/Products': typeof ProductsLazyRoute
  '/Product/$pid': typeof ProductPidRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/play' | '/Products' | '/Product/$pid'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/play' | '/Products' | '/Product/$pid'
  id: '__root__' | '/' | '/play' | '/Products' | '/Product/$pid'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PlayRoute: typeof PlayRoute
  ProductsLazyRoute: typeof ProductsLazyRoute
  ProductPidRoute: typeof ProductPidRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PlayRoute: PlayRoute,
  ProductsLazyRoute: ProductsLazyRoute,
  ProductPidRoute: ProductPidRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/play",
        "/Products",
        "/Product/$pid"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/play": {
      "filePath": "play.jsx"
    },
    "/Products": {
      "filePath": "Products.lazy.jsx"
    },
    "/Product/$pid": {
      "filePath": "Product.$pid.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
