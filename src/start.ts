import { createStart, createMiddleware, createCsrfMiddleware } from '@tanstack/react-start'
import { authMiddleware } from './middleware/auth';

const loggingMiddleware = createMiddleware({type : 'request'}).server(({request,next}) => {
  const url = new URL(request.url);
  console.log(`[${request.method}] ${url.pathname}`);
  return next()
})
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

export const startInstance = createStart(() => {
  return {
    requestMiddleware: [loggingMiddleware,csrfMiddleware,authMiddleware],
  }
})


