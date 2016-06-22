// Type definitions for meteor-restivus 0.8.11
// Project: https://github.com/kahmali/meteor-restivus/
// Definitions by: flynn <https://github.com/niceilm/>

declare module "meteor/nimble:restivus" {
  interface Response {
    statusCode?: number,
    headers?: Object,
    body: string
  }

  interface ActionFunc {
    (): string|string[]|Object|Response|void;
  }

  interface RouteOptions {
    authRequired?: boolean,
    roleRequired?: string | string[]
  }

  interface Endpoint extends RouteOptions {
    action: ActionFunc
  }

  interface Routes {
    get?: Endpoint|ActionFunc,
    post?: Endpoint|ActionFunc,
    put?: Endpoint|ActionFunc,
    patch?: Endpoint|ActionFunc,
    'delete'?: Endpoint|ActionFunc,
    options?: Endpoint|ActionFunc,
  }

  interface CollectionOptions {
    routeOptions?: Endpoint,
    excludedEndpoints?: string|string[],
    endpoints?: {
      post?: Endpoint|ActionFunc,
      'delete'?: Endpoint|ActionFunc,
      put?: Endpoint|ActionFunc,
      get?: Endpoint|ActionFunc,
      getAll?: Endpoint|ActionFunc
    }
  }

  interface Options {
    apiPath?: string,
    auth?: {token: string,user: Object},
    defaultHeaders?: Object,
    defaultOptionsEndpoint?: Endpoint,
    enableCors?: boolean,
    onLoggedIn?: Function,
    onLoggedOut?: Function,
    useDefaultAuth?: boolean,
    prettyJson?: boolean,
    version?: string
  }

  interface RestivusObject {
    new(options?: Options);

    addCollection<T>(collection: Mongo.Collection<T>, conf?: CollectionOptions): void;

    addRoute(path: string, conf: Endpoint|Routes, routes?: Routes): void;
  }

  export let Restivus: RestivusObject;
}
