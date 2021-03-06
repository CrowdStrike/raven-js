/** Supported Sentry transport protocols in a DSN. */
export type DSNProtocol = 'http' | 'https';

/** Primitive components of a DSN. */
export interface DSNComponents {
  /** Protocol used to connect to Sentry. */
  protocol: DSNProtocol;
  /** Public authorization key. */
  user: string;
  /** Private authorization key (deprecated, optional). */
  pass?: string;
  /** Hostname of the Sentry instance. */
  host: string;
  /** Port of the Sentry instance. */
  port?: string;
  /** Sub path/ */
  path?: string;
  /** Project ID */
  projectId: string;
}

/** Anything that can be parsed into a DSN. */
export type DSNLike = string | DSNComponents;

/** TODO */
export enum Severity {
  /** TODO */
  Fatal = 'fatal',
  /** TODO */
  Error = 'error',
  /** TODO */
  Warning = 'warning',
  /** TODO */
  Log = 'log',
  /** TODO */
  Info = 'info',
  /** TODO */
  Debug = 'debug',
  /** TODO */
  Critical = 'critical',
}

/** TODO */
export interface Breadcrumb {
  type?: string;
  level?: Severity;
  event_id?: string;
  category?: string;
  message?: string;
  data?: any;
  timestamp?: number;
}

/** TODO */
export interface User {
  id?: string;
  ip_address?: string;
  email?: string;
  username?: string;
  extra?: any;
}

/** TODO */
export interface SdkInfo {
  version?: string;
  name?: string;
  integrations?: string[];
}

/** TODO */
export interface StackFrame {
  filename?: string;
  function?: string;
  module?: string;
  platform?: string;
  lineno?: number;
  colno?: number;
  abs_path?: string;
  context_line?: string;
  pre_context?: string;
  post_context?: string;
  in_app?: boolean;
  vars?: { [name: string]: any };
}

/** TODO */
export interface Stacktrace {
  frames?: StackFrame[];
  frames_omitted?: [number, number];
}

/** TODO */
export interface Thread {
  id?: number;
  name?: string;
  stacktrace?: Stacktrace;
  crashed?: boolean;
  current?: boolean;
}

/** TODO */
export interface SentryException {
  type?: string;
  value?: string;
  module?: string;
  thread_id?: number;
  stacktrace?: Stacktrace;
}

/** TODO */
export interface Request {
  url?: string;
  method?: string;
  data?: any;
  query_string?: string;
  cookies?: { [key: string]: string };
  env?: { [key: string]: string };
  headers?: { [key: string]: string };
}

/** TODO */
export interface SentryEvent {
  event_id?: string;
  message?: string;
  timestamp?: number;
  level?: Severity;
  platform?: string;
  logger?: string;
  server?: string;
  release?: string;
  dist?: string;
  environment?: string;
  sdk?: SdkInfo;
  request?: Request;
  modules?: { [key: string]: string };
  fingerprint?: string[];
  exception?: {
    values: SentryException[];
  };
  stacktrace?: Stacktrace;
  breadcrumbs?: Breadcrumb[];
  contexts?: { [key: string]: object };
  tags?: { [key: string]: string };
  extra?: { [key: string]: object };
  user?: User;
}

/** TODO */
export interface Integration {
  name: string;
  handler?: any;
  install(): void;
}

/** TODO */
export interface TransportOptions {
  dsn: DSNLike;
}

/** TODO */
export interface Transport {
  url: string;
  composeUrl(dsn: DSNComponents): string;
  send(event: SentryEvent): Promise<Response | XMLHttpRequest>;
}

/** TODO */
export interface TransportClass<T extends Transport> {
  new (options: TransportOptions): T;
}
