import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import CreateUserModal from "../components/CreateUserModal";
import RoleManagement from "../components/RoleManagement";
import UserDirectory from "../components/UserDirectory";
import SettingsTabs from "../components/SettingsTab";
import StatsCard from "../components/StatsCard";
import AuditLogs from "../components/AuditLogs";
import Navbar from "../components/ui/Navbar";
import colors from "../constants/colors";


export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState("User Directory");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        role: "",
        department: "",
    });
    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log("New User Data:", formData);
        setIsModalOpen(false);
    };
    return (
        <div
            className="min-h-screen text-white"
            style={{ background: colors.gradientVertical }}
        >
            {/* FULL WIDTH NAVBAR */}
            <div style={{ width: "100vw" }}>
                <Navbar onCreateUser={() => setIsModalOpen(true)} onLogout={() => { localStorage.removeItem("token"); navigate("/login") }} />
            </div>

            {/* PAGE CONTENT */}
            <div className="p-6 ">
                <StatsCard />
                <SettingsTabs onTabChange={setSelectedTab} />
                {selectedTab === "User Directory" && <UserDirectory />}
                {selectedTab === "Role Management" && <RoleManagement/>}
                {selectedTab === "Audit Logs" && <AuditLogs/>}
                {selectedTab === "Permissions Matrix" && <div>Permissions Matrix Component</div>}

            </div>
            <CreateUserModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
                formData={formData}
                setFormData={setFormData}
            />
        </div>
    );
}
