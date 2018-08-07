import React from 'react'
import Select from 'react-select'

class FilterChain extends React.Component {

  state = {
    selectedTag: [],
    selectedMarker : null,
    isTagFilter: true,
    isMarketFiler: true,
  }

  componentDidMount() {
    this.props.fetchChainTemplatesNEW();
  }


  MarkerFilter = () => {
    const {selectedMarker} = this.state;
    const {chains} = this.props
    const markers = chains.map((chain) => chain.marker).filter((marker, ind, array) => array.indexOf(marker) === ind);
    const options = markers.map((marker, index) => {return {label: marker, value: index}});
    return (
    <Select
      className='test-filter'
      options={options}
      wrapperStyle={{position:'relative'}}
      placeholder={'Поиск данных по маркеру'}
      onChange={this.changeMarker}
      value={selectedMarker}
    />
    )
  }

  changeTag = (tag) => {
    this.setState({selectedTag: tag})
  }

  changeMarker = (marker) => {
    this.setState({selectedMarker: marker})
  }

  TagFilter = () => {
    const {selectedTag} = this.state;
    const {tests} = this.props
    const tags = []
    tests.map((test) => Object.keys(test.tag_names).map(
      (tag_type) => test.tag_names[tag_type].map(
        (name) => tags.indexOf(name) === -1 ? tags.push(name): null)))
    const options = tags.map((marker, index) => {return {label: marker, value: index}});

    return (
        <Select
          multi
          value={selectedTag}
          placeholder={'Поиск данных по тегам'}
          options={options}
          onChange={this.changeTag}
        />
        )
  }

  renderSearches = () => {
    return (
      <div>
        {this.state.isMarketFiler ? this.MarkerFilter(): null}
        {this.state.isTagFilter ? this.TagFilter(): null}
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderSearches()}
      </div>
    )
  }
}

export default FilterChain
