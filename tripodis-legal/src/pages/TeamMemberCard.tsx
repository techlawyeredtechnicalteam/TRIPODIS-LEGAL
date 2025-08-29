import React from "react";
import { Link } from "react-router";
import { Card, Button } from "../components/ui";
import type { TeamMember } from "../types/People";
import { MdKeyboardArrowRight } from "react-icons/md";

const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({
  member,
  index
}) => {
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
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          {member.name}
        </h3>
        <p className="text-gray-600 mb-4">{member.position}</p>

        {/* View Profile */}
        {index < 3 && (
          <div className="flex items-center justify-end">
            {/* Profile BTN */}
            <Link to={`/${member.href}`}>
              <Button
                variant="ghost"
                size="sm"
                icon={MdKeyboardArrowRight}
                iconPosition="right"
                className="text-sm cursor-pointer"
              >
                View Profile
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Card>
  );
};

export default TeamMemberCard;
