import React from "react";
import supplements from "../JSON/supplements.json";

function SupplementWindow() {
  const DisplayData = supplements.map((info) => {
    return (
      <tr>
        <td>{info.title}</td>
        <td>{info.group}</td>
      </tr>
    );
  });

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>title</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default SupplementWindow;
