import React, { useState } from 'react';

const Accordian = () => {
    const accordionData = [
        {
            title: 'Legal Consultation',
            description: 'Expert advice to help you understand your rights and navigate complex legal situations.',
            expandedContent: 'Legal consultation involves providing expert legal advice tailored to your specific needs. It helps you understand your rights, obligations, and options in various situations, enabling you to make informed decisions. This service is invaluable for addressing uncertainties or clarifying legal complexities, such as employment issues, property disputes, or regulatory concerns.',
        },
        {
            title: 'Document Drafting and Review:',
            description: 'Preparation and review of contracts, agreements, wills, and other legal documents.',
            expandedContent: 'This service focuses on preparing and thoroughly reviewing legal documents to ensure their accuracy, clarity, and enforceability. Whether it’s drafting contracts, agreements, or wills, or scrutinizing existing documents, it protects your interests by avoiding potential errors and ambiguities.',
        },
        {
            title: 'Dispute Resolution:',
            description: 'Assistance with negotiations, mediation, and arbitration to resolve conflicts effectively.',
            expandedContent: 'Dispute resolution offers strategies to resolve conflicts effectively through negotiation, mediation, or arbitration. This approach helps parties reach agreements without resorting to lengthy and expensive court battles, making it ideal for addressing personal, family, or business disputes.',
        },
        {
            title: 'Litigation and Representation: ',
            description: 'Litigation and Representation: Aggressive and strategic representation in court to protect your interests.',
            expandedContent: 'When disputes escalate to legal proceedings, litigation and representation provide strategic advocacy in court. This service ensures that your rights are protected and that you have a dedicated professional fighting for your interests in legal disputes, lawsuits, or criminal cases..',
        },
        {
            title: 'Compliance and Advisory Services:',
            description: ' Guidance on regulatory compliance, risk management, and legal strategy.',
            expandedContent: 'Compliance and advisory services guide individuals and businesses in adhering to applicable laws and regulations. By focusing on risk management and strategic planning, this service helps clients navigate complex legal frameworks, whether in data protection, tax compliance, or regulatory changes.',
        },
        {
            title: 'Tailored Solutions: ',
            description: 'We customize our approach to fit the unique circumstances of each client.',
            expandedContent:'Tailored solutions recognize that every client’s situation is unique. Legal professionals work to understand your specific circumstances and customize their approach to address your needs effectively. This service is particularly useful for specialized cases like structuring business deals, estate planning, or resolving niche legal challenges.',
        },
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="accordian-read-more">
            {accordionData.map((item, index) => (
                <div className="block-item-text" key={index}>
                    <div className="read-more-wrap">
                        <h3 className="title">{item.title}</h3>
                        <p className="text">{item.description}</p>
                        {expandedIndex === index && (
                            <div className="text read-more-target content-list">
                                {item.expandedContent}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => toggleReadMore(index)}
                        className="read-more-trigger btn-underline"
                    >
                        {expandedIndex === index ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Accordian;
