import { AccountModel } from '@/domain/models'

export interface UpdateCurrentAccount {
  save: (account: UpdateCurrentAccount.Params) => Promise<void>
}

export namespace UpdateCurrentAccount {
  export type Params = AccountModel
}
