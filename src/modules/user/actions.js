import { createAction } from 'redux-actions'
import { MODULE_NAME } from './models'

export const saveNews = createAction(`${MODULE_NAME}/SAVE_NEWS`)
export const removeNews = createAction(`${MODULE_NAME}/REMOVE_NEWS`)
