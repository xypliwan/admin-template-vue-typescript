import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { TabConfig, DelTabIndex } from '@/types'

export interface ITabState {
    tabList: TabConfig[]
    cachedViews: string[]

}

@Module({ dynamic: true, store, name: 'tab' })
class tab extends VuexModule implements ITabState {
    public tabList = [{
        title: "首页",
        name: "home",
        authentication: true,
        keepAlive: true
    }]
    public cachedViews = ['home']

    @Mutation
    private DAATABLIST(item: TabConfig): void {
        if (!this.tabList.find(el => el.title === item.title)) {
            this.tabList.push(item);
            this.cachedViews.push(item.name);
        }
    }

    @Action
    public addTabList(item: TabConfig): void {
        this.DAATABLIST(item)
    }

    @Mutation
    private DELTABLIST(iConfig: DelTabIndex): void {
        this.tabList.splice(iConfig.start, iConfig.end)
        this.cachedViews.splice(iConfig.start, iConfig.end)
    }

    @Action
    public delTabList(iConfig: DelTabIndex): void {
        this.DELTABLIST(iConfig)
    }

    @Mutation
    private DELALLTABLIST(): void {
        this.tabList = [{
            title: "首页",
            name: "home",
            authentication: true,
            keepAlive: true
        }]
        this.cachedViews = ['home']
    }

    @Action
    public delAllTabList(): void {
        this.DELALLTABLIST();
    }

}

export const TabModule = getModule(tab);