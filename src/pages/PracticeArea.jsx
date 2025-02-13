import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PageBanner from '../components/common/PageBanner';
import { useLocation } from 'react-router-dom';

const PracticeArea = () => {
  const location = useLocation();
  const pathname = location.pathname.startsWith('/')
    ? location.pathname.substring(1)
    : location.pathname;

  // Object to store practice area details
  const practiceAreas = [
    {
      "title": "civil law",
      "description": "Civil law deals with disputes between individuals, organizations, or between the two, where compensation may be awarded to the victim. It encompasses areas such as contracts, property, family, and tort law. Civil law focuses on resolving non-criminal conflicts, ensuring rights and obligations are upheld, and providing remedies for those affected."
    },
    {
      "title": "criminal law",
      "description": "Criminal law involves rules and statutes that define conduct prohibited by the state because it threatens public safety and welfare. It includes prosecuting individuals or entities accused of crimes such as theft, assault, fraud, or murder. Criminal law seeks to punish offenders, deter criminal behavior, and provide justice to victims."
    },
    {
      "title": "business and corporate law",
      "description": "Business and corporate law encompasses the legal aspects of forming, operating, and dissolving businesses. This includes corporate governance, mergers and acquisitions, compliance with regulations, and resolving disputes related to business activities."
    },
    {
      "title": "family law",
      "description": "Family law deals with legal matters related to familial relationships, including marriage, divorce, child custody, adoption, and issues of inheritance. It seeks to address disputes while prioritizing the well-being of individuals involved."
    },
    {
      "title": "intellectual property law",
      "description": "Intellectual property law focuses on protecting the rights of creators over their inventions, designs, trademarks, and artistic works. It ensures fair use and prevents unauthorized exploitation of intellectual assets."
    },
    {
      "title": "taxation law",
      "description": "Taxation law involves the rules and regulations governing the imposition of taxes on individuals and businesses. It includes advice on compliance, tax planning, and resolving disputes with tax authorities."
    },
    {
      "title": "consumer law",
      "description": "Consumer law protects the rights of consumers against unfair trade practices, defective goods, and deceptive advertising. It ensures fair treatment and access to remedies in case of grievances."
    },
    {
      "title": "contract law",
      "description": "Contract law governs the creation, interpretation, and enforcement of agreements between parties. It ensures legal remedies for breach of contract and upholds the obligations of all involved parties."
    },
    {
      "title": "dispute law",
      "description": "Dispute law focuses on resolving conflicts between parties through negotiation, mediation, arbitration, or litigation. It aims to achieve fair outcomes while maintaining the rule of law."
    },
    {
      "title": "labour and employment law",
      "description": "Labour and employment law regulates the relationship between employers and employees, including issues like workplace rights, discrimination, wage disputes, and collective bargaining."
    },
    {
      "title": "foreign investment law",
      "description": "Foreign investment law deals with the legal framework for investments by foreign entities, including regulatory compliance, tax implications, and protection of investor rights."
    },
    {
      "title": "immigration law",
      "description": "Immigration law governs the legal aspects of entry, residency, and citizenship for individuals. It includes visa processes, asylum applications, and addressing legal issues related to immigration."
    },
    {
      "title": "litigation",
      "description": "Litigation involves representing clients in court to resolve disputes. It covers all stages of the legal process, from filing a case to appealing a decision."
    },
    {
      "title": "cyber law",
      "description": "Cyber law addresses legal issues related to the internet, digital communications, and technology. It includes data protection, cybersecurity, online fraud, and intellectual property rights in the digital domain."
    },
    {
      "title": "writ",
      "description": "Writ law pertains to the filing and adjudication of writ petitions, seeking remedies such as habeas corpus, mandamus, or certiorari to protect constitutional or statutory rights."
    }
    
  ];

  return (
    <div className='practice-page'>
      <PageBanner title={pathname} />
      <Header />
      <div className='container card-container flex-c-fs py-10 gap-8'>
        {practiceAreas.map((area, index) => (
          <div key={index} className='practice-card text-center'>
            <h2 className='practice-card-title '>{area.title}</h2>
            <p className='practice-card-text'>{area.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PracticeArea;
