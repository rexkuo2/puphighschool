import React from 'react';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
}

interface TeamProps {
    members: TeamMember[];
}

const Team: React.FC<TeamProps> = ({ members }) => {
    return (
        <div className="team">
            <h1>Meet Our Team</h1>
            <div className="team-members">
                {members.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.image} alt={member.name} />
                        <h2>{member.name}</h2>
                        <h3>{member.role}</h3>
                        <p>{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;