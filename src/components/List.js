import React from 'react';
import Issue from './Issue';

export default class List extends React.Component {
  render(){
    const { repo, user } = this.props;
    return (
      <div className='list'>
        Repository: {user}
        {
          repo.map((item, index) => 
            <Issue 
              key={index} 
              createdAt={item.created_at} 
              title={item.title}
              body={item.body}
              number={item.number}
            />
          )
        }
      </div>
    )
  }
}