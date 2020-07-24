import { generateRedirects } from './functions/generateRedirects'

import { INetlifyEvent } from './@types/INetlifyEvent'

import * as path from 'path'

export const onPostBuild: INetlifyEvent = async opts => {
  const { constants, inputs } = opts
  const { nextDir = path.join(constants.PUBLISH_DIR, '../.next') } = inputs

  await generateRedirects(opts)(nextDir, constants.PUBLISH_DIR)
}
