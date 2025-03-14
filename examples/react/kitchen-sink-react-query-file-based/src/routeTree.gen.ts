/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as PathlessLayoutImport } from './routes/_pathlessLayout'
import { Route as AuthImport } from './routes/_auth'
import { Route as DashboardRouteImport } from './routes/dashboard.route'
import { Route as IndexImport } from './routes/index'
import { Route as ExpensiveIndexImport } from './routes/expensive/index'
import { Route as DashboardIndexImport } from './routes/dashboard.index'
import { Route as FooBarImport } from './routes/foo/bar'
import { Route as PathlessLayoutRouteBImport } from './routes/_pathlessLayout.route-b'
import { Route as PathlessLayoutRouteAImport } from './routes/_pathlessLayout.route-a'
import { Route as AuthProfileImport } from './routes/_auth.profile'
import { Route as DashboardUsersRouteImport } from './routes/dashboard.users.route'
import { Route as DashboardInvoicesRouteImport } from './routes/dashboard.invoices.route'
import { Route as DashboardUsersIndexImport } from './routes/dashboard.users.index'
import { Route as DashboardInvoicesIndexImport } from './routes/dashboard.invoices.index'
import { Route as DashboardUsersUserImport } from './routes/dashboard.users.user'
import { Route as DashboardInvoicesInvoiceIdImport } from './routes/dashboard.invoices.$invoiceId'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const PathlessLayoutRoute = PathlessLayoutImport.update({
  id: '/_pathlessLayout',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRouteRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ExpensiveIndexRoute = ExpensiveIndexImport.update({
  id: '/expensive/',
  path: '/expensive/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const FooBarRoute = FooBarImport.update({
  id: '/foo/bar',
  path: '/foo/bar',
  getParentRoute: () => rootRoute,
} as any)

const PathlessLayoutRouteBRoute = PathlessLayoutRouteBImport.update({
  id: '/route-b',
  path: '/route-b',
  getParentRoute: () => PathlessLayoutRoute,
} as any)

const PathlessLayoutRouteARoute = PathlessLayoutRouteAImport.update({
  id: '/route-a',
  path: '/route-a',
  getParentRoute: () => PathlessLayoutRoute,
} as any)

const AuthProfileRoute = AuthProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => AuthRoute,
} as any)

const DashboardUsersRouteRoute = DashboardUsersRouteImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const DashboardInvoicesRouteRoute = DashboardInvoicesRouteImport.update({
  id: '/invoices',
  path: '/invoices',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const DashboardUsersIndexRoute = DashboardUsersIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardUsersRouteRoute,
} as any)

const DashboardInvoicesIndexRoute = DashboardInvoicesIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardInvoicesRouteRoute,
} as any)

const DashboardUsersUserRoute = DashboardUsersUserImport.update({
  id: '/user',
  path: '/user',
  getParentRoute: () => DashboardUsersRouteRoute,
} as any)

const DashboardInvoicesInvoiceIdRoute = DashboardInvoicesInvoiceIdImport.update(
  {
    id: '/$invoiceId',
    path: '/$invoiceId',
    getParentRoute: () => DashboardInvoicesRouteRoute,
  } as any,
)

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
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_pathlessLayout': {
      id: '/_pathlessLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PathlessLayoutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/invoices': {
      id: '/dashboard/invoices'
      path: '/invoices'
      fullPath: '/dashboard/invoices'
      preLoaderRoute: typeof DashboardInvoicesRouteImport
      parentRoute: typeof DashboardRouteImport
    }
    '/dashboard/users': {
      id: '/dashboard/users'
      path: '/users'
      fullPath: '/dashboard/users'
      preLoaderRoute: typeof DashboardUsersRouteImport
      parentRoute: typeof DashboardRouteImport
    }
    '/_auth/profile': {
      id: '/_auth/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthProfileImport
      parentRoute: typeof AuthImport
    }
    '/_pathlessLayout/route-a': {
      id: '/_pathlessLayout/route-a'
      path: '/route-a'
      fullPath: '/route-a'
      preLoaderRoute: typeof PathlessLayoutRouteAImport
      parentRoute: typeof PathlessLayoutImport
    }
    '/_pathlessLayout/route-b': {
      id: '/_pathlessLayout/route-b'
      path: '/route-b'
      fullPath: '/route-b'
      preLoaderRoute: typeof PathlessLayoutRouteBImport
      parentRoute: typeof PathlessLayoutImport
    }
    '/foo/bar': {
      id: '/foo/bar'
      path: '/foo/bar'
      fullPath: '/foo/bar'
      preLoaderRoute: typeof FooBarImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardRouteImport
    }
    '/expensive/': {
      id: '/expensive/'
      path: '/expensive'
      fullPath: '/expensive'
      preLoaderRoute: typeof ExpensiveIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/invoices/$invoiceId': {
      id: '/dashboard/invoices/$invoiceId'
      path: '/$invoiceId'
      fullPath: '/dashboard/invoices/$invoiceId'
      preLoaderRoute: typeof DashboardInvoicesInvoiceIdImport
      parentRoute: typeof DashboardInvoicesRouteImport
    }
    '/dashboard/users/user': {
      id: '/dashboard/users/user'
      path: '/user'
      fullPath: '/dashboard/users/user'
      preLoaderRoute: typeof DashboardUsersUserImport
      parentRoute: typeof DashboardUsersRouteImport
    }
    '/dashboard/invoices/': {
      id: '/dashboard/invoices/'
      path: '/'
      fullPath: '/dashboard/invoices/'
      preLoaderRoute: typeof DashboardInvoicesIndexImport
      parentRoute: typeof DashboardInvoicesRouteImport
    }
    '/dashboard/users/': {
      id: '/dashboard/users/'
      path: '/'
      fullPath: '/dashboard/users/'
      preLoaderRoute: typeof DashboardUsersIndexImport
      parentRoute: typeof DashboardUsersRouteImport
    }
  }
}

