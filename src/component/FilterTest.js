import React from 'react'
class FilterTest extends React.Component {
  render () {

    const searchBarSwitcher = () => {
      let searches = [];
      let filters = [...this.state.selectedFilter];
      let applyFiltersBtn = this.state.selectedFilter.length > 0 ? (
        <Row>
          <Button style={{position: 'relative', marginRight: '14px', marginTop: '5px'}} className={'pull-right'}
                  onClick={this.handleApplyFiltersBtn}>Применить</Button>
          <div className="clearfix"/>
        </Row>
      ) : null;
      if (filters.length > 0) {
        while (filters.length > 0) {
          switch (filters.shift()) {
            case 'tags': {
              searches.push(
                <Select.Creatable
                  multi
                  value={this.state.filters.tags}
                  placeholder={'Фильтрация тестов по тегам...'}
                  menuStyle={{display: 'none'}}
                  arrowRenderer={null}
                  options={[]}
                  shouldKeyDownEventCreateNewOption={key => key.keyCode = !188}
                  promptTextCreator={name => name}
                  onChange={this.handleSearchTagCreation}
                />
              );
              break;
            }

            case 'as': {
              searches.push(
                <Select
                  className='test-filter'
                  options={sysToSearchThrough}
                  placeholder={'Фильтрация тестов по АС...'}
                  onChange={this.handleSysFilterInput}
                  value={this.state.filters.systems}
                />
              );
              break;
            }

            case 'stand': {
              searches.push(
                <Select
                  className='test-filter'
                  options={this.props.stands}
                  placeholder={'Фильтрация тестов по контуру...'}
                  onChange={this.handleStandsFilterInput}
                  value={this.state.filters.stands}
                />
              );
              break;
            }

            default:
              break;
          }

        }
      }
      searches.push(applyFiltersBtn);
      return searches;
    };
  }
}

export default FilterTest
