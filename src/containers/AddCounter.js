import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../actions';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
class AddCounter extends Component {
  constructor(props) {
        super(props);
      }
   render() {
     return (
           <div className="container">
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <Button className="button is-primary" variant="raised" color="primary" onClick={(e) => {e.preventDefault();this.props.dispatch(addCounter())}}>Add</Button>
                </div>
              </div>
            </form>
            </div>
     )
   }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(addCounter, dispatch) }
}
export default connect(mapDispatchToProps)(AddCounter);