// Create and export the route tree

interface DashboardInvoicesRouteRouteChildren {
  DashboardInvoicesInvoiceIdRoute: typeof DashboardInvoicesInvoiceIdRoute
  DashboardInvoicesIndexRoute: typeof DashboardInvoicesIndexRoute
}

const DashboardInvoicesRouteRouteChildren: DashboardInvoicesRouteRouteChildren =
  {
    DashboardInvoicesInvoiceIdRoute: DashboardInvoicesInvoiceIdRoute,
    DashboardInvoicesIndexRoute: DashboardInvoicesIndexRoute,
  }

const DashboardInvoicesRouteRouteWithChildren =
  DashboardInvoicesRouteRoute._addFileChildren(
    DashboardInvoicesRouteRouteChildren,
  )

interface DashboardUsersRouteRouteChildren {
  DashboardUsersUserRoute: typeof DashboardUsersUserRoute
  DashboardUsersIndexRoute: typeof DashboardUsersIndexRoute
}

const DashboardUsersRouteRouteChildren: DashboardUsersRouteRouteChildren = {
  DashboardUsersUserRoute: DashboardUsersUserRoute,
  DashboardUsersIndexRoute: DashboardUsersIndexRoute,
}

const DashboardUsersRouteRouteWithChildren =
  DashboardUsersRouteRoute._addFileChildren(DashboardUsersRouteRouteChildren)

interface DashboardRouteRouteChildren {
  DashboardInvoicesRouteRoute: typeof DashboardInvoicesRouteRouteWithChildren
  DashboardUsersRouteRoute: typeof DashboardUsersRouteRouteWithChildren
  DashboardIndexRoute: typeof DashboardIndexRoute
}

const DashboardRouteRouteChildren: DashboardRouteRouteChildren = {
  DashboardInvoicesRouteRoute: DashboardInvoicesRouteRouteWithChildren,
  DashboardUsersRouteRoute: DashboardUsersRouteRouteWithChildren,
  DashboardIndexRoute: DashboardIndexRoute,
}

const DashboardRouteRouteWithChildren = DashboardRouteRoute._addFileChildren(
  DashboardRouteRouteChildren,
)

