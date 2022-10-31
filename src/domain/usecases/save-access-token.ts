export interface SaveAcessToken {
  save: (params: SaveAcessToken.Params) => Promise<void>
}

export namespace SaveAcessToken {
  export type Params = {
    accessToken: string
  }
}
