import { UpdateCurrentAccount } from '@/domain/usecases'
import { SetStorage } from '@/data/protocols'
import { UnexpectedError } from '@/domain/errors'

export class LocalUpdateCurrentAccount implements UpdateCurrentAccount {
  constructor (private readonly setStorage: SetStorage) {}

  async save (account: UpdateCurrentAccount.Params): Promise<void> {
    if (!account?.accessToken) {
      throw new UnexpectedError()
    }
    this.setStorage.set('account', JSON.stringify(account))
  }
}
