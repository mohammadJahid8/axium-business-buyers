import Back from '@/components/global/back';
import { FileText } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Ultimate Due Diligence Guide When Buying A Business In Australia',
  description:
    'The ultimate due diligence guide for buying a business in Australia. Learn how to verify financials, legal risks, and operational viability.',
  openGraph: {
    title:
      'The Ultimate Due Diligence Guide When Buying A Business In Australia',
    description:
      'The ultimate due diligence guide for buying a business in Australia. Learn how to verify financials, legal risks, and operational viability.',
    url: 'https://axiumbusinessbuyers.com.au/blog/ultimate-due-diligence-guide',
    images: [
      {
        url: '/guide.png',
        width: 1200,
        height: 630,
        alt: 'The Ultimate Due Diligence Guide When Buying A Business In Australia',
      },
    ],
    type: 'article',
    publishedTime: '2025-11-15',
    authors: ['Axium Business Buyers'],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'The Ultimate Due Diligence Guide When Buying A Business In Australia',
    description:
      'The ultimate due diligence guide for buying a business in Australia.',
    images: ['/guide.png'],
  },
};

export default function BlogDetailPage() {
  const post = {
    title:
      'The Ultimate Due Diligence Guide When Buying A Business In Australia',
    readTime: '10 min read',
    publishedAt: '2025-11-15',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description:
      'The ultimate due diligence guide for buying a business in Australia. Learn how to verify financials, legal risks, and operational viability.',
    image: 'https://axiumbusinessbuyers.com.au/guide.png',
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Axium Business Buyers',
      url: 'https://axiumbusinessbuyers.com.au',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Axium Business Buyers',
      logo: {
        '@type': 'ImageObject',
        url: 'https://axiumbusinessbuyers.com.au/axium.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://axiumbusinessbuyers.com.au/blog/ultimate-due-diligence-guide',
    },
  };

  return (
    <div className='bg-background'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className='mx-auto px-4 sm:px-6 md:px-8 py-12 max-w-7xl'>
        <div className='relative w-full aspect-21/9 rounded-md overflow-hidden mb-6 md:mb-12 bg-muted'>
          <Image
            src='/guide.png'
            alt={post.title}
            width={1400}
            height={600}
            className='w-full h-full object-cover'
          />
        </div>

        <div className='space-y-6 mb-6 md:mb-12'>
          <div className='flex items-center gap-6'>
            <Back />
            <div className='flex items-center gap-2 text-sm text-muted-foreground font-medium'>
              <FileText className='w-4 h-4' />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-tight'>
            {post.title}
          </h1>
        </div>

        <div className='prose prose-lg max-w-none'>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Introduction: Due Diligence Is Where Deals Are Won Or Lost
          </h3>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            If valuation determines what a business is worth, due diligence
            determines whether the business should be bought at all.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            In the Australian business acquisition market, due diligence is the
            most critical, yet most underestimated phase of the buying process.
            It is where surface-level promises are tested against reality. It is
            where financial performance is verified, operational weaknesses are
            uncovered, legal risks surface, and future viability is truly
            understood.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Buyers who rush due diligence often inherit hidden liabilities,
            structural problems, or overestimated profits. Buyers who conduct
            disciplined, strategic due diligence gain clarity, leverage, and
            confidence and significantly improve their odds of long-term
            success.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            This guide breaks down what professional-grade due diligence looks
            like when buying a business in Australia, and how to approach it as
            a serious investor rather than an emotional purchaser.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            What Is Due Diligence In Business Acquisitions?
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Due diligence is a comprehensive investigation of a business’s
            financial, legal, operational, commercial and strategic position
            prior to purchase. Its purpose is not to find reasons to walk away,
            but to understand exactly what you are buying and what risks you are
            assuming.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            It answers the critical questions:
          </p>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Is the business performing as presented?
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Are profits sustainable?
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Are there hidden liabilities?
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              How dependent is the business on the owner?
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Is the business compliant with Australian regulations?
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Can the business grow or is it at its ceiling?
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Proper due diligence transforms uncertainty into informed
            decision-making.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Financial Due Diligence: Verifying The Numbers
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            This is the foundation of every acquisition and the area where most
            discrepancies are discovered.
          </p>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Key areas to analyse:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Profit & Loss statements (3–5 years)
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Balance sheets
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Tax returns and BAS statements
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Cash flow statements
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Bank reconciliations
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Debtor and creditor reports
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Inventory accuracy
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            What professionals look for:
          </h3>

          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Consistency of earnings over time
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Normalised profit accuracy
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Expense manipulation or owner add-backs
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Cash leakage
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Revenue concentration risk
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Margins compared to industry standards
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Discrepancies between internal reports and tax submissions are
            immediate red flags.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Legal Due Diligence: Protecting Against Hidden Exposure
          </h2>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Legal risk can destroy the value of an otherwise strong business.
            Every buyer must review:
          </p>

          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Existing contracts and leases
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Supplier agreements
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Employment agreements
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Customer contracts
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Pending litigation
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Compliance history
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Licences and permits
            </li>
          </ul>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Special attention should be given to:
          </p>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Unfair contract terms
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Early termination risks
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Lease clauses that restrict assignment
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Non-compete enforceability
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Dispute history
            </li>
          </ul>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            An experienced commercial lawyer is essential at this stage.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Operational Due Diligence: Understanding How The Business Really
            Runs
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Many businesses appear profitable but operate inefficiently or
            unsustainably.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Operational due diligence examines:
          </p>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Systems and processes
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Workflow efficiency
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Staff capability and dependency
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Technology infrastructure
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Supply chain stability
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Quality control practices
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Operating procedures and documentation
            </li>
          </ul>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            The key question is: Can this business function without the current
            owner being central to every process?
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            A business that cannot operate independently is risk-heavy and
            overvalued.
          </p>
          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Commercial And Market Due Diligence
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            This focuses on where the business sits within its industry and how
            future-proof it truly is
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Key considerations include:
          </p>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Market position and competitiveness
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Industry growth or decline trends
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Customer loyalty and satisfaction levels
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Brand reputation and market perception
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Threat of new entrants
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Price sensitivity of customers
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Owning a profitable business in a declining industry is not
            strategic, it is temporary.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Human Capital Due Diligence
          </h2>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            People drive performance. You must assess:
          </p>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Staff turnover history
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Skills and experience levels
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Employee satisfaction
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Key person dependency
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Employment liabilities
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Award compliance and entitlements
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Unexpected staff departures post-settlement can destabilise
            operations instantly
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Technology And Systems Audit
          </h2>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Modern businesses rely heavily on digital infrastructure. Areas to
            examine include:
          </p>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              CRM systems
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Accounting platforms
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              POS systems
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Data security
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Integration between systems
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Cyber risk exposure
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Automation capabilities
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Outdated systems restrict scalability and increase operational
            costs.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Compliance And Regulatory Review
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Non-compliance can result in fines, operational shutdowns, or
            reputational damage.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Review includes:
          </p>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Industry regulations
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Workplace health and safety
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Environmental policies
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Local council approvals
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Licensing requirements
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Insurance coverage adequacy
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Compliance should always be confirmed, never assumed.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Red Flags Discovered During Due Diligence
          </h2>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Red flags are warning signs that indicate potential issues or risks.
            They can range from minor discrepancies to major deal-breakers.
          </p>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Inconsistent financial reporting
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Cash payments not recorded
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Lack of formal contracts
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              High owner dependence
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              High staff dissatisfaction
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Customer complaints or poor reviews
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Pending regulatory breaches
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Declining revenue trends
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            These do not always mean walk away, but they must influence pricing
            and deal structure.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            How Due Diligence Impacts Deal Structure
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Smart buyers use due diligence findings to:
          </p>

          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Renegotiate purchase price
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Implement earn-out structures
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Introduce retention clauses
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Adjust settlement terms
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Link performance KPIs
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Due diligence is not just investigative, it is strategic leverage.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Why DIY Due Diligence Is Risky
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Many buyers attempt to conduct due diligence alone, relying on
            instinct or limited financial knowledge. This often results in
            oversight of:
          </p>

          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Hidden liabilities
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Structural weaknesses
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Artificially inflated profits
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Compliance risks
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Legal vulnerabilities
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            The cost of professional diligence is always lower than the cost of
            a poor acquisition.
          </p>
          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            The Role Of A Business Buyers Agent In Due Diligence
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            A specialist buyers agent coordinates and oversees:
          </p>

          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Professional accountants
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Solicitors
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Industry consultants
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Financial analysts
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Risk assessors
            </li>
          </ul>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            They ensure the process is structured, objective, disciplined and
            commercially sound.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            This level of oversight reduces exposure and increases certainty.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Settlement Is Not The Finish Line. It’s The Transition Point
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Due diligence extends into structured handover plans, operational
            integration, and knowledge transfer strategies.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            A strong transition plan includes:
          </p>

          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Vendor training period
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Systems onboarding
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Staff introduction strategy
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Operational documentation transfer
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Client transition protocols
            </li>
          </ul>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            This protects continuity and long-term performance.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Final Thought: Due Diligence Is Your Insurance Policy
          </h2>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            The smartest business buyers are not deal-hungry, they are
            risk-aware and precision-focused.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Due diligence is not about delaying the purchase. It is about
            protecting capital, ensuring sustainability, and securing strategic
            advantage.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            When conducted properly, it transforms buying a business from a
            gamble into a calculated, intelligent investment decision.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            If you want your acquisition process guided by structure, clarity
            and commercial intelligence, Axium Business Buyers ensures every
            element of due diligence is professionally managed so your
            investment is protected from day one.
          </p>
        </div>
      </article>
    </div>
  );
}
