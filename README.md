# Full-stack Web Developer (Week 6)

## React ([Docs](https://reactjs.org/docs/getting-started.html))

### Data fetching ([Ref.](https://developers.google.com/web/updates/2015/03/introduction-to-fetch))
- fetch ([Ref.](https://javascript.info/fetch-api))
```javascript
const response = await fetch(url, options)
const data = await response.json()
console.log(data)
```
- axios ([Ref.](https://github.com/axios/axios))
- apollo-client ([Ref.](https://github.com/apollographql/apollo-client))
- etc.

### React router
- react-router-dom ([Docs](https://reactrouter.com/web/guides/quick-start))

#### Example
- [Basic](https://reactrouter.com/web/example/basic)
- [URL Parameters](https://reactrouter.com/web/example/url-params)
- [Nesting](https://reactrouter.com/web/example/nesting)
- [No Match (404)](https://reactrouter.com/web/example/no-match)
- [Hooks](https://reactrouter.com/web/api/Hooks)

### ESLint ([Docs](https://eslint.org/docs/user-guide/getting-started))
| Find and fix problems in your JavaScript code

### Production build and Deployment ([Docs](https://create-react-app.dev/docs/deployment/))
- Build command `yarn build` or `num run build`
- Copy build folder to server
- Nginx config for react-router, path `/etc/nginx/conf.d`
```
server {
  listen       80;
  server_name  localhost;

  root   /usr/share/nginx/html;
  index  index.html index.htm;

  location / {
    try_files $uri $uri/ /index.html;
  }

  location ~* \.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$ {
    expires 1M;
    access_log off;
    add_header Cache-Control "public";
  }
}
```
