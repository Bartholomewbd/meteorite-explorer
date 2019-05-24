import React from "react";

const MeteorList = ({ meteorites }) => {
  return (
    <div>
      <table className="table table-hover table-active ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Mass(g)</th>
            <th>Year</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {meteorites.map((meteor, i) => {
            const classes = [];
            if (i % 2 === 0) {
              classes.push("table-primary");
            } else {
              classes.push("table-secondary");
            }
            let year;
            if (meteor.year) {
              year = meteor.year.slice(0, 4);
            }
            return (
              <tr className={classes} key={meteor.id}>
                <td>{meteor.name}</td>
                <td>{meteor.id}</td>
                <td>{meteor.mass}</td>
                <td>{year}</td>
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
