import { LocalSaveAccessToken } from '@/data/usecases'
import { SaveAcessToken } from '@/domain/usecases'
import { makeLocalStorageAdapter } from '@/main/factories/cache'

export const makeLocalSaveAccessToken = (): SaveAcessToken => {
  return new LocalSaveAccessToken(makeLocalStorageAdapter())
}
