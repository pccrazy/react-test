import React, { useState } from "react";

const UserCard = props => {
  const [isConnected, SetConnected] = useState(props.Params.Status == 1);
  console.log(props);

  return (
    <div className="m-2">
      <div class="bg-white rounded shadow-md">
        <div class="px-4 py-4">
          <div class="mt-1 font-bold text-xl"> {props.Params.EmployeeName}</div>
          <p class="mt-1 text-gray-700 text-base">
            {props.Params.CompanyNumber}
          </p>
          <div class="mt-1">
            {isConnected && (
              <span class="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700">
                Connected
              </span>
            )}

            {!isConnected && (
              <span class="bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700">
                Disconnected
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
