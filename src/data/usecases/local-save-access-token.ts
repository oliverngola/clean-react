import { SaveAcessToken } from '@/domain/usecases'
import { SetStorage } from '@/data/protocols'

export class LocalSaveAccessToken implements SaveAcessToken {
  constructor (private readonly setStorage: SetStorage) {}

  async save (accessToken: string): Promise<void> {
    await this.setStorage.set('accessToken', accessToken)
  }
}
