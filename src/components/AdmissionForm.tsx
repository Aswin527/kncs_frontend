import React, { useState } from 'react';

const AdmissionEnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    grade: '',
    parentName: '',
    contactNumber: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Enquiry submitted successfully! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Admission Enquiry
          </h1>
          <p className="mt-2 text-gray-600">
            Please fill out this form to receive information about admissions
          </p>
        </div>
        
        {/* Form Card */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student & Grade */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
                    Student's Name
                  </label>
                  <input 
                    id="studentName"
                    name="studentName"
                    type="text" 
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter student's name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                    Grade Applying For
                  </label>
                  <select 
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  >
                    <option value="">Select grade</option>
                    <option value="pre-kg">Pre-KG</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="grade1">Grade 1</option>
                    <option value="grade2">Grade 2</option>
                    <option value="grade3">Grade 3</option>
                    <option value="grade4">Grade 4</option>
                    <option value="grade5">Grade 5</option>
                    <option value="grade6">Grade 6</option>
                    <option value="grade7">Grade 7</option>
                    <option value="grade8">Grade 8</option>
                    <option value="grade9">Grade 9</option>
                    <option value="grade10">Grade 10</option>
                  </select>
                </div>
              </div>
              
              {/* Parent Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">
                    Parent/Guardian Name
                  </label>
                  <input 
                    id="parentName"
                    name="parentName"
                    type="text" 
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter parent's name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input 
                    id="contactNumber"
                    name="contactNumber"
                    type="tel" 
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter contact number"
                    required
                  />
                </div>
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter email address"
                  required
                />
              </div>
              
              {/* Message/Questions */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information or Questions
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                  placeholder="Any specific questions or information you'd like to know?"
                ></textarea>
              </div>
              
              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionEnquiryForm;