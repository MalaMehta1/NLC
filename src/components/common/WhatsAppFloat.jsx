import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { contactData } from '../../data'

const WhatsAppFloat = () => {
  const href = contactData.whatsappUrl || `https://wa.me/977${contactData.phone}`

  return (
    <a
      href={href}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span className="whatsapp-float__pulse" aria-hidden="true" />
    </a>
  )
}

export default WhatsAppFloat
