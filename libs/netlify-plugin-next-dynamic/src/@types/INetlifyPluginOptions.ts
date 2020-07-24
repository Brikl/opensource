import { IBuildFailType } from './IBuildFailType'

export type INetlifyPluginOptions = {
  constants: {
    CONFIG_PATH: string | undefined
    PUBLISH_DIR: string
    FUNCTIONS_SRC: string | undefined
    FUNCTIONS_DIST: string
    IS_LOCAL: boolean
    NETLIFY_BUILD_VERSION: string
    SITE_ID: string
  }
  inputs: {
    [key: string]: string | undefined
  }
  utils: {
    build: {
      [key in IBuildFailType]: (message: string, options?: unknown) => void
    }
  }
}
