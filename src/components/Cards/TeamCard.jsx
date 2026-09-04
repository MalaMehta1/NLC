import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { teamData } from '../../data'

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
}

const TeamCard = () => {
  return (
    <div className="team-card">
      {teamData.members.map((member) => (
        <article className="team-member" key={member.name}>
          <div className="team-member__media">
            <img src={member.image} alt={member.name} />
            <div className="team-member__overlay">
              <ul className="team-member__social">
                {member.social.map((item) => {
                  const Icon = socialIcons[item.platform]
                  if (!Icon) return null
                  return (
                    <li key={item.platform}>
                      <a
                        href={item.url}
                        className={`team-member__social-link is-${item.platform}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${item.platform}`}
                      >
                        <Icon />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="team-member__body">
            <span className="team-member__role">{member.role}</span>
            <h3 className="team-member__name">{member.name}</h3>
            <a href={`tel:${member.phone}`} className="team-member__phone">
              <FaPhoneAlt />
              <span>{member.phone}</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}

export default TeamCard
