import React from "react";

import colors from "../constants/colors";
import RoleCard from "./RoleCard";
import Button from "./ui/Button";


export default function RoleManagement() {
  const roles = [
    {
      title: "Super Admin",
      status: "active",
      totalDashboards: "All Dashboards",
      dashboards: [
        { name: "Moderation and Customer Support Dashboard", tabs: 9 },
        { name: "Operations Dashboard", tabs: 17 },
        { name: "Creator Onboarding and Payouts Dashboard", tabs: 8 },
      ],
    },
    {
      title: "Moderator",
      status: "active",
      totalDashboards: 1,
      dashboards: [{ name: "Moderation and Customer Support Dashboard", tabs: 5 }],
    },
    {
      title: "Support Agent",
      status: "active",
      totalDashboards: 1,
      dashboards: [{ name: "Moderation and Customer Support Dashboard", tabs: 2 }],
    },
  ];

  return (
    <div className="p-10" style={{ background: colors.primary }}>
      {/* Page Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: colors.textPrimary }}>
            Role Management
          </h1>
          <p className="text-base mt-1" style={{ color: colors.textSecondary }}>
            Create, edit, and manage roles with dashboard and tab-level permissions
          </p>
        </div>

        <Button
          variant="custom"
          bg={colors.accent}
          text={colors.primary}
          size="md"
          motionEffect={true}
        >
          + Create New Role
        </Button>
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {roles.map((role, index) => (
          <RoleCard key={index} role={role} />
        ))}
      </div>
    </div>
  );
}

