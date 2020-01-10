import Vue from "vue";
import Vuex from "vuex";
import { IUserState } from './modules/user'
import { ITabState } from './modules/tab'

Vue.use(Vuex);

export interface IRootState {
  user: IUserState,
  tab: ITabState
}
export default new Vuex.Store<IRootState>({});
