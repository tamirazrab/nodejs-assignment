/*Powered By: Manaknightdigital Inc. https://manaknightdigital.com/ Year: 2021*/
/**
 * question Model
 * @copyright 2021 Manaknightdigital Inc.
 * @link https://manaknightdigital.com
 * @license Proprietary Software licensing
 * @author Ryan Wong
 *
 */

const moment = require("moment")
const bcrypt = require("bcryptjs")
const { Op } = require("sequelize")
const { intersection } = require("lodash")
const coreModel = require("./../core/models")

module.exports = (sequelize, DataTypes) => {
  const Termination = sequelize.define(
    "termination",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      message: DataTypes.TEXT,
      counter: DataTypes.INTEGER,
      created_at: DataTypes.DATEONLY,
      updated_at: DataTypes.DATE,
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "question",
    },
    {
      underscoredAll: false,
      underscored: false,
    }
  )

  coreModel.call(this, Termination)

  Termination._preCreateProcessing = function (data) {
    return data
  }
  Termination._postCreateProcessing = function (data) {
    return data
  }
  Termination._customCountingConditions = function (data) {
    return data
  }

  Termination._filterAllowKeys = function (data) {
    let cleanData = {}
    let allowedFields = Question.allowFields()
    allowedFields.push(Question._primaryKey())

    for (const key in data) {
      if (allowedFields.includes(key)) {
        cleanData[key] = data[key]
      }
    }
    return cleanData
  }



  Termination.allowFields = function () {
    return [

      "id",
      "message",
      "counter"
    ]
  }


  // ex
  Termination.intersection = function (fields) {
    if (fields) {
      return intersection(
        [
          "id",
          "message",
          "counter",
          "created_at",
          "updated_at",
        ],
        Object.keys(fields)
      )
    } else return []
  }

  return Termination
}
