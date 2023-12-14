import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
        <div >
      <div className="min-h-screen flex items-center flex-column justify-center bg-gray-50 ">
        <h2 className="block text-gray-700 text-lg font-bold mb-2 ">NotFound</h2>
        
        
        
          <a
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href='/login'
          >
            Login
          </a>
        </div>
      </div>
    );
  }
}

export default NotFound;
