import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Ivca.css'

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  Database,
  FileCheck2,
  FileText,
  Flag,
  Globe2,
  Layers3,
  Map,
  MessageSquare,
  Network,
  Search,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Wrench,
  X,
} from 'lucide-react'

function Ivca() {
  const [activeStep, setActiveStep] = useState(1)
  const [openSection, setOpenSection] = useState(null)

  const toggleStep = (step) => {
    setActiveStep(activeStep === step ? null : step)
    setOpenSection(null)
  }

  const toggleSection = (section) => {
    setOpenSection(
      openSection === section ? null : section
    )
  }

  const steps = [
    {
      number: '01',
      title: 'Mobilization of Core Planning Team',
      shortTitle: 'Mobilization',
      icon: Users,
      description:
        'Convene the Core Planning Team, agree on the direction of the VCA study, organize the data-gathering approach, and identify the key stakeholders who will participate in the process.',
      objective:
        'To convene the Core Planning Team and level off on the methods, strategies, and processes for conducting the VCA study, and to mobilize the team for the actual conduct of the study.',
      methodologies: [
        'Inception meeting / workshop',
        'Consultation',
        'Review of existing documents',
      ],
      participants: [
        'Core Planning Team',
        'Technical members relevant to the scope of the VCA',
        'Relevant planning and commodity stakeholders',
      ],
      tools: [
        'Rapid Market Appraisal',
        'EVSA',
        'Value Chain Assessment',
        'Commodity Roadmaps',
        'Stakeholders’ Engagement Plan',
        'Farmers’ Questionnaire',
        'Traders’ Questionnaire',
        'Processors’ Questionnaire',
      ],
      outputs: [
        'Agreed objectives of preparing or updating the commodity VCA',
        'Agreed approaches, strategies, and methodologies',
        'Prepared questionnaires for data collection',
        'Identified product forms and market scope',
        'Identified key stakeholders',
      ],
      questions: [
        'What product forms shall be covered by the VCA?',
        'What strategies and methodologies will be used for data gathering?',
        'Who are the target key respondents?',
        'How can different types of respondents be effectively engaged?',
      ],
      activities: [
        'Identify the commodity and product forms to be covered.',
        'Review existing VCA studies and determine whether the information remains current and useful.',
        'Check whether previous studies already address climate and other risk-resiliency factors.',
        'Check alignment with updated DA, agency, LGU, and other relevant plans.',
        'Identify emerging changes in the commodity system.',
        'Review existing industry roadmaps and value chain assessments.',
        'Agree on the goals and objectives of the VCA.',
        'Agree on data-gathering approaches and methodologies.',
        'Develop or refine questionnaires for the different value chain players.',
        'Identify the market and marketable product forms to be studied.',
        'Identify key stakeholders and determine appropriate engagement approaches.',
      ],
    },

    {
      number: '02',
      title:
        'Establish the Study Objectives, Rationale and Methodology',
      shortTitle: 'Study Foundation',
      icon: Target,
      description:
        'Establish why the VCA is being conducted, what it intends to achieve, how information will be gathered, and what the scope and limitations of the study will be.',
      objective:
        'To establish the objectives of preparing or updating the VCA, explain the rationale for conducting the study, identify methodologies for attaining the objectives, and establish the study scope and limitations.',
      methodologies: [
        'Desk review of reference documents',
        'One-day workshop',
        'Facilitated open forum',
      ],
      participants: [
        'Core Planning Team',
        'Technical members depending on the scope of the VCA',
      ],
      tools: [
        'Commodity Prioritization',
        'Rapid Market Appraisal',
        'EVSA',
        'Value Chain Assessment',
        'Statistical tools',
        'Existing commodity and regional planning documents',
      ],
      outputs: [
        'Background information on DA-PRDP, the VCA, commodity, and study area',
        'Established rationale for conducting the study',
        'Defined study objectives',
        'Identified methodologies for data gathering',
        'Defined scope and limitations',
      ],
      questions: [
        'What are the objectives of the VCA?',
        'Why was the commodity and study area selected?',
        'What research and data-gathering methodologies are appropriate?',
        'What is the coverage in terms of product forms and geographic area?',
        'What statistical and data limitations may affect the study?',
        'How will the number and type of participants be determined?',
        'What data will be gathered and what tools or methods will be used?',
      ],
      sections: [
        {
          id: 'step2-background',
          title: 'A. Background Information',
          icon: FileText,
          description:
            'Establish the context of the study by describing the relevant institution, commodity, geographic area, and existing planning situation.',
          points: [
            'Describe the commodity being studied.',
            'Describe the region, province, cluster, or geographic coverage.',
            'Present relevant previous studies and planning documents.',
            'Identify existing information that can support the VCA.',
          ],
        },
        {
          id: 'step2-objectives',
          title: 'B. Objectives of i-VCA',
          icon: Target,
          description:
            'Clearly define what the study intends to accomplish and what decisions the resulting VCA should support.',
          points: [
            'State the overall objective of the VCA.',
            'Define specific objectives linked to value chain analysis.',
            'Ensure objectives can be supported by available data and methodologies.',
          ],
        },
        {
          id: 'step2-rationale',
          title: 'C. Rationale of the VCA',
          icon: MessageSquare,
          description:
            'Explain why the VCA is necessary and why the selected commodity and area require further analysis.',
          points: [
            'Reason for conducting the study',
            'Previous information and existing evidence',
            'Significance and need for the study',
            'Justification for preparing or updating the VCA',
          ],
        },
        {
          id: 'step2-methodology',
          title: 'D. Methodology',
          icon: Workflow,
          description:
            'Describe how primary and secondary information will be gathered, analyzed, validated, and synthesized.',
          points: [
            'Desk research and review of secondary data',
            'Key informant interviews',
            'Focus group discussions',
            'Stakeholder consultations',
            'Questionnaires and field data gathering',
            'Data processing, analysis, and validation',
          ],
        },
        {
          id: 'step2-scope',
          title: 'E. Scope and Limitation of the Study',
          icon: Layers3,
          description:
            'Define the boundaries of the analysis and identify limitations that may affect interpretation of the results.',
          points: [
            'Geographic coverage',
            'Commodity and product forms',
            'Value chain segments covered',
            'Time period of data',
            'Data availability and quality',
            'Participant and sample limitations',
            'Statistical and analytical limitations',
          ],
        },
      ],
    },

    {
      number: '03',
      title: 'Define the Commodity Planning Environment',
      shortTitle: 'Planning Environment',
      icon: Globe2,
      description:
        'Develop an overview of the commodity industry and examine the environmental, climate, geologic, and other factors that may affect the value chain.',
      objective:
        'To provide an overview and understanding of the commodity and its industry and identify hazards, risks, and environmental factors that may potentially affect the commodity value chain.',
      methodologies: [
        'Desk study',
        'Primary and secondary data collection and analysis',
        'Consultations',
      ],
      participants: [
        'Core Planning Team',
        'Key value chain players',
        'Relevant stakeholders',
        'Subject-matter experts',
      ],
      tools: [
        'CRVA',
        'Soil Suitability Index',
        'Hazard Hunter',
        'Other decision-support tools in the Planners Portal',
        'Production and industry statistics',
      ],
      outputs: [
        'Product description',
        'Domestic and global production information',
        'Description of the commodity industry',
        'Assessment of environmental impacts on the value chain',
        'Assessment of value chain impacts on the environment',
      ],
      questions: [
        'What are the product forms and markets of the commodity?',
        'Who are the major buyers or markets for different product forms?',
        'What opportunities can be explored or maximized?',
        'What is the current production level compared with other countries?',
        'How competitive is the commodity value chain?',
        'What environmental factors affect the value chain?',
      ],
      sections: [
        {
          id: 'step3-product',
          title: 'A. Product Description',
          icon: FileText,
          description:
            'Describe the commodity and the characteristics that influence its production, processing, use, and marketability.',
          points: [
            'Background and description of the commodity',
            'Product appearance and relevant parts',
            'Crop or production cycle',
            'Growing or production environment requirements',
            'Varieties or breeds',
            'Major industry users',
            'Different product forms and their markets',
          ],
        },
        {
          id: 'step3-supply',
          title: 'B. Supply Analysis',
          icon: Database,
          description:
            'Examine production and supply conditions at relevant geographic and market levels.',
          points: [
            'Domestic production',
            'Regional and provincial production',
            'Production trends',
            'Global production and major producing countries',
            'Supply gaps and opportunities',
            'Relative competitiveness of the commodity',
          ],
        },
        {
          id: 'step3-environment',
          title: 'C. Environment',
          icon: ShieldCheck,
          description:
            'Assess the environmental and hazard conditions that can influence the commodity value chain and investments.',
          points: [
            'Climate-related risks',
            'Geologic hazards',
            'Soil and production environment',
            'Animal and plant health risks where applicable',
            'Other environmental risks',
            'Potential impact of the value chain on the environment',
            'Potential impact of environmental conditions on the value chain',
          ],
        },
      ],
    },

    {
      number: '04',
      title: 'Analysis of the Value Chain',
      shortTitle: 'Value Chain Analysis',
      icon: Network,
      description:
        'Analyze the structure, actors, relationships, markets, services, enabling environment, financial performance, risks, constraints, and opportunities across the commodity value chain.',
      objective:
        'To understand how the value chain operates as a system, identify relationships and performance across its segments, assess risks and financial conditions, and determine constraints and opportunities for upgrading.',
      methodologies: [
        'Desk study',
        'Focus group discussions',
        'Key informant interviews',
        'Primary data collection',
        'Financial and market analysis',
        'Stakeholder consultations',
        'Risk assessment and spatial analysis',
      ],
      participants: [
        'Core Planning Team',
        'Farmers / producers',
        'Traders and assemblers',
        'Processors',
        'Input suppliers',
        'Lead firms / buyers',
        'Service providers',
        'Government and institutional stakeholders',
        'Other relevant value chain players',
      ],
      tools: [
        'Value Chain Mapping',
        'Risk-Resilient Value Chain Mapping',
        'Product Flow Mapping',
        'Geographic Flow Mapping',
        'Questionnaires',
        'Cost and Return Analysis',
        'Relative Financial Position Analysis',
        'CRVA',
        'FishVOOL',
        'GeoRisk',
        'PRDP Risk Assessment Matrix',
        'SWOT Analysis',
        'Root Cause Analysis',
      ],
      outputs: [
        'Value Chain Map',
        'Risk-Resilient Value Chain Map',
        'Product Flow',
        'Geographic Flow Map',
        'Analysis of key players and functions',
        'Analysis of interfirm relationships',
        'Market and price analysis',
        'Support service assessment',
        'Enabling environment assessment',
        'Cost and return analysis',
        'Relative financial position',
        'Multi-factor risk assessment',
        'Constraints and opportunities analysis',
      ],
      questions: [
        'Who are the key players in every segment of the value chain?',
        'What functions do they perform?',
        'How do players interact horizontally and vertically?',
        'How do products, information, services, and money move through the chain?',
        'What markets and market opportunities exist?',
        'What support services are available?',
        'What policies and informal practices influence the chain?',
        'What are the costs, returns, margins, and financial positions of players?',
        'What risks affect each value chain segment?',
        'What are the systemic constraints and opportunities?',
      ],
      sections: [
        {
          id: 'step4-section3',
          title: 'Section 3 — Nature and Structure of the Industry',
          icon: Network,
          description:
            'Map the value chain and examine the functions, practices, relationships, facilities, and financial characteristics of the actors.',
          subsections: [
            {
              title: 'A. Value Chain Mapping',
              text:
                'Map the value-adding stages from input supply and production through post-harvest, aggregation, processing, marketing, and consumption. Identify players, functions, product forms, marketing channels, and end markets.',
              bullets: [
                'Identify key players and their core functions per segment.',
                'Trace marketing channels for each product form.',
                'Show product and supply-demand flows.',
                'Prepare a separate map per product form when necessary.',
                'Reflect relevant service providers and enabling conditions.',
                'Consider regional and provincial differences.',
              ],
            },
            {
              title: 'B. Risk-Resilient Value Chain',
              text:
                'Integrate relevant climate, geologic, animal and plant health, conflict, and other risks into the value chain map.',
              bullets: [
                'Identify which value chain segments are exposed to each risk.',
                'Identify affected players and locations.',
                'Use relevant risk and spatial data.',
                'Connect identified risks with possible management measures.',
                'Validate the risk information with stakeholders.',
              ],
            },
            {
              title: 'C. Product Flow',
              text:
                'Describe how each product form moves between value chain players and destinations, including common transport and logistics arrangements.',
              bullets: [
                'Identify different product chains.',
                'Show movement between players and destinations.',
                'Identify product form during transport.',
                'Consider logistics and transportation arrangements.',
              ],
            },
            {
              title: 'D. Geographic Flow Map',
              text:
                'Show geographic movement and volume of commodity or product between provinces, regions, markets, and other destinations.',
              bullets: [
                'Plot product flows using an appropriate base map.',
                'Show volume or percentage of flow where data are available.',
                'Include local consumption and outgoing products.',
                'Include flows outside the region when applicable.',
                'Provide clear labels, legends, and narrative discussion.',
              ],
            },
            {
              title: 'E. Key VC Players and Functions',
              text:
                'Identify and analyze the roles, functions, practices, characteristics, and relationships of key players in each value chain segment.',
              bullets: [
                'Classify players according to size or operational scale.',
                'Analyze relevant demographic characteristics.',
                'Describe differences in practices and technologies.',
                'Identify reasons for differences in performance.',
                'Use benchmarking to identify better practices.',
                'Assess existing facilities and potential agro-industrial investments.',
                'Examine operational and institutional arrangements.',
              ],
            },
            {
              title: 'F. Nature of Interfirm Relationships',
              text:
                'Assess horizontal and vertical relationships and determine how information, trust, competition, quality control, procurement, and value-added services influence the chain.',
              bullets: [
                'Horizontal relationships: players performing similar functions.',
                'Vertical relationships: players operating in different segments.',
                'Assess information sharing.',
                'Assess competition and market access.',
                'Assess trust and collaboration.',
                'Assess benefits from collective initiatives.',
                'Assess procurement and supply relationships.',
                'Assess quality control and value-added services.',
              ],
            },
            {
              title: 'G. Price and Cost Structure',
              text:
                'Analyze financial performance across value chain segments and understand where value, costs, profits, and margins are generated.',
              bullets: [
                'Analyze income and profits.',
                'Gather productivity, cost, labor, and material information.',
                'Prepare cost and return analysis per segment and product form.',
                'Consider operating and fixed costs.',
                'Account for depreciation where applicable.',
                'Consider post-harvest losses when relevant.',
                'Compute value added, ROI, and payback period where appropriate.',
              ],
            },
            {
              title: 'H. Relative Financial Position',
              text:
                'Compare the distribution of costs, profits, and margins among value chain actors and examine implications for risk, profitability, and competition.',
              bullets: [
                'Compute relative financial position per value chain actor.',
                'Use a common unit of comparison.',
                'Analyze percentage added unit cost or value.',
                'Analyze profit share.',
                'Analyze unit margin.',
                'Use visual summaries such as stacked charts where appropriate.',
              ],
            },
            {
              title: 'I. Multi-factor Risk Assessment',
              text:
                'Assess the degree of exposure and potential impact of multiple risks on different value chain segments and identify appropriate management measures.',
              bullets: [
                'Climate risks: CRVA and other appropriate climate tools.',
                'Fish and aquaculture risks: FishVOOL where applicable.',
                'Geologic risks: GeoRisk and related spatial information.',
                'Animal and plant health risks: relevant DA and local sources.',
                'Conflict and other contextual risks where relevant.',
                'Assess severity and potential impact.',
                'Identify and assess risk-management measures.',
                'Use maps to illustrate spatial risk information.',
                'Triangulate spatial, quantitative, and stakeholder information.',
              ],
            },
          ],
        },
        {
          id: 'step4-section4',
          title: 'Section 4 — Markets and Market Opportunities',
          icon: Globe2,
          description:
            'Understand market conditions, trends, demand, product forms, buyers, and price behavior.',
          subsections: [
            {
              title: 'A. Market and Market Trends',
              text:
                'Analyze current and emerging markets for different product forms and identify opportunities for market expansion or upgrading.',
              bullets: [
                'Identify major markets and buyers.',
                'Describe market channels.',
                'Analyze market trends.',
                'Identify changes in demand and product requirements.',
                'Identify emerging market opportunities.',
              ],
            },
            {
              title: 'B. Price Trends',
              text:
                'Examine price behavior and factors influencing prices across relevant value chain segments.',
              bullets: [
                'Review historical and current prices.',
                'Compare prices among locations and market channels.',
                'Identify factors influencing price movements.',
                'Relate price behavior to costs, quality, seasonality, and market conditions.',
              ],
            },
          ],
        },
        {
          id: 'step4-section5',
          title: 'Section 5 — Support Services',
          icon: BriefcaseBusiness,
          description:
            'Assess financial and non-financial services supporting value chain players.',
          subsections: [
            {
              title: 'A. Financial Services',
              text:
                'Identify sources and accessibility of financing and determine whether financial services adequately support value chain activities.',
              bullets: [
                'Sources of credit and financing',
                'Access and eligibility',
                'Terms and conditions',
                'Availability across value chain segments',
                'Financing gaps',
              ],
            },
            {
              title: 'B. Non-Financial Services',
              text:
                'Assess technical, business, logistics, information, extension, infrastructure, and other support services.',
              bullets: [
                'Technical assistance',
                'Training and capacity development',
                'Market information',
                'Extension services',
                'Infrastructure and logistics support',
                'Business development services',
              ],
            },
          ],
        },
        {
          id: 'step4-section6',
          title: 'Section 6 — Enabling Environment',
          icon: ShieldCheck,
          description:
            'Examine formal and informal factors that shape how the value chain operates.',
          subsections: [
            {
              title: 'A. Formal Rules, Regulations and Policies',
              text:
                'Review laws, regulations, standards, programs, permits, policies, and institutional arrangements that affect value chain activities.',
              bullets: [
                'Relevant national and local policies',
                'Regulatory requirements',
                'Standards and certification',
                'Permits and compliance requirements',
                'Government programs and support',
              ],
            },
            {
              title: 'B. Informal Rules and Socio-Cultural Norms',
              text:
                'Examine informal practices, relationships, norms, traditions, and social factors influencing value chain behavior.',
              bullets: [
                'Traditional practices',
                'Informal agreements',
                'Trust and relationship networks',
                'Social norms',
                'Gender and social considerations',
                'Community practices affecting transactions',
              ],
            },
          ],
        },
        {
          id: 'step4-section7',
          title: 'Section 7 — Constraints and Opportunities',
          icon: Search,
          description:
            'Synthesize the findings from the preceding analysis to identify systemic constraints and opportunities for industry upgrading.',
          subsections: [
            {
              title: 'Constraints Analysis',
              text:
                'List and analyze constraints affecting different value chain aspects and determine which constraints have systemic implications.',
              bullets: [
                'List constraints by value chain aspect.',
                'Use SWOT analysis where useful.',
                'Use Root Cause Analysis to understand deeper causes.',
                'Identify priority constraints.',
              ],
            },
            {
              title: 'Opportunities Analysis',
              text:
                'Identify opportunities for firm- and industry-level upgrading and determine potential catalyst firms or organizations.',
              bullets: [
                'Identify opportunities by value chain segment.',
                'Identify areas for upgrading.',
                'Identify potential catalyst firms or organizations.',
                'Determine affected provinces or locations.',
                'Synthesize findings for translation into PCIP.',
              ],
            },
          ],
        },
      ],
    },

    {
      number: '05',
      title:
        'Formulate Strategies for Competitiveness and Identify Interventions',
      shortTitle: 'Competitiveness & Interventions',
      icon: Flag,
      description:
        'Translate the value chain analysis into competitiveness directions, priority constraints, potential interventions, conclusions, and recommendations.',
      objective:
        'To formulate competitiveness directions and identify priority interventions based on the evidence generated through the value chain analysis.',
      methodologies: [
        'Synthesis of VCA findings',
        'Stakeholder analysis',
        'Strategic analysis',
        'Intervention identification',
        'Validation and prioritization',
      ],
      participants: [
        'Core Planning Team',
        'Value chain stakeholders',
        'Relevant technical experts',
        'Government and institutional partners',
      ],
      tools: [
        'VCA findings',
        'SWOT Analysis',
        'Root Cause Analysis',
        'Competitiveness analysis',
        'Intervention prioritization tools',
      ],
      outputs: [
        'Competitiveness directions',
        'Priority constraints',
        'Priority interventions',
        'Conclusions',
        'Recommendations',
      ],
      questions: [
        'What should the commodity industry become more competitive in?',
        'Which constraints require priority attention?',
        'What interventions can address the identified constraints?',
        'Which interventions can strengthen resilience and value addition?',
        'What conclusions are supported by the VCA evidence?',
        'What recommendations should be carried forward to investment planning?',
      ],
      sections: [
        {
          id: 'step5-competitive',
          title: 'Section 8 — Competitive Directions',
          icon: Flag,
          description:
            'Translate the VCA findings into directions for improving industry competitiveness.',
          points: [
            'Identify competitiveness opportunities.',
            'Define priority constraints affecting competitiveness.',
            'Identify appropriate interventions.',
            'Consider productivity, market access, value addition, resilience, and agro-industry opportunities.',
            'Link interventions to evidence from the VCA.',
          ],
        },
        {
          id: 'step5-recommendations',
          title: 'Section 9 — Conclusions and Recommendations',
          icon: ClipboardCheck,
          description:
            'Synthesize the major findings and translate them into practical recommendations for succeeding planning stages.',
          points: [
            'Summarize the major VCA findings.',
            'Connect findings to identified constraints and opportunities.',
            'Present priority recommendations.',
            'Provide a clear basis for succeeding investment planning.',
          ],
        },
      ],
    },

    {
      number: '06',
      title: 'Consultation of the VCA Findings and Report',
      shortTitle: 'Stakeholder Consultation',
      icon: MessageSquare,
      description:
        'Present the VCA findings, validate the analysis with stakeholders, identify additional information, develop a competitiveness vision, and refine priority constraints and interventions.',
      objective:
        'To present and discuss the draft VCA report, obtain stakeholder inputs and feedback, validate findings, and improve the completeness and quality of the report.',
      methodologies: [
        'Stakeholder consultation',
        'Workshop',
        'Group discussions',
        'Snapshot VCA validation',
        'Root Cause Analysis',
      ],
      participants: [
        'Core Planning Team',
        'Key value chain players',
        'Relevant stakeholders',
        'Representatives of different value chain segments',
        'Relevant vulnerable or sectoral groups where appropriate',
      ],
      tools: [
        'Paint Me a Picture',
        'Info Buzz',
        'Root Cause Analysis',
        'Snapshot Value Chain Analysis',
        'Competitiveness Vision exercise',
      ],
      outputs: [
        'Finalized Competitiveness Directions',
        'Confirmed VCA findings',
        'Validated constraints and opportunities',
        'Stakeholder-identified interventions',
        'Inputs for improvement of the VCA report',
      ],
      questions: [
        'What key gaps and constraints are relevant to stakeholders?',
        'How can these gaps and constraints be addressed?',
        'Who among the value chain players can help address them?',
      ],
      sections: [
        {
          id: 'step6-workshop',
          title: 'Stakeholders Workshop Design',
          icon: Users,
          description:
            'Organize the consultation so that all relevant value chain segments and stakeholder perspectives are represented.',
          points: [
            'Identify participants relevant to the study.',
            'Ensure representation of key value chain segments.',
            'Group participants according to the purpose of discussion.',
            'Consider smaller group discussions for specific value chain segments or vulnerable groups.',
          ],
        },
        {
          id: 'step6-paint',
          title: 'Paint Me a Picture',
          icon: Network,
          description:
            'Use a visual participatory exercise to help participants describe their role and relationships with other value chain players.',
          points: [
            'Group participants according to their value chain functions.',
            'Ask each group to draw a symbol representing its role.',
            'Add other players they interact with.',
            'Use visual indicators to describe the quality of relationships.',
            'Allow each group to briefly explain its drawing.',
            'Keep the drawings as a baseline reference.',
          ],
        },
        {
          id: 'step6-snapshot',
          title: 'Present the Snapshot Value Chain Analysis',
          icon: Map,
          description:
            'Present the major findings from desk research, field investigation, interviews, and preliminary analysis.',
          points: [
            'Commodity and product form',
            'Market channels',
            'Value Chain Map',
            'Risk-Resilient Value Chain Map',
            'Product Flow',
            'Commodity Map',
            'Geographic Flow Map',
            'Production and marketing trends',
            'Cost and income structure',
            'Opportunities and constraints',
            'Intervention strategies',
          ],
        },
        {
          id: 'step6-infobuzz',
          title: 'Info Buzz',
          icon: MessageSquare,
          description:
            'Allow stakeholders to validate the snapshot analysis by reviewing displayed findings and providing confirmation, questions, comments, and additional information.',
          points: [
            'Display key findings in different areas of the workshop venue.',
            'Allow participants to review the findings.',
            'Use check marks for points they agree with.',
            'Use question marks or comments for points requiring clarification.',
            'Collect additional information for incorporation into the report.',
          ],
        },
        {
          id: 'step6-vision',
          title: 'Competitiveness Vision of the Industry',
          icon: Target,
          description:
            'Develop a shared picture of how the industry could perform if it becomes more competitive.',
          points: [
            'Consider efficiency.',
            'Consider product differentiation.',
            'Consider access to new markets.',
            'Identify target markets over the succeeding planning period.',
            'Identify product formats and characteristics.',
            'Discuss relationships and work environment among industry players.',
            'Identify ways to compete more efficiently.',
            'Consider opportunities for poorer or vulnerable participants.',
          ],
        },
        {
          id: 'step6-rootcause',
          title: 'Root Cause Analysis',
          icon: Search,
          description:
            'Identify the most important constraints and examine their underlying causes.',
          points: [
            'List major constraints.',
            'Present and explain each constraint.',
            'Group similar constraints.',
            'Identify priority constraints based on stakeholder discussion.',
            'Ask successive “why” questions to identify root causes.',
            'Use the results to identify possible solutions and interventions.',
          ],
        },
        {
          id: 'step6-commitments',
          title: 'Identify Solutions and Priority Interventions',
          icon: CheckCircle2,
          description:
            'Translate validated constraints into possible solutions and identify what stakeholders can contribute.',
          points: [
            'Identify what needs to be done for priority constraints.',
            'Identify who can contribute to addressing each issue.',
            'Identify specific stakeholder commitments.',
            'Identify resources, services, or support that can be offered.',
            'Document agreements and commitments.',
          ],
        },
      ],
    },

    {
      number: '07',
      title: 'Submission, Review and Approval',
      shortTitle: 'Review & Approval',
      icon: FileCheck2,
      description:
        'Finalize the VCA report, subject it to Joint Technical Review, address review comments, and facilitate approval and issuance of the NOL.',
      objective:
        'To finalize the VCA report using stakeholder consultation inputs, conduct Joint Technical Review for quality checking, and facilitate approval for issuance of the NOL by the NPCO.',
      methodologies: [
        'Joint Technical Review',
        'Compliance review',
        'Technical review and refinement',
        'Finalization of the VCA report',
      ],
      participants: [
        'IPLAN Component',
        'Core Planning Team members',
        'Technical reviewers',
        'Relevant review and approval bodies',
      ],
      tools: [
        'Completion Form',
        'JTR Guidelines',
        'Review Matrix',
        'Enhanced Annotated VCA Outline',
        'VCA Report',
      ],
      outputs: [
        'VCA with NOL',
        'VCA encoded into the MIS',
        'VCA ready for translation to PCIP',
      ],
      questions: [
        'Is the VCA compliant with the required information in the Enhanced Annotated VCA Outline?',
        'Are the VCA findings consistent with other sections of the report?',
        'Are constraints, opportunities, and interventions supported by the findings?',
        'How can the VCA be further enhanced before NOL issuance?',
      ],
      sections: [
        {
          id: 'step7-pre',
          title: 'A. Pre-JTR Phase',
          icon: ClipboardList,
          description:
            'Prepare the VCA report and review materials before the Joint Technical Review.',
          points: [
            'Finalize the draft VCA report.',
            'Compile supporting data and documentation.',
            'Check completeness against the prescribed outline.',
            'Prepare the review materials and matrix.',
          ],
        },
        {
          id: 'step7-actual',
          title: 'B. Actual JTR Phase',
          icon: Users,
          description:
            'Conduct the Joint Technical Review and consolidate technical comments, findings, and recommendations.',
          points: [
            'Present the VCA report.',
            'Discuss findings and recommendations.',
            'Review compliance with required sections.',
            'Identify inconsistencies, gaps, and areas for enhancement.',
            'Document consolidated review comments.',
          ],
        },
        {
          id: 'step7-post',
          title: 'C. Post-JTR Phase',
          icon: FileText,
          description:
            'Revise the VCA report based on the consolidated findings and recommendations from the review.',
          points: [
            'Address reviewer comments.',
            'Revise the report.',
            'Complete compliance review.',
            'Prepare the final VCA documentation.',
          ],
        },
        {
          id: 'step7-nol',
          title: 'D. Issuance of No Objection Letter (NOL)',
          icon: CheckCircle2,
          description:
            'Complete the approval process and prepare the VCA for succeeding planning use.',
          points: [
            'Finalize the reviewed VCA.',
            'Facilitate approval requirements.',
            'Secure the NOL.',
            'Encode the completed VCA into the MIS.',
            'Prepare the VCA for translation into PCIP.',
          ],
        },
      ],
    },
  ]

  const active = steps.find(
    (step) => step.number === String(activeStep).padStart(2, '0')
  )

  return (
    <main className="ivca-page">
      {/* HERO */}
      <section className="ivca-hero">
        <div className="ivca-container">
          <div className="ivca-breadcrumb">
            <Link to="/planning">
              <ArrowLeft size={14} />
              Planning Framework
            </Link>

            <span>/</span>

            <span>IVCA</span>
          </div>

          <div className="ivca-hero-grid">
            <div className="ivca-hero-content">
              <span className="ivca-eyebrow">
                VALUE CHAIN DEVELOPMENT FLOW · STAGE 03
              </span>

              <h1>
                Climate-Resilient
                <br />
                <span>Agro-Industry Oriented</span>
                <br />
                Value Chain Analysis
              </h1>

              <p>
                A structured value chain analysis and investment
                planning approach that integrates commodity,
                market, climate, geologic, health, institutional,
                financial, and agro-industry considerations.
              </p>

              <div className="ivca-hero-actions">
                <a
                  href="#ivca-steps"
                  className="ivca-primary-button"
                >
                  Explore the 7-Step Process
                  <ArrowRight size={16} />
                </a>

                <div className="ivca-hero-stat">
                  <strong>07</strong>
                  <span>
                    structured
                    <br />
                    planning steps
                  </span>
                </div>
              </div>
            </div>

            <div className="ivca-hero-panel">
              <div className="ivca-panel-top">
                <span>i-VCA</span>
                <Network size={22} strokeWidth={1.5} />
              </div>

              <div className="ivca-panel-number">
                03
              </div>

              <span className="ivca-panel-label">
                PLANNING STAGE
              </span>

              <h2>
                From commodity understanding
                to validated investment priorities.
              </h2>

              <div className="ivca-panel-line" />

              <p>
                The process connects planning, value chain
                analysis, risk assessment, stakeholder
                validation, competitiveness, and investment
                planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="ivca-intro">
        <div className="ivca-container">
          <div className="ivca-intro-grid">
            <div>
              <span className="ivca-section-eyebrow">
                ABOUT i-VCA
              </span>

              <h2>
                A composite investment planning
                approach for resilient value chains.
              </h2>
            </div>

            <div className="ivca-intro-copy">
              <p>
                The Climate Resilient Agro-Industry Oriented
                Value Chain Analysis or i-VCA is designed as a
                structured approach for understanding the
                commodity value chain and identifying investment
                opportunities.
              </p>

              <p>
                It incorporates climate, geologic, animal and
                plant health, market, financial, institutional,
                and agro-industry considerations so that
                interventions are examined across the value
                chain rather than only at the production level.
              </p>
            </div>
          </div>

          <div className="ivca-principles">
            <div>
              <Network size={18} />
              <span>Value Chain</span>
              <p>
                Analyze actors, functions, relationships,
                flows, and markets.
              </p>
            </div>

            <div>
              <ShieldCheck size={18} />
              <span>Resilience</span>
              <p>
                Integrate climate and other relevant risks
                into value chain analysis.
              </p>
            </div>

            <div>
              <BriefcaseBusiness size={18} />
              <span>Agro-Industry</span>
              <p>
                Identify processing, value addition, and
                enterprise opportunities.
              </p>
            </div>

            <div>
              <Target size={18} />
              <span>Investment Planning</span>
              <p>
                Translate evidence into competitiveness
                directions and interventions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS OVERVIEW */}
      <section
        className="ivca-overview"
        id="ivca-steps"
      >
        <div className="ivca-container">
          <div className="ivca-section-heading">
            <span className="ivca-section-eyebrow">
              i-VCA PROCESS FLOW
            </span>

            <h2>
              Seven Steps from Mobilization
              to Approval
            </h2>

            <p>
              Select a step below to explore its objective,
              methodology, participants, tools, expected
              outputs, guide questions, and detailed
              activities.
            </p>
          </div>

          <div className="ivca-step-overview">
            {steps.map((step) => {
              const Icon = step.icon
              const isActive =
                activeStep === Number(step.number)

              return (
                <button
                  type="button"
                  className={`ivca-step-tab ${
                    isActive ? 'is-active' : ''
                  }`}
                  key={step.number}
                  onClick={() =>
                    toggleStep(Number(step.number))
                  }
                >
                  <span className="ivca-step-tab-number">
                    {step.number}
                  </span>

                  <span className="ivca-step-tab-icon">
                    <Icon size={16} strokeWidth={1.7} />
                  </span>

                  <span className="ivca-step-tab-copy">
                    <small>
                      STEP {step.number}
                    </small>

                    <strong>
                      {step.shortTitle}
                    </strong>
                  </span>

                  <ChevronDown
                    size={15}
                    className="ivca-step-tab-chevron"
                  />
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ACTIVE STEP */}
      {active && (
        <section className="ivca-detail">
          <div className="ivca-container">
            <div className="ivca-detail-head">
              <div className="ivca-detail-title">
                <span className="ivca-detail-number">
                  {active.number}
                </span>

                <div>
                  <span className="ivca-section-eyebrow">
                    STEP {active.number}
                  </span>

                  <h2>{active.title}</h2>

                  <p>
                    {active.description}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="ivca-close-button"
                onClick={() => setActiveStep(null)}
                aria-label="Close step"
              >
                <X size={16} />
              </button>
            </div>

            {/* METADATA */}
            <div className="ivca-meta-grid">
              <div className="ivca-meta-card">
                <div className="ivca-meta-icon">
                  <Target size={17} />
                </div>

                <span>OBJECTIVE OF THE STEP</span>

                <p>{active.objective}</p>
              </div>

              <div className="ivca-meta-card">
                <div className="ivca-meta-icon">
                  <Workflow size={17} />
                </div>

                <span>METHODOLOGIES</span>

                <ul>
                  {active.methodologies.map(
                    (item) => (
                      <li key={item}>{item}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="ivca-meta-card">
                <div className="ivca-meta-icon">
                  <Users size={17} />
                </div>

                <span>PARTICIPANTS</span>

                <ul>
                  {active.participants.map(
                    (item) => (
                      <li key={item}>{item}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="ivca-meta-card">
                <div className="ivca-meta-icon">
                  <Wrench size={17} />
                </div>

                <span>POSSIBLE TOOLS & REFERENCES</span>

                <ul>
                  {active.tools.map(
                    (item) => (
                      <li key={item}>{item}</li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* OUTPUT + QUESTIONS */}
            <div className="ivca-support-grid">
              <div className="ivca-support-card">
                <div className="ivca-support-heading">
                  <CheckCircle2 size={18} />
                  <div>
                    <span>EXPECTED OUTPUT</span>
                    <h3>
                      What should this step produce?
                    </h3>
                  </div>
                </div>

                <ul className="ivca-check-list">
                  {active.outputs.map(
                    (item) => (
                      <li key={item}>
                        <CheckCircle2 size={14} />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="ivca-support-card ivca-question-card">
                <div className="ivca-support-heading">
                  <MessageSquare size={18} />
                  <div>
                    <span>GUIDE QUESTIONS</span>
                    <h3>
                      Questions to guide the analysis
                    </h3>
                  </div>
                </div>

                <ol>
                  {active.questions.map(
                    (item) => (
                      <li key={item}>{item}</li>
                    )
                  )}
                </ol>
              </div>
            </div>

            {/* DETAILED SECTIONS */}
            {active.sections && (
              <div className="ivca-sections">
                <div className="ivca-sections-heading">
                  <div>
                    <span className="ivca-section-eyebrow">
                      DETAILED CONTENT
                    </span>

                    <h3>
                      Sections and activities
                    </h3>
                  </div>

                  <p>
                    Expand each section to view the
                    corresponding guidance and working
                    points.
                  </p>
                </div>

                <div className="ivca-accordion">
                  {active.sections.map(
                    (section, index) => {
                      const SectionIcon =
                        section.icon || BookOpen

                      const isOpen =
                        openSection ===
                        section.id

                      return (
                        <div
                          className={`ivca-accordion-item ${
                            isOpen ? 'is-open' : ''
                          }`}
                          key={section.id}
                        >
                          <button
                            type="button"
                            className="ivca-accordion-trigger"
                            onClick={() =>
                              toggleSection(
                                section.id
                              )
                            }
                          >
                            <div className="ivca-accordion-left">
                              <span className="ivca-accordion-number">
                                {String(
                                  index + 1
                                ).padStart(2, '0')}
                              </span>

                              <span className="ivca-accordion-icon">
                                <SectionIcon
                                  size={17}
                                  strokeWidth={1.7}
                                />
                              </span>

                              <span>
                                {section.title}
                              </span>
                            </div>

                            <ChevronDown
                              size={17}
                              className="ivca-accordion-chevron"
                            />
                          </button>

                          {isOpen && (
                            <div className="ivca-accordion-content">
                              <p className="ivca-section-description">
                                {section.description}
                              </p>

                              {section.points && (
                                <div className="ivca-detail-points">
                                  {section.points.map(
                                    (point) => (
                                      <div
                                        key={point}
                                      >
                                        <CheckCircle2
                                          size={14}
                                        />
                                        <span>
                                          {point}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              )}

                              {section.subsections && (
                                <div className="ivca-subsections">
                                  {section.subsections.map(
                                    (
                                      sub,
                                      subIndex
                                    ) => (
                                      <div
                                        className="ivca-subsection"
                                        key={
                                          sub.title
                                        }
                                      >
                                        <div className="ivca-subsection-title">
                                          <span>
                                            {String(
                                              subIndex +
                                                1
                                            ).padStart(
                                              2,
                                              '0'
                                            )}
                                          </span>

                                          <h4>
                                            {sub.title}
                                          </h4>
                                        </div>

                                        <p>
                                          {sub.text}
                                        </p>

                                        {sub.bullets && (
                                          <ul>
                                            {sub.bullets.map(
                                              (
                                                bullet
                                              ) => (
                                                <li
                                                  key={
                                                    bullet
                                                  }
                                                >
                                                  {
                                                    bullet
                                                  }
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        )}
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
            )}

            {/* STEP NAVIGATION */}
            <div className="ivca-step-navigation">
              <button
                type="button"
                disabled={
                  Number(active.number) === 1
                }
                onClick={() =>
                  setActiveStep(
                    Number(active.number) - 1
                  )
                }
              >
                <ArrowLeft size={15} />
                <span>
                  Previous Step
                </span>
              </button>

              <div className="ivca-step-progress">
                <span>
                  {active.number}
                </span>

                <div>
                  {steps.map((step) => (
                    <i
                      key={step.number}
                      className={
                        Number(step.number) <=
                        Number(active.number)
                          ? 'is-filled'
                          : ''
                      }
                    />
                  ))}
                </div>

                <span>07</span>
              </div>

              <button
                type="button"
                disabled={
                  Number(active.number) === 7
                }
                onClick={() =>
                  setActiveStep(
                    Number(active.number) + 1
                  )
                }
              >
                <span>
                  Next Step
                </span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* QUICK REFERENCE */}
      <section className="ivca-reference">
        <div className="ivca-container">
          <div className="ivca-reference-box">
            <div className="ivca-reference-icon">
              <BookOpen
                size={21}
                strokeWidth={1.6}
              />
            </div>

            <div>
              <span>i-VCA REFERENCE STRUCTURE</span>

              <h2>
                From analysis to investment planning
              </h2>

              <p>
                The completed VCA provides the analytical
                basis for the succeeding Provincial
                Commodity Investment Plan formulation.
                Use the seven-step process as a guide
                from initial mobilization through review,
                approval, and preparation for translation
                into PCIP.
              </p>
            </div>

            <Link
              to="/planning/pcip"
              className="ivca-reference-button"
            >
              Continue to PCIP
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="ivca-navigation">
        <div className="ivca-container">
          <Link
            to="/planning/rma"
            className="ivca-nav-back"
          >
            <ArrowLeft size={15} />
            <span>
              Previous Stage · RMA
            </span>
          </Link>

          <div className="ivca-nav-center">
            <span>STAGE 03</span>
            <strong>IVCA</strong>
          </div>

          <Link
            to="/planning/pcip"
            className="ivca-nav-next"
          >
            <span>
              NEXT STAGE
            </span>

            <strong>
              PCIP Formulation
              <ArrowRight size={16} />
            </strong>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Ivca