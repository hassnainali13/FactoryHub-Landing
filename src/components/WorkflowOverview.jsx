// src/components/WorkflowOverview.jsx
import React, { useState } from "react";
import { FaInfoCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function WorkflowOverview() {
  const [open, setOpen] = useState(false);

  const workflowPoints = [
    "Signup → Back to Login button show hota hai",
    "Login ke baad check workspace exist karta hai ya nahi",
    "No workspace → Join Workspace / Create Workspace options",
    "Create Workspace → form fill → pending approval → approval ke baad admin ban jata hai",
    "Join Workspace → workspace code verify → preview show (name, logo, manager, departments)",
    "Admin creates departments → initial status: disabled",
    "User selects department → disabled → Send Request → pending → Manager Approval",
    "Approved → status active → user assigned role",
    "Rejected → user independent",
    "Employee limit enforced → extra requests fail",
    "Pending request → pending screen on login",
    "Workspace approved → dashboard access",
    "Department active → assigned role",
    "Department full → request cannot be sent",
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 rounded-3xl shadow-xl max-w-4xl mx-auto px-8">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between cursor-pointer py-4 border-b border-gray-300"
      >
        <h3 className="text-2xl font-bold flex items-center space-x-2">
          <FaInfoCircle className="text-blue-500" />
          <span>Workflow Overview (Concise & Clear)</span>
        </h3>
        <span className="text-blue-500">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {open && (
        <ul className="mt-6 list-disc list-inside space-y-3 text-gray-700">
          {workflowPoints.map((point, i) => (
            <li key={i} className="hover:text-blue-600 transition-colors">
              {point}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}