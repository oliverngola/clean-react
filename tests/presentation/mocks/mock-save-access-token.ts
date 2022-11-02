import { SaveAcessToken } from '@/domain/usecases'

export class SaveAccessTokenMock implements SaveAcessToken {
  accessToken: string

  async save (accessToken: string): Promise<void> {
    this.accessToken = accessToken
  }
}
