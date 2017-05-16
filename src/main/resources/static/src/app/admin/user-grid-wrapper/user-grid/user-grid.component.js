/**
 * Created by eryk on 31.03.17.
 */
import html from './user-grid.component.html';

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-dark.css'
import 'ag-grid/dist/styles/theme-material.css'
import 'ag-grid/dist/styles/theme-bootstrap.css';
import userGridStub from './user-grid.stub.json';
import userGridColumn from './user-grid-column.constant';
import './user-grid.component.scss';

class UserGridController {

    constructor() {
        this.gridOptions = {
            columnDefs: userGridColumn,
            rowData: userGridStub
        }
    }

}


export default {
    controller: UserGridController,
    controllerAs: 'grid',
    template: html,
};
