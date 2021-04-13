import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/excel/table/table.template';
import {resizeTable} from '@/components/excel/table/mouseEvent';
import {shouldResult} from '@/components/excel/table/table.function';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown',
        // 'mousemove', 'mouseup',
      ],
    });
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(event) {
    if (shouldResult(event)) {
      resizeTable(this.$root, event)
    }
  }
}
