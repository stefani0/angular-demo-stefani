
import { environment } from '../environments/environment';
import { INavData } from './core/models/INavData';

export const navItems: INavData[] = [
    {
        title: true,
        name: environment.projectName,
    },
    {
        name: 'Dynamics',
        icon: 'fa fa-user',
        url: `/${environment.projectName}/dynamic`,
        children: [
            {
                name: 'Button',
                url: `/${environment.projectName}/dynamic/button`,
                icon: 'fa fa-search'
            },
            {
                name: 'Dynamic List',
                url: `/${environment.projectName}/dynamic/table`,
                icon: 'fa fa-search'
            },
            {
                name: 'Dynamic Select',
                url: `/${environment.projectName}/dynamic/select`,
                icon: 'fa fa-search'
            },

        ]
    },
];
