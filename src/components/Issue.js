import React from 'react';

export default function Issue({ createdAt, title, number, body }) {
  return (
    <div className='issue'>
      <div> Issue #{number} </div>
      <div> Created at: {createdAt} </div>
      <div> Title: {title} </div>
      <div> Description: {body} </div>
    </div>
  )
}