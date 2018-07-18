import React from 'react'
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import overlayFactory from 'react-bootstrap-table2-overlay';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import {RenderTestsDetails} from "../OrdersTable/ActionButtons";
import {getChainTests} from "../../../../utils/filters/index";


class ChainsTable extends React.Component {

  componentDidMount() {
    const {marker, fetchChainsTestsByMarker} = this.props;
    fetchChainsTestsByMarker(marker)
  }

  render () {
    // const renderChainsDetailes = (cell, row, rowIndex) => {
    //   <span>{tags.length > 0? JSONwithoutBrakets(JSON.stringify(tags)): 'Теги не найдены'}</span>
    // }

    const columns = [
      {
        dataField: 'name',
        text: 'Имя цепочки:',
        sort: true,
        filter: textFilter({
          placeholder: 'Поиск'
        }),
      }, {
        dataField: 'tests',
        text: 'Тесты:',
        sort: true,
        formatter: RenderTestsDetails,
        filter: textFilter({
          placeholder: 'Поиск'
        }),
      }, {
        dataField: 'stands',
        text: 'Контуры',
        sort: true,
        filter: textFilter({
          placeholder: 'Поиск'
        }),
      }, {
        dataField: 'a_system',
        text: 'Задействованные АС',
        sort: true,
        filter: textFilter({
          placeholder: 'Поиск'
        }),
        // }, {
        //   dataField: 'id_order',
        //   text: 'Взятие данных:',
        //   formatter: renderUseButton(this.props.request, this.props.lockOrder, this.props.unlockOrder),
        //   align: 'center'
      }
    ];
    //Ещё описание таблицы: дефолтные сортировки и т.п.
    // const defSort = [
    //   {
    //     dataField: 'real_start_time',
    //     order: 'desc'
    //   }];


    const {chains, tests, data} = this.props;
    // console.log(chains, tests)
    // const data = chains.map(chain => getChainTests(chain, tests))
    // console.log(chains)
    console.log(data)


    return (
      <div>
        <BootstrapTable keyField='id'
                        data={data}
                        columns={columns}
          // defaultSorted={defSort}
                        pagination={paginationFactory()}
                        noDataIndication={"Нет данных по запросу"}
                        filter={filterFactory()}
                        striped
                        overlay={overlayFactory()}/>
      </div>
    )
  }
}

export default ChainsTable
