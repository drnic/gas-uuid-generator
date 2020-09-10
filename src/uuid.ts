/// <reference path="../node_modules/@types/google-apps-script/google-apps-script.url-fetch.d.ts" />

export function uuidv1(): string {
  var resp = UrlFetchApp.fetch(`http://www.uuidgenerator.net/api/version1`, {
    muteHttpExceptions: false,
    method: 'get'
  })
  return resp.getContentText()
}

export function uuidv4(): string {
  var resp = UrlFetchApp.fetch(`http://www.uuidgenerator.net/api/version4`, {
    muteHttpExceptions: false,
    method: 'get'
  })
  return resp.getContentText()
}

export function guid(): string {
  var resp = UrlFetchApp.fetch(`http://www.uuidgenerator.net/api/guid`, {
    muteHttpExceptions: false,
    method: 'get'
  })
  return resp.getContentText()
}
