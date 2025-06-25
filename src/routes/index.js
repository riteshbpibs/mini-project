import { lazy } from "react";

const SignInPageRoute = lazy(() =>
  import(/* webpackPrefetch: true */ "../pages/SignInPage")
);

const SignUpPageRoute = lazy(() =>
  import(/* webpackPrefetch: true */ "../pages/SignUpPage")
);

export { SignInPageRoute, SignUpPageRoute };
