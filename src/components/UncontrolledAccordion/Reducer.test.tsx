import {ActionType, reducer, StateType, TOGGLE_COLLAPSED} from './Reducer';

test('collapsed should be true', () => {
  // date
  const state: StateType = {collapsed: false}
  const action: ActionType = {type: TOGGLE_COLLAPSED}
  // action
  const newState = reducer(state, action)
  // expection
  expect(newState.collapsed).toBe(true)
})
test('collapsed should be false', () => {
  // date
  const state: StateType = {collapsed: true}
  const action: ActionType = {type: TOGGLE_COLLAPSED}
  // action
  const newState = reducer(state, action)
  // expection
  expect(newState.collapsed).toBe(false)
})
test('reducer should throw error because action type is incorrect', () => {
  // date
  const state: StateType = {collapsed: true}

  expect(()=>{reducer(state, {type: 'FAKETYPE'})}).toThrowError()
})