import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import orange from '@material-ui/core/colors/orange';

const TabContainer = ({ children, dir }) => {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

class ModalDescription extends PureComponent {

  state = {
    value: 0,
  };
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render () {
    const { classes, theme } = this.props;
    return (
      <div style={{margin: 40}} className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#EE993B"
              }
            }}
            variant="fullWidth"
            inkBarStyle={{background: 'green'}}
          >
            <Tab label="Descripcion" />
            <Tab label="Momentos" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
        <TabContainer dir={theme.direction}>Item One</TabContainer>
        <TabContainer dir={theme.direction}>Item Two</TabContainer>
      </SwipeableViews>
    </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ModalDescription)