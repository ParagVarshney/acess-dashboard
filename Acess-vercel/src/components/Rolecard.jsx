import { Pencil } from "lucide-react";
import React from "react";

import colors from "../constants/colors";
import Button from "./ui/Button";


export default function RoleCard({ role }) {
  return (
    <div
      className="rounded-2xl border p-6 flex flex-col gap-5"
      style={{ borderColor: colors.cardBorder, background: colors.cardBg }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold" style={{ color: colors.textPrimary }}>
            {role.title}
          </h2>

          <p className="text-sm mt-1" style={{ color: colors.textSecondary }}>
            {role.totalDashboards} Dashboard
          </p>
        </div>

        {/* Status Badge */}
        <span
          className="px-4 py-1 rounded-lg text-sm font-medium"
          style={{
            backgroundColor:
              role.status === "active"
                ? colors.success
                : role.status === "inactive"
                ? colors.danger
                : colors.warning,
            color: "#000",
          }}
        >
          {role.status === "active" ? "Active" : "Inactive"}
        </span>
      </div>

      {/* Dashboard List */}
      <div className="flex flex-col gap-4">
        {role.dashboards.map((d, index) => (
          <div
            key={index}
            className="rounded-xl p-4"
            style={{ background: colors.secondary }}
          >
            <p
              className="font-semibold text-base"
              style={{ color: colors.textPrimary }}
            >
              {d.name}
            </p>

            <p
              className="text-sm mt-1"
              style={{ color: colors.textSecondary }}
            >
              {d.tabs} tabs accessible
            </p>
          </div>
        ))}
      </div>

      {/* Edit Button */}
      <Button
        variant="secondary"
        fullWidth
        icon={Pencil}
        className="rounded-xl"
      >
        Edit
      </Button>
    </div>
  );
}

