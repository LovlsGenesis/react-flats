// import React, { Component } from 'react';
// import Flat from './flat.jsx'

// class FlatList extends Component {
//   renderFlats = () => {
//     return this.props.flats.map(flat => <Flat name={flat.name} price={flat.price} description={flat.description} image={flat.imageUrl} key={flat.name} selectFlat={props.selectFlat}/>);
//   }

//   render() {
//     return (
//       <div className="flat-list">
//         {this.renderFlats()}
//       </div>
//     );
//   }
// }

// export default FlatList;

import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}
        />
      );
    });
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default FlatList;
