### About

This is an application built using microfrontend architecture. It consists of the following:
- root container (React.js)
- auth subapp (React.js)
- marketing subapp (React.js)
- dashboard subapp (Vue.js)

Everything is integrated using Webpack and its `ModuleFederationPlugin`.

### Preview:

You can see how it works [here](https://d349c2nkejklv2.cloudfront.net/).

### Local start

To run the app locally, clone the repository, navigate to each subapp, and run:
```bash
// e.g. /packages/container
npm install
```

Next, run each app in a separate terminal tab:
```bash
// e,g /packages/auth
npm run start
```

Visit `http://localhost/:8080` to see the main app (or use the localhost port specified for each subapp to see them running in isolation).

### Production start

To start app in production mode you need to create S3 bucket in [AWS](https://aws.amazon.com/) and add the required secrets to your GitHub repository.
