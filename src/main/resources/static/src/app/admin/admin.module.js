/**
 * Created by eryk on 02.04.17.
 */
import appAdmin from './admin.component';
import commonModule from '../common/common.module';
import userGridWrapper from './user-grid-wrapper/user-grid-wrapper.component';
import userGrid from './user-grid-wrapper/user-grid/user-grid.component';
import userModal from './user-grid-wrapper/user-modal/user-modal.component';
import userGridColumn from './user-grid-wrapper/user-grid/user-grid-column.constant';
import {routeConfig, routeRejection} from './admin.routes';
const agGridModule = 'agGrid';

export default angular.module('app.admin', [
    commonModule,
    agGridModule
])
    .component('appAdmin', appAdmin)
    .component('appUserGridWrapper', userGridWrapper)
    .component('appUserGrid', userGrid)
    .component('appUserModal', userModal)
    .constant('userGridColumn', userGridColumn)
    .config(routeConfig)
    .name;
