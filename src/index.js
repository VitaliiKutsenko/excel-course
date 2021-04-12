
import './scss/index.scss';
import {Excel} from '@/components/excel/Excel';
import {Toolbar} from '@/components/excel/toolbar/Toolbar';
import {Header} from '@/components/excel/header/Header';
import {Formula} from '@/components/excel/formula/Formula';
import {Table} from '@/components/excel/table/Table';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
})
excel.render()
import './module.js';
import './scss/index.scss';
console.log('working');
