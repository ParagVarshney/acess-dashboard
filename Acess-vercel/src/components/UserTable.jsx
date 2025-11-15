import React from "react";

import colors from "../constants/colors";


const UserTable = ({ users }) => {
  const getRoleColor = (role) => {
    const map = {
      "Super Admin": "#ef4444",
      Moderator: "#3b82f6",
      "Operations Manager": "#a855f7",
      "Support Agent": "#22c55e",
      "Creator Ops Manager": "#14b8a6",
      "Finance Team": "#f97316",
      Analyst: "#8b5cf6",
      "Tech QA": "#0ea5e9",
    };
    return map[role] || "#4b5563";
  };

  return (
    <table
      className="w-full text-center"
      style={{ tableLayout: "fixed" }}
    >
      <thead style={{ color: colors.textSecondary }}>
        <tr className="text-sm">
          <th className="pb-3 w-[120px]">User ID</th>
          <th className="pb-3 w-[160px]">Name</th>
          <th className="pb-3 w-[260px]">Email</th>
          <th className="pb-3 w-[180px]">Role</th>
          <th className="pb-3 w-[120px]">Status</th>
          <th className="pb-3 w-[150px]">Created</th>
          <th className="pb-3 w-[80px]">Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => {
          const roleName = user.roleRef?.roleName || "Unknown";

          return (
            <tr
              key={user._id}
              className="text-sm border-t"
              style={{ borderColor: colors.cardBorder }}
            >
              <td className="py-4">{user.userId}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td>
                <span
                  className="px-3 py-1 rounded-lg text-xs font-medium"
                  style={{
                    backgroundColor: `${getRoleColor(roleName)}33`,
                    color: getRoleColor(roleName),
                  }}
                >
                  {roleName}
                </span>
              </td>

              <td>
                <span
                  className="px-3 py-1 rounded-lg text-xs font-medium capitalize"
                  style={{
                    backgroundColor: `${colors.warning}33`,
                    color: colors.warning,
                  }}
                >
                  active
                </span>
              </td>

              <td>
                {new Date(user.createdAt).toISOString().split("T")[0]}
              </td>

              <td>
                <div
                  className="cursor-pointer text-xl"
                  style={{ color: colors.textSecondary }}
                >
                  ⋮
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>

      {/* {users.length === 0 && (
        <p
          className="text-center py-6 text-sm"
          style={{ color: colors.textSecondary }}
        >
          No users found.
        </p>
      )} */}
    </table>
  );
};

export default UserTable;

