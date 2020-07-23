# netlify-plugin-next-dynamic

Netlify plugin that allows you to deploy dynamic [NextJS](https://nextjs.org) path statically

Demo
---

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Brikl/demo-netlify-plugin-next-dynamic)

Example site: [demo-netlify-plugin-next-dynamic.netlify.app](https://demo-netlify-plugin-next-dynamic.netlify.app/)

Build logs: [Netlify CI](https://app.netlify.com/sites/demo-netlify-plugin-next-dynamic/deploys/5f1986636a6fd38c42e29609)

Usage
-----

You have to build your NextJS with your `next build` command first, then export it by `next export`

After that, add plugin into your Netlify configuration ([docs](https://www.netlify.com/blog/2019/10/16/creating-and-using-your-first-netlify-build-plugin/)) or just add it from **Netlify UI** ([docs](https://docs.netlify.com/configure-builds/build-plugins/#ui-installation))

```toml
[[plugins]]
package = "netlify-plugin-next-dynamic"
```

Configuration
---

Normally, you can use it with **zero-configuration** if `.next` and your exported directory are in the same place. If not don't worry, we got you covered!

### `nextDir` (Optional)

Path that target to your custom `.next` directory

```toml
  [plugins.inputs]
  nextDir = "apps/dashboard/.next"
```
