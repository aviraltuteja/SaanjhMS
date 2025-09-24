"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, MapPin, GraduationCap } from "lucide-react";

interface FormData {
  email: string;
  password: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  timeOfBirth: string;
  placeOfBirth: string;
  rashi: string;
  height: string;
  weight: string;
  maritalStatus: string;
  complexion: string;
  diet: string;
  drink: boolean;
  smoke: boolean;
  hobbies: string;
  religion: string;
  motherTongue: string;
  caste: string;
  subCaste: string;
  gotra: string;
  manglik: boolean;
  education: string;
  collegeName: string;
  collegeYear: string;
  schoolName: string;
  schoolYear: string;
  otherDegree: string;
  otherOrg: string;
  otherYear: string;
  employedIn: string;
  workingSince: string;
  organization: string;
  annualIncome: string;
  familyType: string;
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  familyIncome: string;
  permanentAddress: string;
  residentialAddress: string;
  city: string;
  state: string;
  country: string;
  numberOfCars: string;
  numberOfBikes: string;
}

export default function SignupPage({ params }: { params: { uuid: string } }) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name: "",
    dateOfBirth: "",
    gender: "",
    timeOfBirth: "",
    placeOfBirth: "",
    rashi: "",
    height: "",
    weight: "",
    maritalStatus: "",
    complexion: "",
    diet: "",
    drink: false,
    smoke: false,
    hobbies: "",
    religion: "",
    motherTongue: "",
    caste: "",
    subCaste: "",
    gotra: "",
    manglik: false,
    education: "",
    collegeName: "",
    collegeYear: "",
    schoolName: "",
    schoolYear: "",
    otherDegree: "",
    otherOrg: "",
    otherYear: "",
    employedIn: "",
    workingSince: "",
    organization: "",
    annualIncome: "",
    familyType: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    familyIncome: "",
    permanentAddress: "",
    residentialAddress: "",
    city: "",
    state: "",
    country: "",
    numberOfCars: "0",
    numberOfBikes: "0",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/signup/${params.uuid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Redirect to dashboard after successful signup
        router.push(`/${data.userId}/client/dashboard`);
      } else {
        const error = await response.json();
        console.error("Signup failed:", error);
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-red-950 flex items-center justify-center p-4">
      <div className="bg-whiteshade rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">
              Complete Your Profile
            </h1>
            <p className="text-greyshade">
              Fill in your details to create your matrimony profile
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="bg-greyshade p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blackshade mb-4 flex items-center gap-2">
                <User size={20} />
                Basic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Marital Status *
                  </label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select Status</option>
                    <option value="NeverMarried">Never Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Separated">Separated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Physical Details */}
            <div className="bg-greyshade p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blackshade mb-4">
                Physical Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Height
                  </label>
                  <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    placeholder="e.g., 5'8\"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Complexion
                  </label>
                  <input
                    type="text"
                    name="complexion"
                    value={formData.complexion}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Diet *
                  </label>
                  <select
                    name="diet"
                    value={formData.diet}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select Diet</option>
                    <option value="Jain">Jain</option>
                    <option value="Veg">Vegetarian</option>
                    <option value="Eggetarian">Eggetarian</option>
                    <option value="NonVeg">Non-Vegetarian</option>
                  </select>
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="drink"
                      checked={formData.drink}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <span className="text-sm text-blackshade">Drinks</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="smoke"
                      checked={formData.smoke}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <span className="text-sm text-blackshade">Smokes</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Religious & Cultural Details */}
            <div className="bg-greyshade p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blackshade mb-4">
                Religious & Cultural Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Religion *
                  </label>
                  <select
                    name="religion"
                    value={formData.religion}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select Religion</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Christian">Christian</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Jain">Jain</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Parsi">Parsi</option>
                    <option value="Jewish">Jewish</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Mother Tongue
                  </label>
                  <input
                    type="text"
                    name="motherTongue"
                    value={formData.motherTongue}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Caste
                  </label>
                  <input
                    type="text"
                    name="caste"
                    value={formData.caste}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Sub Caste
                  </label>
                  <input
                    type="text"
                    name="subCaste"
                    value={formData.subCaste}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Gotra
                  </label>
                  <input
                    type="text"
                    name="gotra"
                    value={formData.gotra}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="manglik"
                    checked={formData.manglik}
                    onChange={handleInputChange}
                    className="rounded"
                  />
                  <span className="text-sm text-blackshade">Manglik</span>
                </div>
              </div>
            </div>

            {/* Education & Career */}
            <div className="bg-greyshade p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blackshade mb-4 flex items-center gap-2">
                <GraduationCap size={20} />
                Education & Career
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Education
                  </label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    College Name
                  </label>
                  <input
                    type="text"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Occupation
                  </label>
                  <input
                    type="text"
                    name="employedIn"
                    value={formData.employedIn}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Annual Income
                  </label>
                  <input
                    type="text"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Family Details */}
            <div className="bg-greyshade p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blackshade mb-4">
                Family Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    {`Father's Name`}
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    {`Father's Occupation`}
                  </label>
                  <input
                    type="text"
                    name="fatherOccupation"
                    value={formData.fatherOccupation}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    {` Mother's Name`}
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    {`Mother's Occupation`}
                  </label>
                  <input
                    type="text"
                    name="motherOccupation"
                    value={formData.motherOccupation}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-greyshade p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blackshade mb-4 flex items-center gap-2">
                <MapPin size={20} />
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blackshade mb-1">
                    Permanent Address
                  </label>
                  <textarea
                    name="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Hobbies */}
            <div className="bg-greyshade p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blackshade mb-4">
                Hobbies & Interests
              </h2>
              <div>
                <label className="block text-sm font-medium text-blackshade mb-1">
                  Hobbies (comma-separated)
                </label>
                <textarea
                  name="hobbies"
                  value={formData.hobbies}
                  onChange={handleInputChange}
                  placeholder="e.g., Reading, Swimming, Cooking"
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-whiteshade px-8 py-3 rounded-lg hover:bg-red-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium">
                {isSubmitting ? "Creating Profile..." : "Complete Registration"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
