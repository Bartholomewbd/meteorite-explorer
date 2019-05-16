import React from "react";

const MeteorList = ({ meteorites }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Mass(g)</th>
            <th>Year</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
          {meteorites.map(meteor => {
            return (
              <tr key={meteor.id}>
                <td>{meteor.name}</td>
                <td>{meteor.id}</td>
                <td>{meteor.mass}</td>
                <td>{meteor.year}</td>
                <td>{meteor.reclat}</td>
                <td>{meteor.reclong}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MeteorList;
