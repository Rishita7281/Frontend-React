import React, { useState } from 'react';
import { Search, Star, Clock, MapPin, Heart, Plus, Minus, Activity, Bed, Droplets, Stethoscope, Calendar, Scissors, Phone, AlertCircle, Mail, Globe, UserPlus, LogIn } from 'lucide-react';

// Common button style for login/signup
const AuthButton = ({ onClick, icon: Icon, text }) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors bg-blue-600 text-white hover:bg-blue-700"
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// Login Page Component
const LoginPage = ({ onLoginSuccess, onNavigateToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setMessage('Please enter both email and password.');
      return;
    }
    // In a real app, you'd send this to a backend for authentication
    // For now, just simulate success
    setMessage('Login successful!');
    setTimeout(() => {
      onLoginSuccess(); // Navigate back to the main app on success
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Login to MedAppoint</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {message && (
            <p className={`text-center text-sm ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600 text-sm">
          Don't have an account?{' '}
          <button
            onClick={onNavigateToSignup}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

// Signup Page Component
const SignupPage = ({ onSignupSuccess, onNavigateToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !password || !confirmPassword) {
      setMessage('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    // In a real app, you'd send this to a backend for user registration
    // For now, just simulate success
    setMessage('Signup successful! Redirecting to login...');
    setTimeout(() => {
      onSignupSuccess(); // Navigate back to login after signup
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Sign Up for MedAppoint</h2>
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="+91-XXXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {message && (
            <p className={`text-center text-sm ${message.includes('successful') || message.includes('Redirecting') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <button
            onClick={onNavigateToLogin}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};


const HospitalManagementSystem = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [bookings, setBookings] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedTab, setSelectedTab] = useState('hospitals'); // Can be 'hospitals', 'bookings', 'emergency', 'login', 'signup'
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status

  // Sample data for hospitals (diversified descriptions)
  const hospitals = [
    {
      id: 1,
      name: "Medanta - The Medicity",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop",
      rating: 4.8,
      responseTime: "5-10 min",
      specialties: "Multi-specialty, Cardiology, Oncology, Neurology",
      location: "Sector 38, Gurugram",
      phone: "+91-124-4141414",
      beds: { total: 1250, available: 89 },
      icuBeds: { total: 150, available: 12 },
      bloodBank: {
        "A+": 45, "A-": 12, "B+": 32, "B-": 8,
        "AB+": 15, "AB-": 5, "O+": 67, "O-": 23
      },
      services: [
        {
          id: 101,
          name: "General Checkup",
          price: 800,
          doctor: "Dr. Sharma",
          available: true,
          image: "https://placehold.co/300x200/ADD8E6/000?text=General+Checkup"
        },
        {
          id: 102,
          name: "Cardiac Bypass Surgery",
          price: 350000,
          doctor: "Dr. Alok Gupta",
          available: true,
          image: "https://placehold.co/300x200/F08080/000?text=Cardiac+Surgery"
        },
        {
          id: 103,
          name: "Chemotherapy Session",
          price: 50000,
          doctor: "Dr. Ritu Patel",
          available: false,
          image: "https://placehold.co/300x200/90EE90/000?text=Chemotherapy"
        }
      ]
    },
    {
      id: 2,
      name: "Fortis Memorial Research Institute",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop",
      rating: 4.6,
      responseTime: "8-15 min",
      specialties: "Orthopedics, Neurology, Pediatrics, Gastroenterology",
      location: "Sector 44, Gurugram",
      phone: "+91-124-4962200",
      beds: { total: 900, available: 156 },
      icuBeds: { total: 100, available: 8 },
      bloodBank: {
        "A+": 32, "A-": 8, "B+": 28, "B-": 6,
        "AB+": 12, "AB-": 3, "O+": 54, "O-": 18
      },
      services: [
        {
          id: 201,
          name: "Joint Replacement Consultation",
          price: 1200,
          doctor: "Dr. Vikram Singh",
          available: true,
          image: "https://placehold.co/300x200/DDA0DD/000?text=Orthopedic+Consult"
        },
        {
          id: 202,
          name: "Pediatric Vaccination",
          price: 800,
          doctor: "Dr. Priya Verma",
          available: true,
          image: "https://placehold.co/300x200/FFD700/000?text=Pediatric+Care"
        },
        {
          id: 203,
          name: "Spine Surgery",
          price: 280000,
          doctor: "Dr. Rajesh Kumar",
          available: false,
          image: "https://placehold.co/300x200/B0E0E6/000?text=Spine+Surgery"
        }
      ]
    },
    {
      id: 3,
      name: "Artemis Hospital",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
      rating: 4.7,
      responseTime: "10-20 min",
      specialties: "Gastroenterology, Pulmonology, Oncology, Nephrology",
      location: "Sector 51, Gurugram",
      phone: "+91-124-5111111",
      beds: { total: 800, available: 73 },
      icuBeds: { total: 80, available: 15 },
      bloodBank: {
        "A+": 38, "A-": 10, "B+": 25, "B-": 7,
        "AB+": 14, "AB-": 4, "O+": 49, "O-": 21
      },
      services: [
        {
          id: 301,
          name: "Endoscopy Procedure",
          price: 14000,
          doctor: "Dr. Sanjay Kumar",
          available: true,
          image: "https://placehold.co/300x200/87CEEB/000?text=Endoscopy"
        },
        {
          id: 302,
          name: "Lung Function Test",
          price: 2500,
          doctor: "Dr. Meena Mehta",
          available: true,
          image: "https://placehold.co/300x200/FFB6C1/000?text=Lung+Test"
        },
        {
          id: 303,
          name: "Dialysis Session",
          price: 8000,
          doctor: "Dr. Ankit Sharma",
          available: true,
          image: "https://placehold.co/300x200/E6E6FA/000?text=Dialysis"
        }
      ]
    },
    {
      id: 4,
      name: "Max Healthcare",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop",
      rating: 4.5,
      responseTime: "7-12 min",
      specialties: "Cardiology, Orthopedics, General Surgery, ENT",
      location: "Sector 19, Dwarka, Delhi",
      phone: "+91-11-28055000",
      beds: { total: 600, available: 50 },
      icuBeds: { total: 70, available: 5 },
      bloodBank: {
        "A+": 28, "A-": 6, "B+": 20, "B-": 4,
        "AB+": 10, "AB-": 2, "O+": 40, "O-": 15
      },
      services: [
        {
          id: 401,
          name: "General Surgery Consultation",
          price: 1000,
          doctor: "Dr. Neha Malik",
          available: true,
          image: "https://placehold.co/300x200/FAFAD2/000?text=Surgery+Consult"
        },
        {
          id: 402,
          name: "Cataract Surgery",
          price: 40000,
          doctor: "Dr. Vivek Jain",
          available: true,
          image: "https://placehold.co/300x200/ADD8E6/000?text=Cataract+Surgery"
        },
        {
          id: 403,
          name: "ENT Checkup",
          price: 900,
          doctor: "Dr. Sumit Das",
          available: true,
          image: "https://placehold.co/300x200/FFC0CB/000?text=ENT+Checkup"
        }
      ]
    },
    {
      id: 5,
      name: "Apollo Hospital",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?w=400&h=300&fit=crop",
      rating: 4.9,
      responseTime: "6-10 min",
      specialties: "Cardiac Sciences, Neuroscience, Organ Transplants, Oncology",
      location: "Sarita Vihar, Delhi",
      phone: "+91-11-26925858",
      beds: { total: 700, available: 65 },
      icuBeds: { total: 90, available: 10 },
      bloodBank: {
        "A+": 50, "A-": 15, "B+": 35, "B-": 10,
        "AB+": 18, "AB-": 6, "O+": 70, "O-": 25
      },
      services: [
        {
          id: 501,
          name: "Heart Transplant Evaluation",
          price: 5000,
          doctor: "Dr. Ashok Seth",
          available: true,
          image: "https://placehold.co/300x200/ADD8E6/000?text=Heart+Eval"
        },
        {
          id: 502,
          name: "Brain Tumor Consultation",
          price: 2000,
          doctor: "Dr. V.S. Mehta",
          available: true,
          image: "https://placehold.co/300x200/FF6347/000?text=Brain+Consult"
        },
        {
          id: 503,
          name: "Kidney Transplant Assessment",
          price: 4500,
          doctor: "Dr. Sandeep Guleria",
          available: false,
          image: "https://placehold.co/300x200/8FBC8F/000?text=Kidney+Assess"
        }
      ]
    },
    {
      id: 6,
      name: "Paras Hospitals",
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&h=300&fit=crop",
      rating: 4.4,
      responseTime: "10-18 min",
      specialties: "Neurosciences, Orthopedics, Mother & Child Care, Oncology",
      location: "Sector 43, Gurugram",
      phone: "+91-124-4585600",
      beds: { total: 400, available: 30 },
      icuBeds: { total: 40, available: 7 },
      bloodBank: {
        "A+": 25, "A-": 5, "B+": 18, "B-": 3,
        "AB+": 8, "AB-": 1, "O+": 35, "O-": 10
      },
      services: [
        {
          id: 601,
          name: "Childbirth Delivery",
          price: 60000,
          doctor: "Dr. Pooja Sharma",
          available: true,
          image: "https://placehold.co/300x200/FFE4B5/000?text=Childbirth"
        },
        {
          id: 602,
          name: "Pediatric Cardiology",
          price: 1800,
          doctor: "Dr. Arun Singh",
          available: true,
          image: "https://placehold.co/300x200/DDA0DD/000?text=Pediatric+Cardio"
        },
        {
          id: 603,
          name: "Brain Stroke Treatment",
          price: 150000,
          doctor: "Dr. Anand Kumar",
          available: false,
          image: "https://placehold.co/300x200/AFEEEE/000?text=Stroke+Treatment"
        }
      ]
    },
    {
      id: 7,
      name: "Indraprastha Apollo Hospitals",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
      rating: 4.7,
      responseTime: "8-12 min",
      specialties: "Cardiac Sciences, Gastroenterology, Nephrology, Urology",
      location: "Mathura Road, New Delhi",
      phone: "+91-11-26925858",
      beds: { total: 700, available: 60 },
      icuBeds: { total: 80, available: 10 },
      bloodBank: {
        "A+": 40, "A-": 10, "B+": 30, "B-": 7,
        "AB+": 16, "AB-": 4, "O+": 60, "O-": 20
      },
      services: [
        {
          id: 701,
          name: "Gastric Bypass Surgery",
          price: 200000,
          doctor: "Dr. B. K. Singh",
          available: true,
          image: "https://placehold.co/300x200/E0FFFF/000?text=Gastric+Bypass"
        },
        {
          id: 702,
          name: "Kidney Stone Removal",
          price: 75000,
          doctor: "Dr. R. K. Gupta",
          available: true,
          image: "https://placehold.co/300x200/FFFACD/000?text=Kidney+Stone"
        },
        {
          id: 703,
          name: "Prostatectomy",
          price: 180000,
          doctor: "Dr. A. K. Jain",
          available: false,
          image: "https://placehold.co/300x200/D8BFD8/000?text=Prostatectomy"
        }
      ]
    },
    {
      id: 8,
      name: "Manipal Hospital",
      image: "https://images.pexels.com/photos/287227/pexels-photo-287227.jpeg?w=400&h=300&fit=crop",
      rating: 4.3,
      responseTime: "12-25 min",
      specialties: "Orthopedics, Oncology, Cardiology, Emergency Medicine",
      location: "Dwarka, New Delhi",
      phone: "+91-11-49674967",
      beds: { total: 500, available: 45 },
      icuBeds: { total: 50, available: 8 },
      bloodBank: {
        "A+": 20, "A-": 4, "B+": 15, "B-": 2,
        "AB+": 6, "AB-": 1, "O+": 30, "O-": 8
      },
      services: [
        {
          id: 801,
          name: "Sports Injury Treatment",
          price: 10000,
          doctor: "Dr. Rahul Gupta",
          available: true,
          image: "https://placehold.co/300x200/B0C4DE/000?text=Sports+Injury"
        },
        {
          id: 802,
          name: "Cancer Radiation Therapy",
          price: 90000,
          doctor: "Dr. Preeti Singh",
          available: true,
          image: "https://placehold.co/300x200/8B0000/000?text=Radiation+Therapy"
        },
        {
          id: 803,
          name: "Cardiac Angioplasty",
          price: 250000,
          doctor: "Dr. Sameer Khan",
          available: false,
          image: "https://placehold.co/300x200/F0F8FF/000?text=Angioplasty"
        }
      ]
    }
  ];

  const specialties = ['All', 'Cardiology', 'Orthopedics', 'Neurology', 'Oncology', 'Pediatrics', 'Gastroenterology', 'Pulmonology', 'Nephrology', 'Emergency'];

  const addToBookings = (service, hospitalName, hospitalPhone) => {
    if (!isLoggedIn) {
      // In a real app, you might show a modal or redirect to login.
      // For now, we'll navigate to the login page.
      setSelectedTab('login');
      return;
    }
    const existingItem = bookings.find(item => item.id === service.id);
    if (!existingItem && service.available) {
      setBookings([...bookings, {
        ...service,
        hospitalName,
        hospitalPhone,
        bookingId: Date.now(),
        status: 'Pending',
        appointmentDate: new Date().toLocaleDateString()
      }]);
    }
  };

  const removeFromBookings = (serviceId) => {
    setBookings(bookings.filter(item => item.id !== serviceId));
  };

  const toggleFavorite = (hospitalId) => {
    if (!isLoggedIn) {
      setSelectedTab('login');
      return;
    }
    setFavorites(prev =>
      prev.includes(hospitalId)
        ? prev.filter(id => id !== hospitalId)
        : [...prev, hospitalId]
    );
  };

  const getTotalCost = () => {
    return bookings.reduce((total, item) => total + item.price, 0);
  };

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hospital.specialties.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' ||
                           hospital.specialties.toLowerCase().includes(selectedSpecialty.toLowerCase());
    return matchesSearch && matchesSpecialty;
  });

  const BloodBankStatus = ({ bloodBank }) => (
    <div className="mt-4 p-3 bg-red-50 rounded-lg">
      <h6 className="font-medium mb-2 flex items-center">
        <Droplets className="w-4 h-4 mr-1 text-red-600" />
        Blood Bank Status
      </h6>
      <div className="grid grid-cols-4 gap-2 text-xs">
        {Object.entries(bloodBank).map(([type, count]) => (
          <div key={type} className={`p-2 rounded text-center ${count > 20 ? 'bg-green-100 text-green-700' : count > 10 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
            <div className="font-semibold">{type}</div>
            <div>{count} units</div>
          </div>
        ))}
      </div>
    </div>
  );

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setSelectedTab('hospitals'); // Redirect to main app after login
  };

  const handleSignupSuccess = () => {
    setSelectedTab('login'); // Redirect to login after signup
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-600 flex items-center cursor-pointer" onClick={() => setSelectedTab('hospitals')}>
                <Activity className="w-8 h-8 mr-2" />
                MedAppoint
              </h1>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-1" />
                <span className="text-sm">Gurugram, Haryana</span>
              </div>
            </div>

            {selectedTab === 'hospitals' && ( // Only show search on hospitals tab
                <div className="relative flex-1 max-w-md mx-8">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search hospitals, doctors, or specialties..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
            )}


            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => setSelectedTab('bookings')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      selectedTab === 'bookings'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Bookings ({bookings.length})</span>
                  </button>

                  <button
                    onClick={() => setSelectedTab('emergency')}
                    className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Emergency</span>
                  </button>
                  <AuthButton onClick={() => { setIsLoggedIn(false); setSelectedTab('hospitals'); }} text="Logout" icon={LogIn} />
                </>
              ) : (
                <>
                  <AuthButton onClick={() => setSelectedTab('login')} text="Login" icon={LogIn} />
                  <AuthButton onClick={() => setSelectedTab('signup')} text="Sign Up" icon={UserPlus} />
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Emergency Alert Banner */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-sm font-medium">🚨 Emergency Helpline: 102 | Ambulance: 108</span>
        </div>
      </div>

      {selectedTab === 'login' && (
        <LoginPage onLoginSuccess={handleLoginSuccess} onNavigateToSignup={() => setSelectedTab('signup')} />
      )}

      {selectedTab === 'signup' && (
        <SignupPage onSignupSuccess={handleSignupSuccess} onNavigateToLogin={() => setSelectedTab('login')} />
      )}

      {selectedTab === 'hospitals' && (
        <>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">Find the Best Healthcare Near You</h2>
              <p className="text-xl opacity-90">Real-time hospital information, bed availability, and instant booking</p>
            </div>
          </section>

          {/* Specialties */}
          <section className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {specialties.map(specialty => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedSpecialty === specialty
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </section>

          {/* Hospitals Grid */}
          <section className="max-w-7xl mx-auto px-4 pb-8">
            <h3 className="text-2xl font-bold mb-6">Hospitals Near You</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredHospitals.map(hospital => (
                <div key={hospital.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-full h-48 object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/E0E0E0/000?text=Hospital"; }}
                    />
                    <button
                      onClick={() => toggleFavorite(hospital.id)}
                      className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.includes(hospital.id)
                            ? 'text-red-500 fill-current'
                            : 'text-gray-400'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">{hospital.name}</h4>
                      <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded">
                        <Star className="w-4 h-4 text-green-600 fill-current" />
                        <span className="text-sm font-medium text-green-600">{hospital.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-2">{hospital.specialties}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{hospital.responseTime}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-1" />
                        <span>{hospital.phone}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      {hospital.location}
                    </div>

                    {/* Bed Availability */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center mb-1">
                          <Bed className="w-4 h-4 text-blue-600 mr-1" />
                          <span className="text-sm font-medium">General Beds</span>
                        </div>
                        <div className="text-lg font-bold text-blue-600">
                          {hospital.beds.available}/{hospital.beds.total}
                        </div>
                        <div className="text-xs text-gray-600">Available</div>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <div className="flex items-center mb-1">
                          <Activity className="w-4 h-4 text-red-600 mr-1" />
                          <span className="text-sm font-medium">ICU Beds</span>
                        </div>
                        <div className="text-lg font-bold text-red-600">
                          {hospital.icuBeds.available}/{hospital.icuBeds.total}
                        </div>
                        <div className="text-xs text-gray-600">Available</div>
                      </div>
                    </div>

                    {/* Blood Bank Status */}
                    <BloodBankStatus bloodBank={hospital.bloodBank} />

                    {/* Hospital Services */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h5 className="font-medium mb-3">Available Services</h5>
                      <div className="space-y-3">
                        {hospital.services.map(service => (
                          <div key={service.id} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 flex-1">
                              <img
                                src={service.image}
                                alt={service.name}
                                className="w-12 h-12 object-cover rounded-lg"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/E0E0E0/000?text=Service"; }}
                              />
                              <div>
                                <p className="font-medium text-sm">{service.name}</p>
                                <p className="text-xs text-gray-500">{service.doctor}</p>
                                <p className="text-blue-600 font-semibold text-sm">₹{service.price.toLocaleString()}</p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              {!service.available ? (
                                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                                  Unavailable
                                </span>
                              ) : bookings.find(item => item.id === service.id) ? (
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                                    Booked
                                  </span>
                                  <button
                                    onClick={() => removeFromBookings(service.id)}
                                    className="text-red-600 hover:text-red-700 text-xs"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => addToBookings(service, hospital.name, hospital.phone)}
                                  className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                                >
                                  Book
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredHospitals.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No hospitals found matching your search.</p>
              </div>
            )}
          </section>

          {/* New Section: About MedAppoint */}
          <section className="bg-blue-50 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h3 className="text-3xl font-bold text-blue-800 mb-6">About MedAppoint</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                MedAppoint is your comprehensive solution for hassle-free healthcare management.
                We connect you with top hospitals and clinics, offering real-time information
                on bed availability, specialized services, and instant appointment booking.
                Our mission is to simplify your healthcare journey, ensuring you get the
                care you need, when you need it.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <Stethoscope className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Expert Care</h4>
                  <p className="text-gray-600">Access to a network of highly-rated hospitals and specialist doctors.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <Calendar className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Easy Booking</h4>
                  <p className="text-gray-600">Schedule appointments effortlessly with real-time availability updates.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <Clock className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
                  <p className="text-gray-600">Dedicated support to assist you with any queries or emergencies.</p>
                </div>
              </div>
            </div>
          </section>

          {/* New Section: How It Works */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h3 className="text-3xl font-bold text-center mb-10">How MedAppoint Works</h3>
              <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex flex-col items-center text-center max-w-sm">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Search className="w-10 h-10 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">1. Search & Filter</h4>
                  <p className="text-gray-600">Easily find hospitals by name, specialty, or location.</p>
                </div>
                <div className="flex flex-col items-center text-center max-w-sm">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Bed className="w-10 h-10 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">2. Check Availability</h4>
                  <p className="text-gray-600">View real-time bed status and service availability.</p>
                </div>
                <div className="flex flex-col items-center text-center max-w-sm">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Calendar className="w-10 h-10 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">3. Book Appointment</h4>
                  <p className="text-gray-600">Book your desired service with a few simple clicks.</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {selectedTab === 'bookings' && (
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">My Appointments</h3>
            <button
              onClick={() => setSelectedTab('hospitals')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Book New Appointment
            </button>
          </div>

          {bookings.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No appointments booked yet.</p>
              <button
                onClick={() => setSelectedTab('hospitals')}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Find Hospitals
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map(booking => (
                <div key={booking.bookingId} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold">{booking.name}</h4>
                      <p className="text-gray-600">{booking.hospitalName}</p>
                      <p className="text-sm text-gray-500">Dr. {booking.doctor}</p>
                      <p className="text-sm text-gray-500">Date: {booking.appointmentDate}</p>
                      <p className="text-lg font-semibold text-blue-600 mt-2">₹{booking.price.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
                        {booking.status}
                      </span>
                      <div className="mt-2">
                        <button
                          onClick={() => removeFromBookings(booking.id)}
                          className="text-red-600 hover:text-red-700 text-sm"
                        >
                          Cancel Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {selectedTab === 'emergency' && (
        <section className="max-w-7xl mx-auto px-4 py-8">
          <h3 className="text-2xl font-bold mb-6 text-red-600">Emergency Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <AlertCircle className="w-8 h-8 text-red-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Emergency Helpline</h4>
              <p className="text-2xl font-bold text-red-600">102</p>
              <p className="text-sm text-gray-600">24/7 Medical Emergency</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <Activity className="w-8 h-8 text-red-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Ambulance Service</h4>
              <p className="text-2xl font-bold text-red-600">108</p>
              <p className="text-sm text-gray-600">Emergency Ambulance</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <Phone className="w-8 h-8 text-red-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Police Emergency</h4>
              <p className="text-2xl font-bold text-red-600">100</p>
              <p className="text-sm text-gray-600">Police Emergency</p>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold mb-4">Nearest Emergency Hospitals</h4>
            <div className="space-y-4">
              {hospitals.map(hospital => (
                <div key={hospital.id} className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h5 className="font-semibold">{hospital.name}</h5>
                    <p className="text-sm text-gray-600">{hospital.location}</p>
                    <p className="text-sm text-gray-500">Response Time: {hospital.responseTime}</p>
                  </div>
                  <div className="text-right">
                    <a
                      href={`tel:${hospital.phone}`}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 inline-flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking Summary (if items in bookings) */}
      {bookings.length > 0 && selectedTab === 'hospitals' && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <p className="font-semibold">
                {bookings.length} appointment{bookings.length > 1 ? 's' : ''} booked
              </p>
              <p className="text-sm text-gray-600">Total Cost: ₹{getTotalCost().toLocaleString()}</p>
            </div>
            <button
              onClick={() => setSelectedTab('bookings')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Appointments
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: MedAppoint Info */}
          <div>
            <h4 className="text-lg font-bold text-blue-400 mb-4 flex items-center">
              <Activity className="w-6 h-6 mr-2" />
              MedAppoint
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted partner for seamless healthcare management.
              Find hospitals, book appointments, and access emergency services with ease.
            </p>
            <div className="flex items-center text-gray-300 text-sm">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:support@medappoint.com" className="hover:text-blue-400">support@medappoint.com</a>
            </div>
            <div className="flex items-center text-gray-300 text-sm mt-2">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm mt-2">
              <Globe className="w-4 h-4 mr-2" />
              <a href="https://www.medappoint.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">www.medappoint.com</a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-blue-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-blue-400" onClick={() => setSelectedTab('hospitals')}>Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400" onClick={() => setSelectedTab('hospitals')}>Hospitals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400" onClick={() => setSelectedTab('bookings')}>My Bookings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400" onClick={() => setSelectedTab('emergency')}>Emergency</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">About Us</a></li> {/* This link will need a new page/section if implemented */}
            </ul>
          </div>

          {/* Section 3: Services */}
          <div>
            <h4 className="text-lg font-bold text-blue-400 mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Appointment Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Bed Availability</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Blood Bank Status</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Specialist Consultations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Emergency Services</a></li>
            </ul>
          </div>

          {/* Section 4: Legal & Contact */}
          <div>
            <h4 className="text-lg font-bold text-blue-400 mb-4">Legal & Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Support</a></li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-300 text-sm">
                Address: 123 Healthcare Lane, Sector 38, Gurugram, Haryana, India.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} MedAppoint. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HospitalManagementSystem;
