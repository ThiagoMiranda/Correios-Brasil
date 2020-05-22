/**
 * Funções responsáveis por operações de cep
 */
 import { sanitizeCep } from '../utils/validation'
 import { request } from '../utils/request'
 import URL from '../URL'
 import { Cep } from '../Interfaces'

/**
 * 
 * @param {string} cep
 */

const consultarCep = (cep: string) : Promise<void | Cep> => {
  return new Promise((resolve, reject) =>
    request(`${URL.BASECEP}/${sanitizeCep(cep)}/json`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }).then(body => {
      if (body.erro) reject(Error(`Cep: ${cep} não existe na nossa base`))
      return resolve(body)
    })
  )
}

export default consultarCep