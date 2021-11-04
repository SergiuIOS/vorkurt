import {IConfigRouter} from "../../shared/utils/interfaces";

export const routerArray = Object.freeze({
  router: [
    {
      name: 'Pull Request',
      path: 'pull_request'
    } as IConfigRouter,
    {
      name: 'Code',
      path: 'code'
    } as IConfigRouter, {
      name: 'Settings',
      path: 'settings'
    } as IConfigRouter
  ],
  pageHeader: [
    {
      name: 'Issues',
      path: 'issues'
    },
    {
      name: 'Marketplace',
      path: 'marketplace'
    },{
      name: 'Explore',
      path: 'explore'
    },
    {
      name: 'Timer',
      path: 'timer'
    },
    {
      name: 'Transport',
      path: 'tms'
    }
  ] as IConfigRouter[]

})
