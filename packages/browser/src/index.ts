export {
  Breadcrumb,
  Request,
  SdkInfo,
  SentryEvent,
  SentryException,
  Severity,
  StackFrame,
  Stacktrace,
  Thread,
  User,
} from '@sentry/types';

export {
  addBreadcrumb,
  captureMessage,
  captureException,
  captureEvent,
  configureScope,
} from '@sentry/minimal';

export { getDefaultHub, Hub, Scope } from '@sentry/hub';

export { BrowserBackend, BrowserOptions } from './backend';
export { BrowserClient } from './client';
export { init } from './sdk';

import * as Integrations from './integrations';
export { Integrations };
