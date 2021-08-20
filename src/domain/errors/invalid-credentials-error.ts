export class InvalidCredencialsError extends Error {
  constructor () {
    super('Credencias inválidas')
    this.name = 'InvalidCredencialsError'
  }
}
