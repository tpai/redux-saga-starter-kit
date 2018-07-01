import { connect } from 'react-redux';

import HelloReact from 'components/HelloReact';

function mapStateToProps(state) {
  return {
    state: state.state,
  };
}

export default connect(mapStateToProps)(HelloReact);
