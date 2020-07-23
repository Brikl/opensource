import { generateRedirects } from './functions/generateRedirects'

import { INetlifyEvent } from './@types/INetlifyEvent'

import * as path from 'path'

export const onPostBuild: INetlifyEvent = async ({
  constants,
  inputs,
  utils,
}) => {
  try {
    const { nextDir = path.join(constants.PUBLISH_DIR, '../.next') } = inputs

    await generateRedirects(nextDir, constants.PUBLISH_DIR)
  } catch (error) {
    return utils.build.failPlugin('Plugin failed to execute', {
      error,
    })
  }
}
