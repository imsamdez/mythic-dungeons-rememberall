/**
 * IMPORTANT : All non-default env variables must be prefixed with REACT_APP_
 * See https://create-react-app.dev/docs/adding-custom-environment-variables/
 */

/**
 * IMPORTANT 2 : Use this class instead of process.env
 */

class Env {
  get NODE_ENV() {
    return process.env.NODE_ENV;
  }
}

export const Environment = new Env();
