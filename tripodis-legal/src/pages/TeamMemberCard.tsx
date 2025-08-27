import React from "react";
import { Link } from "react-router";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { Card, Button } from "../components/ui";
import type { TeamMember } from "../types/People";
import { FaArrowRight } from "react-icons/fa6";

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <Card hover={true} className="overflow-hidden">
      {/* Image Container */}
      <div className="aspect-square">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>

      {/* content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          {member.name}
        </h3>
        <p className="text-gray-600 mb-4">{member.position}</p>

        {/* Action */}
        <div className="flex items-center justify-between">
          {/* Socials */}
          <div className="flex space-x-3">
            {member.email && (
              <Link
                to={`mailto: ${member.email}`}
                className="w-10 h-10 bg-blue/20 hover:bg-blue-500/30 backdrop-blur-sm border border-blue/20 rounded-full flex items-center justify-center transition-all duration-200"
                aria-label={`Email ${member.name}`}
              >
                <MdOutlineEmail className="w-4 h-4 text-blue-400" />
              </Link>
            )}
            {member.linkedin && (
              <Link
                to={member.linkedin}
                className="w-10 h-10 bg-blue/20 hover:bg-blue-500/30 backdrop-blur-sm border border-blue/30 rounded-full flex items-center justify-center transition-all duration-200"
                aria-label={`${member.name}'s LinkedIn Profile`}
              >
                <FaLinkedinIn className="w-4 h-4 text-blue-400" />
              </Link>
            )}
          </div>

          {/* Profile BTN */}
          <Link to={`/team/${member.id}`}>
            <Button
              variant="ghost"
              size="sm"
              icon={FaArrowRight}
              iconPosition="right"
              className="text-sm"
            >
              View Profile
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
