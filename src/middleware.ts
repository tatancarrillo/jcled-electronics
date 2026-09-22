import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async ({ request }, next) => {
  const url = new URL(request.url);

  if (url.hostname === 'www.jcledelectronics.com') {
    url.hostname = 'jcledelectronics.com';
    url.protocol = 'https:';
    return Response.redirect(url, 308);
  }

  return next();
});
