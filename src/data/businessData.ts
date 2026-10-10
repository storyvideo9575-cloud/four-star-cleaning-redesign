import heroImg from '../assets/images/hero_commercial_cleaning_1791621255068.jpg';
import officeImg from '../assets/images/office_cleaning_facility_1791621274778.jpg';
import medicalImg from '../assets/images/medical_cleaning_facility_1791621291101.jpg';
import janitorialImg from '../assets/images/janitorial_floor_care_1791621307395.jpg';
import greenImg from '../assets/images/green_cleaning_eco_1791621321607.jpg';

export const IMAGES = {
  hero: heroImg,
  office: officeImg,
  medical: medicalImg,
  janitorial: janitorialImg,
  green: greenImg,
};

export const BUSINESS_INFO = {
  name: 'Four Star General Cleaning Service',
  shortName: 'Four Star General Cleaning Service',
  category: 'Commercial Cleaning and Janitorial Services',
  address: {
    street: '19 West 21st Street, Suite 601A',
    city: 'New York',
    state: 'NY',
    zip: '10010',
    neighborhood: 'Flatiron District / Chelsea',
  },
  phone: '(212) 741-9400',
  phoneRaw: '2127419400',
  hours: {
    office: 'Monday–Friday, 9:00 AM – 6:00 PM',
    service: '24 hours a day, 7 days a week',
  },
  staffing: 'Insured and bonded cleaning staff',
  experienceClaim: 'Over 35 Years of Commercial Cleaning Experience',
  experienceSummary: 'Serving commercial offices, healthcare facilities, schools, retail spaces, and corporate buildings across New York City.',
  serviceAreas: [
    { name: 'Manhattan', detail: 'Midtown, Downtown, Financial District, Flatiron, Hudson Yards, and Upper Manhattan' },
    { name: 'Brooklyn', detail: 'Downtown Brooklyn, DUMBO, Williamsburg, Brooklyn Navy Yard, and Sunset Park' },
    { name: 'Queens', detail: 'Long Island City, Astoria, Flushing, Jamaica, and commercial corridors' },
    { name: 'The Bronx', detail: 'South Bronx, Mott Haven, Port Morris, and regional commercial facilities' },
    { name: 'Wider New York City Area', detail: 'Custom commercial arrangements across Greater New York City' }
  ],
  verifiedIndustries: [
    {
      title: 'Commercial Corporate Offices',
      desc: 'Workstations, conference suites, common areas, executive boardrooms, and pantry facilities.'
    },
    {
      title: 'Medical & Dental Facilities',
      desc: 'Sanitization of waiting areas, clinical operatories, exam suites, and touchpoints.'
    },
    {
      title: 'Retail Stores & Boutiques',
      desc: 'Showrooms, fitting rooms, storefront glass, point-of-sale areas, and stockrooms.'
    },
    {
      title: 'Educational Facilities & Schools',
      desc: 'Classrooms, administrative offices, hallways, restrooms, and staff break rooms.'
    },
    {
      title: 'Banks & Financial Institutions',
      desc: 'Teller counters, customer lobbies, consultation offices, and secured back offices.'
    },
    {
      title: 'Warehouses & Industrial Sites',
      desc: 'Logistics hubs, high-dusting zones, shipping terminals, and industrial offices.'
    }
  ]
};

