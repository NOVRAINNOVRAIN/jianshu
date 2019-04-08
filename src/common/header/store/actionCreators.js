import { CHANGE_INPUT_FOCUS, CHANGE_INPUT_BLUR } from './actionTypes'

const changeInputFocusAction = () => ({
  type: CHANGE_INPUT_FOCUS
})

const changeInputBlurAction = () => ({
  type: CHANGE_INPUT_BLUR
})


export { changeInputFocusAction, changeInputBlurAction }