/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const index_github = () => {
  return async dispatch => {
     axios.get('https://api.github.com/users/brenonogueira')
      .then(res => {
        // console.log(res.data)
        dispatch(add_data_index_github(res.data))
      })
  }
}

const add_data_index_github = (values) => { return { type: 'INDEX_GITHUB', values } }
const add_data_show_github = values => { return { type: 'ADD_SHOW_GITHUB', values }; };

export default {
  index_github,
  add_data_index_github,
  add_data_show_github,
};


