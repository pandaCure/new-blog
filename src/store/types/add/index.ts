// dispatch-type type
export const ADD = 'ADD'
export const ADDSTART = 'ADDSTART'
export const SUB = 'SUB'
export const SUBSTART = 'SUBSTART'
// reducer return state type
export interface ComputerState {
  readonly computerNum: number
}
// dispatch data type
export interface addNum {
  num: number
}
export interface subNum {
  num: number
}
// action type
export interface SendAddNumActionType {
  type: typeof ADD
  payload: addNum
}
export interface SendSubNumActionType {
  type: typeof SUB
  payload: addNum
}
export interface SendAddNumStartActionType {
  type: typeof ADDSTART
  payload: addNum
}
export interface SendSubNumStartActionType {
  type: typeof SUBSTART
  payload: addNum
}
export type ComputerAction = SendAddNumActionType | SendSubNumActionType
export function sendAddNumAction (number: addNum): SendAddNumActionType {
  return {
    type: ADD,
    payload: number
  }
}
export function sendSubNumAction (number: subNum): SendSubNumActionType {
  return {
    type: SUB,
    payload: number
  }
}
export function sendAddNumStartAction (number: addNum): SendAddNumStartActionType {
  return {
    type: ADDSTART,
    payload: number
  }
}
export function sendSubNumStartAction (number: subNum): SendSubNumStartActionType {
  return {
    type: SUBSTART,
    payload: number
  }
}