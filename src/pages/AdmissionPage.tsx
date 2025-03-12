import React, { useState } from 'react';
// Define types for our components
type AdmissionRequirement = {
  id: number;
  title: string;
  description: string;
  details?: string[];
};

type FeeStructure = {
  grade: string;
  admissionFee: string;
  termFee: string;
  annualFee: string;
};

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const AdmissionPage: React.FC = () => {
  // Enhanced admission requirements with more details
  const admissionRequirements: AdmissionRequirement[] = [
    {
      id: 1,
      title: "Age Criteria",
      description: "KNC School follows a strict age policy to ensure children are placed in appropriate learning environments based on their developmental stage.",
      details: [
        "Pre-KG: Children must be 3+ years as of June 1st of the academic year",
        "LKG: Children must be 4+ years as of June 1st of the academic year",
        "UKG: Children must be 5+ years as of June 1st of the academic year",
        "Grade 1: Children must be 6+ years as of June 1st of the academic year",
        "For Grades 2-10: Age appropriate to the respective grade level"
      ]
    },
    // Other admission requirements remain the same...
    {
      id: 2,
      title: "Documents Required",
      description: "The following documents must be submitted along with the completed application form. All documents should be original with two sets of photocopies for verification.",
      details: [
        "Birth Certificate (original and photocopy)",
        "Previous School Transfer Certificate (TC) duly countersigned by the Education Department (for students seeking admission to Grades 2 and above)",
        "Report Cards/Progress Reports from the previous school (last 2 years)",
        "6 recent passport-sized color photographs of the child",
        "2 passport-sized color photographs of each parent/guardian",
        "Aadhar Card of the student and parents (original and photocopy)",
        "Residential address proof (Utility bill/Rental agreement/Property deed)",
        "Medical fitness certificate from a registered medical practitioner",
        "Blood group certificate",
        "Vaccination record",
        "For foreign nationals: Valid passport and visa details"
      ]
    },
    {
      id: 3,
      title: "Admission Process",
      description: "Our comprehensive admission process is designed to ensure the right fit between the school and prospective students.",
      details: [
        "Step 1: Collection of Application Form - Forms can be collected from the school office or downloaded from the website upon payment of application fee of ₹500",
        "Step 2: Submission of Completed Application Form with all required documents",
        "Step 3: Entrance Assessment - For Grades 2 and above, students undergo an academic assessment in English, Mathematics, and General Awareness",
        "Step 4: Interaction with Parents and Student - A personal interview with the Principal/Admission Committee",
        "Step 5: Selection Notification - Parents will be notified about the selection status within 7 working days",
        "Step 6: Payment of Admission Fee - Selected candidates must pay the admission fee within the stipulated time to secure admission",
        "Step 7: Orientation Program - Mandatory orientation session for new parents before the commencement of the academic year"
      ]
    },
    {
      id: 4,
      title: "Selection Criteria",
      description: "KNC School follows a holistic approach to selecting students. Multiple factors are considered during the admission process.",
      details: [
        "Age appropriateness for the applied grade",
        "Performance in entrance assessment (for applicable grades)",
        "Interaction with child and parents",
        "Availability of seats in the respective grade",
        "Preference to siblings of existing students (subject to meeting other criteria)",
        "Geographic proximity to the school for transportation convenience",
        "Alignment with the school's educational philosophy"
      ]
    },
    {
      id: 5,
      title: "Special Needs Policy",
      description: "KNC School is committed to inclusive education and accommodates students with mild to moderate learning differences.",
      details: [
        "Parents must disclose all information regarding the child's special educational needs at the time of application",
        "Submission of professional assessment reports/IEPs if the child has been previously diagnosed with any learning differences",
        "The school's Special Educational Needs Coordinator will assess if appropriate support can be provided",
        "Admission is subject to the school's ability to meet the specific needs of the child",
        "Additional support may require extra fees as determined by the school"
      ]
    }
  ];

  // Sample fee structure
  const feeStructure: FeeStructure[] = [
    { grade: "Pre-KG to UKG", admissionFee: "₹25,000", termFee: "₹15,000", annualFee: "₹45,000" },
    { grade: "Grades 1-5", admissionFee: "₹30,000", termFee: "₹18,000", annualFee: "₹54,000" },
    { grade: "Grades 6-8", admissionFee: "₹35,000", termFee: "₹20,000", annualFee: "₹60,000" },
    { grade: "Grades 9-10", admissionFee: "₹40,000", termFee: "₹22,000", annualFee: "₹66,000" }
  ];

  // FAQs
  const faqs: FAQ[] = [
    {
      id: 1,
      question: "When does the admission process start for the new academic year?",
      answer: "Admissions for the new academic year typically begin in November and continue until seats are filled."
    },
    {
      id: 2,
      question: "Is there a school bus facility available?",
      answer: "Yes, the school provides transportation facilities across various routes in Bangalore. The fee varies according to distance."
    },
    {
      id: 3,
      question: "What is the student-teacher ratio at KNC School?",
      answer: "We maintain a healthy ratio of 20:1 to ensure personalized attention to each student."
    },
    {
      id: 4,
      question: "Does the school offer any scholarships?",
      answer: "Yes, we offer merit-based scholarships for academically outstanding students and those excelling in sports and extracurricular activities."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div
        className="text-white relative"
        style={{
          backgroundImage: "./src/assets/about.jpg",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions Open for 2025-26</h1>
            <p className="text-xl mb-8">Join KNC School Vimanapura for an exceptional educational journey</p>
            <button
              onClick={() => window.location.href = "/admission_form"}
              className="bg-white text-indigo-700 hover:bg-indigo-50 transition-colors duration-300 font-bold px-8 py-4 rounded-full shadow-lg text-lg"
              aria-label="Apply for Admission"
            >
              Apply for Admission
            </button>
          </div>
        </div>
      </div>
        {/* Admission Requirements */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Admission Requirements</h2>
            
            <div className="space-y-8">
              {admissionRequirements.map((requirement) => (
                <div key={requirement.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-700">{requirement.title}</h3>
                  <p className="text-gray-700 mb-4">{requirement.description}</p>
                  
                  {requirement.details && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {requirement.details.map((detail, index) => (
                        <li key={index} className="pl-2">{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-semibold mb-3 text-indigo-700">Important Dates for 2025-26 Admissions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <span className="block text-sm text-gray-500">Application Forms Available</span>
                  <span className="font-medium">November 1, 2024 onwards</span>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <span className="block text-sm text-gray-500">Last Date for Form Submission</span>
                  <span className="font-medium">February 28, 2025</span>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <span className="block text-sm text-gray-500">Entrance Assessments</span>
                  <span className="font-medium">January - March 2025</span>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <span className="block text-sm text-gray-500">Results & Fee Payment</span>
                  <span className="font-medium">Within 7 days of assessment</span>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <span className="block text-sm text-gray-500">Parent Orientation</span>
                  <span className="font-medium">May 2025</span>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <span className="block text-sm text-gray-500">Academic Session Begins</span>
                  <span className="font-medium">June 10, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Structure */}
      <div className="py-16 container mx-auto px-4" id="fee-structure">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Fee Structure 2025-26</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-indigo-700 text-white py-4 px-6 text-left">Grade</th>
                  <th className="bg-indigo-700 text-white py-4 px-6 text-left">Admission Fee</th>
                  <th className="bg-indigo-700 text-white py-4 px-6 text-left">Term Fee</th>
                  <th className="bg-indigo-700 text-white py-4 px-6 text-left">Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-6 border-b border-gray-200">{fee.grade}</td>
                    <td className="py-4 px-6 border-b border-gray-200">{fee.admissionFee}</td>
                    <td className="py-4 px-6 border-b border-gray-200">{fee.termFee}</td>
                    <td className="py-4 px-6 border-b border-gray-200">{fee.annualFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-sm text-gray-600">
            <p>* Term fees are payable in three installments.</p>
            <p>* Annual fee includes books, stationery, and uniform.</p>
            <p>* Transportation fees are additional and based on distance.</p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-semibold cursor-pointer p-6 text-indigo-700">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-700">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      {/* <div className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join KNC School?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Take the first step towards providing your child with an exceptional education that prepares them for future success.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-white text-indigo-700 hover:bg-indigo-50 transition-colors duration-300 font-bold px-8 py-4 rounded-full shadow-lg text-lg"
            >
              Apply for Admission
            </button>
            <a 
              href="#contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-700 transition-colors duration-300 font-bold px-8 py-4 rounded-full shadow-lg text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AdmissionPage;