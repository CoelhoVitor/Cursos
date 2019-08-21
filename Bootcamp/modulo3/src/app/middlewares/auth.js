const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')
const { promisify } = require('util')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provideded' })
  }

  // Authorization: Bearer TOKEN
  // Pegar somente o TOKEN
  const [, token] = authHeader.split(' ')

  try {
    // Por conta do jwt não retornar uma Promise,
    // não dá para usar o await.
    // Utilizando o promisify dá
    // Deve-se também adicionar o async no module.exports
    // jwt.verify(token, authConfig.secret)
    // O decoded contém o id do User
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)

    req.userId = decoded.id

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' })
  }
}
