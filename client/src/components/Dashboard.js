import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Segment,
  Header,
  Dimmer,
  Loader,
  List
} from 'semantic-ui-react';
import axios from 'axios';

class Dashboard extends Component {
  state = { items: [] };

  componentDidMount() {
    axios.get('/api/menu_items')
      .then( res => {
        this.setState({ items: res.data })
        console.log(res)
      })
      .catch( err => {
        console.log(err);
    });
  }

  displayItems = () => {
    return this.state.items.map( item => {
      return(
        <List.Item>
          <Link to={`/menu_items/${item.id}`}>
            {item.name}
          </Link>
        </List.Item>
      )
    });
  }

  itemsLoader() {
    return(
      <Dimmer active style={styles.dimmer}>
        <Loader>Loading Menu...</Loader>
      </Dimmer>
    )
  }

  addItem = (item) => {
    this.setState({ items: [item, ...this.state.items] });
  }

  render() {
    return(
      <Segment basic>
      { this.state.items.length > 0 ?
        <List>
          {this.displayItems()}
        </List> :
        this.itemsLoader()
      }
      </Segment>
    )
  }
}

const styles ={
  dimmer: {
    height: '100vh',
  },
}

export default Dashboard;
