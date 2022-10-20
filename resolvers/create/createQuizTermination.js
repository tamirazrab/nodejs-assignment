"use strict"
/*Powered By: Manaknightdigital Inc. https://manaknightdigital.com/ Year: 2021*/
/**
 * user Resolve Add
 * @copyright 2021 Manaknightdigital Inc.
 * @link https://manaknightdigital.com
 * @license Proprietary Software licensing
 * @author Ryan Wong
 *
 */

const { ApolloError, UserInputError } = require('apollo-server-express')
const { Validator } = require('node-input-validator')

module.exports = async (parent, args, { db }, info) => {
  try {
    const { message, counter } = args
    const v = new Validator({
      message: args.message,
      counter: args.counter
    }, {
      message: "required",
      counter: "required",
    })

    v.check().then(function (matched) {
      if (!matched) {
        Object.keys(v.errors).forEach((error) => {
          return new UserInputError(v.errors[error].message)
        })
      }
    })

    return await db.termination.insert({
      message,
      counter,
    }, { returnAllFields: true })
  } catch (error) {
    console.log('create_user -> error', error)
    return new ApolloError('InternalServerError')
  }
}
