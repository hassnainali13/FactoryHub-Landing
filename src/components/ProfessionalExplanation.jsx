import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ProfessionalExplanation({ onBack }) {
  const [showWorkflow, setShowWorkflow] = useState(true);

  const workflowPoints = [
    "User signs up and is redirected to login.",
    "On login, system checks if user has a workspace.",
    "If not, show options to Join or Create Workspace.",
    "Creating workspace sends request to superadmin.",
    "Pending approval shows pending screen.",
    "Once approved, user becomes workspace admin/head.",
    "Admin creates departments; initially disabled.",
    "Joining workspace requires code verification and preview.",
    "Selecting a disabled department sends request to admin.",
    "Multiple users can request same department role; only one accepted.",
    "Approved request activates user with role and dashboard access.",
    "Rejected request keeps user independent.",
    "If department has head, new users request staff role.",
    "Staff limits enforced; extra requests fail.",
    "Pending requests show on login until processed.",
    "Approved workspace grants dashboard access.",
    "Active departments update assigned roles.",
    "Full department blocks new requests.",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white text-center relative overflow-hidden px-4 sm:px-6 md:px-16"
    >
      <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 text-gray-900">
        Workflow Overview
      </h3>

      {/* Workflow Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-full sm:max-w-3xl md:max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-200 hover:shadow-blue-200 transition-shadow"
      >
        {/* Toggle Header */}
        <div
          onClick={() => setShowWorkflow(!showWorkflow)}
          className="flex items-center justify-between cursor-pointer py-3 px-3 sm:px-4 border-b border-gray-200 hover:bg-gray-50 rounded-xl transition"
        >
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold">
            Workflow Overview (Concise & Clear)
          </h4>
          <span className="text-blue-500">
            {showWorkflow ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
          </span>
        </div>

        {/* Workflow List */}
        <AnimatePresence>
          {showWorkflow && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 list-decimal list-inside space-y-2 sm:space-y-3 text-gray-700 text-left text-sm sm:text-base"
            >
              {workflowPoints.map((point, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: "#2563EB" }}
                  className="transition-colors cursor-default"
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}