export const VERIFIED_SERVICES = [
  {
    id: 'commercial-office-cleaning',
    name: 'Commercial Office Cleaning',
    slug: '/services/office-cleaning',
    summary: 'Daily, weekly, and customized cleaning programs for corporate suites and commercial workspaces.',
    description: 'Scheduled maintenance tailored to office hours or evening janitorial shifts. Covers open floor plans, executive offices, conference spaces, and high-touch surface maintenance.',
    bullets: [
      'Workstations, desks, and collaborative open spaces',
      'Conference rooms and executive suites',
      'Pantry, breakroom, and kitchen sanitization',
      'Restroom restocking and multi-surface disinfection',
      'Trash removal and recycling sorting'
    ],
    image: IMAGES.office
  },
  {
    id: 'janitorial-services',
    name: 'Janitorial Services & Building Upkeep',
    slug: '/services/janitorial',
    summary: 'Routine facility upkeep, lobby maintenance, porter services, and dedicated janitorial care.',
    description: 'Comprehensive day and night janitorial programs ensuring building standards, clean entryways, spotless common corridors, and sanitized public amenities.',
    bullets: [
      'Commercial building lobby and entryway maintenance',
      'Corridors, stairwells, and elevator car detailing',
      'Restroom sanitation programs and consumable replenishment',
      'Waste management and centralized bin removal',
      'Flexible 24/7 staffing schedules tailored to tenant occupancy'
    ],
    image: IMAGES.janitorial
  },
  {
    id: 'medical-dental-cleaning',
    name: 'Medical & Dental Facility Cleaning',
    slug: '/services/medical-dental',
    summary: 'Focused hygiene protocols for healthcare suites, dental offices, and medical examination rooms.',
    description: 'Detailed cleaning protocols designed for private practices, diagnostic clinics, and dental offices. Non-porous surface wipedowns, waiting lounge sanitization, and specialized trash disposal.',
    bullets: [
      'Patient waiting rooms and check-in counters',
      'Operatory and treatment room non-porous surface cleaning',
      'Sterilization of high-frequency touch zones and handles',
      'Hygienic restroom cleaning and wall-mounted dispenser care',
      'Staff breakrooms and administrative charting areas'
    ],
    image: IMAGES.medical
  },
  {
    id: 'retail-educational-cleaning',
    name: 'Retail & Educational Facility Cleaning',
    slug: '/services/retail-education',
    summary: 'Cleaning routines for retail storefronts, commercial boutiques, private academies, and school buildings.',
    description: 'High-traffic commercial spaces require consistent floor care, spotless display fixtures, clean restrooms, and hygienic shared environments that represent your brand.',
    bullets: [
      'Retail display shelving, glass cases, and checkout counters',
      'Classroom desks, whiteboards, and common learning stations',
      'School hallway and entryway high-traffic floor care',
      'Fitting room dusting and waste disposal',
      'Administrative faculty areas and staff lounges'
    ],
    image: IMAGES.office
  },
  {
    id: 'green-cleaning',
    name: 'Green Commercial Cleaning',
    slug: '/services/green-cleaning',
    summary: 'Eco-conscious cleaning practices using environmentally responsible products and low-impact methods.',
    description: 'Sustainable cleaning programs designed to support indoor air quality, reduce chemical exposure for building occupants, and align with corporate sustainability priorities.',
    bullets: [
      'Environmentally formulated non-toxic cleaning agents',
      'Microfiber dust containment technology',
      'HEPA filtration vacuum systems for particulate control',
      'Water and chemical conservation techniques',
      'Reduced VOC impact for healthier indoor air'
    ],
    image: IMAGES.green
  },
  {
    id: 'specialized-care',
    name: 'Carpet, Floor & High Dusting Care',
    slug: '/services',
    summary: 'Floor buffing, carpet extraction, high-dusting, and deep facility cleaning jobs.',
    description: 'Specialized maintenance for commercial stone, hardwood, vinyl, and carpet flooring, along with high-ceiling ductwork dusting and detailed deep-cleaning rotations.',
    bullets: [
      'Hard surface machine scrubbing and high-gloss buffing',
      'Commercial carpet deep extraction and stain spot care',
      'High-ceiling architectural dusting, vents, and ledges',
      'Deep post-event and periodic facility overhauls',
      'Tailored frequency schedules (monthly, quarterly, or bi-annual)'
    ],
    image: IMAGES.janitorial
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Share Facility Requirements',
    desc: 'Submit your square footage, facility category, and desired cleaning schedule through our structured request form or by phone.'
  },
  {
    step: '02',
    title: 'Facility Discussion & Walkthrough',
    desc: 'Review high-traffic zones, specific sanitation priorities, access protocols, and scheduling constraints with our team.'
  },
  {
    step: '03',
    title: 'Receive a Transparent Proposal',
    desc: 'Receive a clear scope of work detailing staffing allocations, cleaning frequencies, and defined service deliverables.'
  },
  {
    step: '04',
    title: 'Arrange & Commence Service',
    desc: 'Finalize timing—whether overnight, daytime porter, or weekend service—backed by our insured and bonded cleaning team.'
  }
];

