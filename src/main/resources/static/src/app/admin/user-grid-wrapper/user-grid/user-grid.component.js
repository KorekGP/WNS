/**
 * Created by eryk on 31.03.17.
 */
import html from './user-grid.component.html';

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
import userGridStub from './user-grid.stub.json';
import userGridColumn from './user-grid-column.constant';
import './user-grid.component.scss';

const ROW_HEIGHT = 40;
const HEADER_HEIGHT = 36;

class UserGridController {

    constructor() {
        this.gridOptions = {
            rowHeight: ROW_HEIGHT,
            headerHeight: HEADER_HEIGHT,
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
