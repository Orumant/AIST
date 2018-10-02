import React from 'react';
import {
  arrayToOptions,
  filterPropertyFromObjects,
  getOptionByLabel,
  optionsToArray
} from "../../../../utils/filters/index";
import PageNavigation from "./PageNavigation";
import TestAs from "./CommonData/TestAs";
import TestStands from "./CommonData/TestStands";
import TestName from "./CommonData/TestName";
import CommonDataInfo from "./CommonData/CommonDataInfo";
import {styles} from "../style";
import {withStyles} from "@material-ui/core/styles/index";
import Paper from "@material-ui/core/Paper";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";


class CommonData extends React.Component {

  state = {
    test_name: '',
    a_system: '',
    stands: [],
    isError: false,
  };

  changeInput = (prop, val) => {
    this.setState({[prop]: val})
  };

  getTestData = () => {
    const {test_name, a_system, stands} = this.state;
    return {
      test_name: test_name ? test_name : null,
      a_system: a_system ? a_system.label : null,
      stands: optionsToArray(stands),
    }
  };

  componentDidMount() {
    this.updateData();
  }

  componentDidUpdate() {
    const {data, dataUpdated, needUpdate, isCreation} = this.props;
    if (needUpdate && (isCreation || data.test_name) && data.test_name !== this.state.test_name) {
      this.updateData();
      dataUpdated();
    }
  };

  updateData = () => {
    const {data, asAll, standsAll} = this.props;
    const {test_name, a_system, stands} = data;
    const standList = arrayToOptions(filterPropertyFromObjects(standsAll, 'code'));
    const asList = arrayToOptions(filterPropertyFromObjects(asAll, 'code'));

    const initialState = {
      test_name: test_name ? test_name : '',
      a_system: a_system ? getOptionByLabel(a_system, asList) : '',
      stands: stands ? stands.map(stand => {
        const option = getOptionByLabel(stand, standList);
        return option ? option : {label: stand, value: stand}
      }) : [],
    };
    this.setState(initialState);
  };

  onNext = (data) => {
    const {handleNext} = this.props;
    if (this.state.test_name === null || this.state.a_system === null ||
      this.state.test_name.length === 0 || this.state.a_system.length === 0
    ) {
      this.setState({isError: true})
    }
    else {
      this.setState({isError: false});
      handleNext(data)
    }
  };

  render() {
    const {test_name, a_system, stands, isError} = this.state;
    const {classes, asAll, standsAll, handleNext, ...handleNavigation} = this.props;
    const item = (label, form) => <div className={'input-item-form'}>{label}{form}</div>;

    return [
      <Paper className={classes.stepContent} key={'common-data-page'}>
        <Grid container>
          <Grid item xs={6}>
            {item('Название*', <TestName
              key={'common-data-test-name-field'}
              value={test_name}
              onChange={e => this.changeInput('test_name', e.target.value)}
              isError={isError}/>)}
            {item('АС*', <TestAs
              key={'common-data-test-as-field'}
              as={a_system}
              asAll={asAll}
              isError={isError}
              onChange={option => this.changeInput('a_system', option)}/>)}

            {item('Контур', <TestStands
              key={'common-data-test-stand-field'}
              stands={stands}
              standsAll={standsAll}
              onChange={option => this.changeInput('stands', option)}/>)}
          </Grid>
          <CommonDataInfo key={'common-data-info'} classes={classes}/>
        </Grid>
      </Paper>,
      <PageNavigation key={'navigation-common-data'} test_data={this.getTestData()}
                      handleNext={this.onNext} {...handleNavigation}/>
    ]
  }
}

CommonData.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(CommonData);
