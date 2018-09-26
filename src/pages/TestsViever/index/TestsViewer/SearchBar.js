import React,{Component} from 'react';
import FilterSidebar from "../../../../containers/_global/FilterSidebar";
import FilterAS from "../../../_global/filters/FilterAS";
import FilterStand from "../../../../containers/_global/FilterStand";
import FilterTag from "../../../_global/filters/FilterTags";

class SearchBar extends Component {
  render() {
    const {tests, ...others} = this.props;
    const filters = [
      <FilterAS name='asystems' key={'system-filter'} tests={tests}/>,
      <FilterStand name='stand' key={'stand-filter'}/>,
      <FilterTag name='tags' key={'tag-filter'} tests={tests} />,
    ];

    return (
      <FilterSidebar content={filters} {...others}/>
    )
  }
}

export default SearchBar;
