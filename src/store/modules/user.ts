import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { UserInfoConfig } from '@/types';

export interface IUserState {
    userInfo: {
        username: string
    }
}
@Module({ dynamic: true, store, name: 'user' })
class user extends VuexModule implements IUserState {
    public userInfo = {
        username: '测试名字'
    }

    @Mutation
    private SETUSERINFO(userinfo: UserInfoConfig): void {
        this.userInfo.username = userinfo.username
    }

    @Action
    public setUserInfo(userinfo: any): void {

        this.SETUSERINFO(userinfo)
    }

    @Mutation
    private CLEARUSERINFO(): void {
        this.userInfo.username = ''
    }

    @Action
    public clearUserInfo(): void {
        this.CLEARUSERINFO()
    }


}

export const UserModule = getModule(user);