export const SEO_PAGE_METADATA: Record<string, { title: string; desc: string; h1: string }> = {
  '/': {
    title: 'Four Star General Cleaning Service | Commercial Cleaning & Janitorial NYC',
    desc: 'Professional commercial cleaning and janitorial services for New York businesses. Insured & bonded staff serving Manhattan, Brooklyn, Queens, and NYC.',
    h1: 'Professional Commercial Cleaning for New York Businesses'
  },
  '/about': {
    title: 'About the Company | Four Star General Cleaning Service NYC',
    desc: 'Learn about Four Star General Cleaning Service, providing insured and bonded commercial cleaning across New York City for over 35 years.',
    h1: 'About Four Star General Cleaning Service'
  },
  '/services': {
    title: 'Commercial Cleaning Services | Four Star General Cleaning Service',
    desc: 'Comprehensive commercial cleaning and janitorial services for NYC offices, medical clinics, retail stores, banks, and facilities.',
    h1: 'Commercial Cleaning & Janitorial Services'
  },
  '/services/office-cleaning': {
    title: 'Commercial Office Cleaning NYC | Four Star General Cleaning Service',
    desc: 'Dedicated commercial office cleaning for Manhattan and NYC corporate workspaces, suites, conference rooms, and workstations.',
    h1: 'Commercial Office Cleaning Services'
  },
  '/services/janitorial': {
    title: 'Janitorial Services NYC | Four Star General Cleaning Service',
    desc: 'Routine janitorial programs, lobby maintenance, restroom sanitation, and building upkeep for commercial properties in NYC.',
    h1: 'Janitorial Services & Facility Upkeep'
  },
  '/services/medical-dental': {
    title: 'Medical & Dental Facility Cleaning NYC | Four Star General Cleaning Service',
    desc: 'Specialized commercial cleaning for NYC medical practices, dental clinics, healthcare suites, and patient care environments.',
    h1: 'Medical and Dental Facility Cleaning'
  },
  '/services/retail-education': {
    title: 'Retail & Educational Facility Cleaning NYC | Four Star General Cleaning Service',
    desc: 'Clean storefronts, retail boutiques, educational centers, and private school facilities across New York City.',
    h1: 'Retail and Educational Facility Cleaning'
  },
  '/services/green-cleaning': {
    title: 'Green Commercial Cleaning NYC | Four Star General Cleaning Service',
    desc: 'Eco-conscious commercial cleaning solutions using environmentally responsible products and low-impact methods in NYC.',
    h1: 'Green Commercial Cleaning Solutions'
  },
  '/service-areas': {
    title: 'Service Areas Across NYC | Four Star General Cleaning Service',
    desc: 'Serving commercial clients in Manhattan, Brooklyn, Queens, The Bronx, and the wider New York City metropolitan area.',
    h1: 'NYC Commercial Service Areas'
  },
  '/quote': {
    title: 'Request a Cleaning Quote | Four Star General Cleaning Service',
    desc: 'Request a customized commercial cleaning proposal for your NYC office, facility, or medical clinic. Interactive demo request form.',
    h1: 'Request a Commercial Cleaning Quote'
  },
  '/contact': {
    title: 'Contact Us | Four Star General Cleaning Service NYC',
    desc: 'Reach Four Star General Cleaning Service at 19 West 21st Street, New York, NY 10010 or call (212) 741-9400. Monday–Friday 9 AM–6 PM.',
    h1: 'Contact Our NYC Office'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Four Star General Cleaning Service Redesign Demo',
    desc: 'Demo privacy statement and information handling practices for this independent redesign concept.',
    h1: 'Privacy Policy & Demo Disclosures'
  }
};