interface AuthRouteChildren {
  AuthProfileRoute: typeof AuthProfileRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthProfileRoute: AuthProfileRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

interface PathlessLayoutRouteChildren {
  PathlessLayoutRouteARoute: typeof PathlessLayoutRouteARoute
  PathlessLayoutRouteBRoute: typeof PathlessLayoutRouteBRoute
}

const PathlessLayoutRouteChildren: PathlessLayoutRouteChildren = {
  PathlessLayoutRouteARoute: PathlessLayoutRouteARoute,
  PathlessLayoutRouteBRoute: PathlessLayoutRouteBRoute,
}

const PathlessLayoutRouteWithChildren = PathlessLayoutRoute._addFileChildren(
  PathlessLayoutRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '': typeof PathlessLayoutRouteWithChildren
  '/login': typeof LoginRoute
  '/dashboard/invoices': typeof DashboardInvoicesRouteRouteWithChildren
  '/dashboard/users': typeof DashboardUsersRouteRouteWithChildren
  '/profile': typeof AuthProfileRoute
  '/route-a': typeof PathlessLayoutRouteARoute
  '/route-b': typeof PathlessLayoutRouteBRoute
  '/foo/bar': typeof FooBarRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/expensive': typeof ExpensiveIndexRoute
  '/dashboard/invoices/$invoiceId': typeof DashboardInvoicesInvoiceIdRoute
  '/dashboard/users/user': typeof DashboardUsersUserRoute
  '/dashboard/invoices/': typeof DashboardInvoicesIndexRoute
  '/dashboard/users/': typeof DashboardUsersIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof PathlessLayoutRouteWithChildren
  '/login': typeof LoginRoute
  '/profile': typeof AuthProfileRoute
  '/route-a': typeof PathlessLayoutRouteARoute
  '/route-b': typeof PathlessLayoutRouteBRoute
  '/foo/bar': typeof FooBarRoute
  '/dashboard': typeof DashboardIndexRoute
  '/expensive': typeof ExpensiveIndexRoute
  '/dashboard/invoices/$invoiceId': typeof DashboardInvoicesInvoiceIdRoute
  '/dashboard/users/user': typeof DashboardUsersUserRoute
  '/dashboard/invoices': typeof DashboardInvoicesIndexRoute
  '/dashboard/users': typeof DashboardUsersIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/_auth': typeof AuthRouteWithChildren
  '/_pathlessLayout': typeof PathlessLayoutRouteWithChildren
  '/login': typeof LoginRoute
  '/dashboard/invoices': typeof DashboardInvoicesRouteRouteWithChildren
  '/dashboard/users': typeof DashboardUsersRouteRouteWithChildren
  '/_auth/profile': typeof AuthProfileRoute
  '/_pathlessLayout/route-a': typeof PathlessLayoutRouteARoute
  '/_pathlessLayout/route-b': typeof PathlessLayoutRouteBRoute
  '/foo/bar': typeof FooBarRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/expensive/': typeof ExpensiveIndexRoute
  '/dashboard/invoices/$invoiceId': typeof DashboardInvoicesInvoiceIdRoute
  '/dashboard/users/user': typeof DashboardUsersUserRoute
  '/dashboard/invoices/': typeof DashboardInvoicesIndexRoute
  '/dashboard/users/': typeof DashboardUsersIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | ''
    | '/login'
    | '/dashboard/invoices'
    | '/dashboard/users'
    | '/profile'
    | '/route-a'
    | '/route-b'
    | '/foo/bar'
    | '/dashboard/'
    | '/expensive'
    | '/dashboard/invoices/$invoiceId'
    | '/dashboard/users/user'
    | '/dashboard/invoices/'
    | '/dashboard/users/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/login'
    | '/profile'
    | '/route-a'
    | '/route-b'
    | '/foo/bar'
    | '/dashboard'
    | '/expensive'
    | '/dashboard/invoices/$invoiceId'
    | '/dashboard/users/user'
    | '/dashboard/invoices'
    | '/dashboard/users'
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/_auth'
    | '/_pathlessLayout'
    | '/login'
    | '/dashboard/invoices'
    | '/dashboard/users'
    | '/_auth/profile'
    | '/_pathlessLayout/route-a'
    | '/_pathlessLayout/route-b'
    | '/foo/bar'
    | '/dashboard/'
    | '/expensive/'
    | '/dashboard/invoices/$invoiceId'
    | '/dashboard/users/user'
    | '/dashboard/invoices/'
    | '/dashboard/users/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardRouteRoute: typeof DashboardRouteRouteWithChildren
  AuthRoute: typeof AuthRouteWithChildren
  PathlessLayoutRoute: typeof PathlessLayoutRouteWithChildren
  LoginRoute: typeof LoginRoute
  FooBarRoute: typeof FooBarRoute
  ExpensiveIndexRoute: typeof ExpensiveIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRouteRoute: DashboardRouteRouteWithChildren,
  AuthRoute: AuthRouteWithChildren,
  PathlessLayoutRoute: PathlessLayoutRouteWithChildren,
  LoginRoute: LoginRoute,
  FooBarRoute: FooBarRoute,
  ExpensiveIndexRoute: ExpensiveIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/_auth",
        "/_pathlessLayout",
        "/login",
        "/foo/bar",
        "/expensive/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.route.tsx",
      "children": [
        "/dashboard/invoices",
        "/dashboard/users",
        "/dashboard/"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/profile"
      ]
    },
    "/_pathlessLayout": {
      "filePath": "_pathlessLayout.tsx",
      "children": [
        "/_pathlessLayout/route-a",
        "/_pathlessLayout/route-b"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/dashboard/invoices": {
      "filePath": "dashboard.invoices.route.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/invoices/$invoiceId",
        "/dashboard/invoices/"
      ]
    },
    "/dashboard/users": {
      "filePath": "dashboard.users.route.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/users/user",
        "/dashboard/users/"
      ]
    },
    "/_auth/profile": {
      "filePath": "_auth.profile.tsx",
      "parent": "/_auth"
    },
    "/_pathlessLayout/route-a": {
      "filePath": "_pathlessLayout.route-a.tsx",
      "parent": "/_pathlessLayout"
    },
    "/_pathlessLayout/route-b": {
      "filePath": "_pathlessLayout.route-b.tsx",
      "parent": "/_pathlessLayout"
    },
    "/foo/bar": {
      "filePath": "foo/bar.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard.index.tsx",
      "parent": "/dashboard"
    },
    "/expensive/": {
      "filePath": "expensive/index.tsx"
    },
    "/dashboard/invoices/$invoiceId": {
      "filePath": "dashboard.invoices.$invoiceId.tsx",
      "parent": "/dashboard/invoices"
    },
    "/dashboard/users/user": {
      "filePath": "dashboard.users.user.tsx",
      "parent": "/dashboard/users"
    },
    "/dashboard/invoices/": {
      "filePath": "dashboard.invoices.index.tsx",
      "parent": "/dashboard/invoices"
    },
    "/dashboard/users/": {
      "filePath": "dashboard.users.index.tsx",
      "parent": "/dashboard/users"
    }
  }
}
ROUTE_MANIFEST_END */
