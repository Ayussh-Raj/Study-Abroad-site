// import React from "react";
// import { motion } from "framer-motion";
// import { User, Mail, Globe, Linkedin, Github } from "lucide-react";

// export default function Profile() {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center py-12">
//       {/* Heading with Animation */}
//       <motion.h1 
//         className="text-4xl font-bold mb-8 flex items-center gap-2"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <User size={32} className="text-blue-500" /> Profile
//       </motion.h1>

//       <motion.div 
//         className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-[90%] md:w-2/3 lg:w-1/2"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Profile Image with Animation */}
//         <motion.img 
//           src="https://cdn2.iconfinder.com/data/icons/contact-98/128/Global_Study-512.png"
//           alt="User Avatar"
//           className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
//           whileHover={{ scale: 1.1 }}
//         />

//         {/* User Name */}
//         <h2 className="text-2xl font-semibold">John Doe</h2>
//         <p className="text-gray-400">Full Stack Developer</p>

//         {/* Contact Details */}
//         <div className="mt-4">
//           <p className="flex items-center justify-center gap-2 text-gray-300">
//             <Mail size={20} /> johndoe@example.com
//           </p>
//           <p className="flex items-center justify-center gap-2 text-gray-300">
//             <Globe size={20} /> www.johndoe.dev
//           </p>
//         </div>

//         {/* Social Media Links */}
//         <motion.div 
//           className="mt-4 flex justify-center gap-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
//             <Linkedin size={24} className="text-blue-600" />
//           </a>
//           <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
//             <Github size={24} className="text-gray-400" />
//           </a>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }
// import React from "react";
// import { motion } from "framer-motion";
// import { User, Mail, Globe, Linkedin, Github } from "lucide-react";

// export default function Profile({ user }) {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center py-12">
//       {/* Heading with Animation */}
//       <motion.h1 
//         className="text-4xl font-bold mb-8 flex items-center gap-2"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <User size={32} className="text-blue-500" /> Profile
//       </motion.h1>

//       <motion.div 
//         className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-[90%] md:w-2/3 lg:w-1/2"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Profile Image with Animation */}
//         <motion.img 
//           src={user?.avatar || "https://cdn2.iconfinder.com/data/icons/contact-98/128/Global_Study-512.png"}
//           alt="User Avatar"
//           className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
//           whileHover={{ scale: 1.1 }}
//         />

//         {/* User Name */}
//         <h2 className="text-2xl font-semibold">{user?.name || "User Name"}</h2>
//         <p className="text-gray-400">{user?.role || "User Role"}</p>

//         {/* Contact Details */}
//         <div className="mt-4">
//           <p className="flex items-center justify-center gap-2 text-gray-300">
//             <Mail size={20} /> {user?.email || "user@example.com"}
//           </p>
//           <p className="flex items-center justify-center gap-2 text-gray-300">
//             <Globe size={20} /> {user?.website || "www.example.com"}
//           </p>
//         </div>

//         {/* Social Media Links */}
//         <motion.div 
//           className="mt-4 flex justify-center gap-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           {user?.linkedin && (
//             <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
//               <Linkedin size={24} className="text-blue-600" />
//             </a>
//           )}
//           {user?.github && (
//             <a href={user.github} target="_blank" rel="noopener noreferrer">
//               <Github size={24} className="text-gray-400" />
//             </a>
//           )}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }
// import React from "react";
// import { motion } from "framer-motion";
// import { User, Mail, Globe, Linkedin, Github, Flag, BookOpen, GraduationCap } from "lucide-react";

// export default function Profile({ user }) {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center py-12">
//       {/* Heading with Animation */}
//       <motion.h1 
//         className="text-4xl font-bold mb-8 flex items-center gap-2"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <User size={32} className="text-blue-500" /> Profile
//       </motion.h1>

//       <motion.div 
//         className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-[90%] md:w-2/3 lg:w-1/2"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Profile Image with Animation */}
//         <motion.img 
//           src={user?.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnJKvU_g8peIdDzX6AjltgmHezI4Q9nuK3oa3_9lzHgahOHFToRl8Shg&s"}
//           alt="User Avatar"
//           className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
//           whileHover={{ scale: 1.1 }}
//         />

//         {/* User Name */}
//         <h2 className="text-2xl font-semibold">{user?.name || "User Name"}</h2>
//         <p className="text-gray-400">{user?.role || "User Role"}</p>

//         {/* Contact Details */}
//         <div className="mt-4">
//           <p className="flex items-center justify-center gap-2 text-gray-300">
//             <Mail size={20} /> {user?.email || "user@example.com"}
//           </p>
//           <p className="flex items-center justify-center gap-2 text-gray-300">
//             <Globe size={20} /> {user?.website || "www.example.com"}
//           </p>
//         </div>

//         {/* Social Media Links */}
//         <motion.div 
//           className="mt-4 flex justify-center gap-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           {user?.linkedin && (
//             <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
//               <Linkedin size={24} className="text-blue-600" />
//             </a>
//           )}
//           {user?.github && (
//             <a href={user.github} target="_blank" rel="noopener noreferrer">
//               <Github size={24} className="text-gray-400" />
//             </a>
//           )}
//         </motion.div>

//         {/* Wishlist Section */}
//         <motion.div 
//           className="mt-6 text-left bg-gray-800 p-4 rounded-lg"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-xl font-semibold mb-2">Wishlist</h2>
//           <p className="flex items-center gap-2 text-gray-300">
//             <Flag size={20} /> <strong>Country:</strong> {user?.country || "N/A"}
//           </p>
//           <p className="flex items-center gap-2 text-gray-300">
//             <BookOpen size={20} /> <strong>Field of Study:</strong> {user?.fieldOfStudy || "N/A"}
//           </p>
//           <p className="flex items-center gap-2 text-gray-300">
//             <GraduationCap size={20} /> <strong>Type of Program:</strong> {user?.programType || "N/A"}
//           </p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { 
//   User, Mail, Globe, Linkedin, Github, Flag, BookOpen, GraduationCap, Edit3, Save 
// } from "lucide-react";

// export default function Profile() {
//   // Dummy Data
//   const dummyUser = {
//     avatar: "https://i.pravatar.cc/150?img=3",
//     name: "John Doe",
//     email: "johndoe@example.com",
//     website: "www.johndoe.com",
//     linkedin: "https://linkedin.com/in/johndoe",
//     github: "https://github.com/johndoe",
//     country: "USA",
//     fieldOfStudy: "Computer Science",
//     programType: "Masters",
//   };

//   // State Management
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState(dummyUser);

//   // Simulate API Call
//   useEffect(() => {
//     setTimeout(() => {
//       setUser(dummyUser);
//     }, 1000);
//   }, []);

//   // Handle Input Changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Toggle Edit Mode
//   const handleEdit = () => {
//     if (isEditing) {
//       setUser(formData); // Save changes
//     }
//     setIsEditing(!isEditing);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center py-12">
//       {/* Heading with Animation */}
//       <motion.h1 
//         className="text-4xl font-bold mb-8 flex items-center gap-2"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <User size={32} className="text-blue-500" /> Profile
//       </motion.h1>

//       <motion.div 
//         className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-[90%] md:w-2/3 lg:w-1/2"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Loading State */}
//         {!user ? (
//           <p className="text-gray-400">Loading profile...</p>
//         ) : (
//           <>
//             {/* Profile Image */}
//             <motion.img 
//               src={user?.avatar}
//               alt="User Avatar"
//               className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
//               whileHover={{ scale: 1.1 }}
//             />

//             {/* Editable Fields */}
//             <div className="text-left space-y-3">
//               {["name", "email", "website", "linkedin", "github", "country", "fieldOfStudy", "programType"].map((field) => (
//                 <div key={field} className="flex items-center gap-2">
//                   {field === "name" && <User size={20} />}
//                   {field === "email" && <Mail size={20} />}
//                   {field === "website" && <Globe size={20} />}
//                   {field === "linkedin" && <Linkedin size={20} />}
//                   {field === "github" && <Github size={20} />}
//                   {field === "country" && <Flag size={20} />}
//                   {field === "fieldOfStudy" && <BookOpen size={20} />}
//                   {field === "programType" && <GraduationCap size={20} />}
                  
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       name={field}
//                       value={formData[field]}
//                       onChange={handleChange}
//                       className="bg-gray-800 text-white px-2 py-1 rounded-md w-full"
//                       placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
//                     />
//                   ) : (
//                     <p className="text-gray-300">{user[field] || "N/A"}</p>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Edit Button */}
//             <motion.button
//               className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
//               onClick={handleEdit}
//               whileHover={{ scale: 1.05 }}
//             >
//               {isEditing ? <Save size={20} /> : <Edit3 size={20} />}
//               {isEditing ? "Save Changes" : "Edit Profile"}
//             </motion.button>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { 
//   User, Mail, Globe, Linkedin, Github, Flag, BookOpen, GraduationCap, Edit3, Save 
// } from "lucide-react";

// export default function Profile() {
//   // Dummy User Data
//   const dummyUser = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     website: "www.johndoe.com",
//     linkedin: "https://linkedin.com/in/johndoe",
//     github: "https://github.com/johndoe",
//     country: "USA",
//     fieldOfStudy: "Computer Science",
//     programType: "Masters",
//   };

//   // State Management
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState(dummyUser);
//   const [avatarUrl, setAvatarUrl] = useState("");

//   // Fetch avatar when user loads
//   useEffect(() => {
//     setTimeout(() => {
//       setUser(dummyUser);
//       generateAvatar(dummyUser.name);
//     }, 1000);
//   }, []);

//   // Generate avatar using Avatar Placeholder API
//   const generateAvatar = (name) => {
//     const url = `https://avatar.oxro.io/avatar?name=${encodeURIComponent(name)}&background=random`;
//     setAvatarUrl(url);
//   };

//   // Handle Input Changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Toggle Edit Mode
//   const handleEdit = () => {
//     if (isEditing) {
//       setUser(formData); // Save changes
//       generateAvatar(formData.name);
//     }
//     setIsEditing(!isEditing);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center py-12">
//       {/* Heading with Animation */}
//       <motion.h1 
//         className="text-4xl font-bold mb-8 flex items-center gap-2"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <User size={32} className="text-blue-500" /> Profile
//       </motion.h1>

//       <motion.div 
//         className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-[90%] md:w-2/3 lg:w-1/2"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Loading State */}
//         {!user ? (
//           <p className="text-gray-400">Loading profile...</p>
//         ) : (
//           <>
//             {/* Profile Image */}
//             <motion.img 
//               src={avatarUrl}
//               alt="User Avatar"
//               className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
//               whileHover={{ scale: 1.1 }}
//             />

//             {/* Editable Fields */}
//             <div className="text-left space-y-3">
//               {["name", "email", "website", "linkedin", "github", "country", "fieldOfStudy", "programType"].map((field) => (
//                 <div key={field} className="flex items-center gap-2">
//                   {field === "name" && <User size={20} />}
//                   {field === "email" && <Mail size={20} />}
//                   {field === "website" && <Globe size={20} />}
//                   {field === "linkedin" && <Linkedin size={20} />}
//                   {field === "github" && <Github size={20} />}
//                   {field === "country" && <Flag size={20} />}
//                   {field === "fieldOfStudy" && <BookOpen size={20} />}
//                   {field === "programType" && <GraduationCap size={20} />}
                  
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       name={field}
//                       value={formData[field]}
//                       onChange={handleChange}
//                       className="bg-gray-800 text-white px-2 py-1 rounded-md w-full"
//                       placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
//                     />
//                   ) : (
//                     <p className="text-gray-300">{user[field] || "N/A"}</p>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Edit Button */}
//             <motion.button
//               className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
//               onClick={handleEdit}
//               whileHover={{ scale: 1.05 }}
//             >
//               {isEditing ? <Save size={20} /> : <Edit3 size={20} />}
//               {isEditing ? "Save Changes" : "Edit Profile"}
//             </motion.button>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { User, Mail, Globe, Linkedin, Github, Flag, BookOpen, GraduationCap, Edit3, Save } from "lucide-react";

// export default function Profile() {
//   // Dummy Data
//   const dummyUser = {
//     avatar: "", // Avatar will be fetched from DiceBear API
//     name: "John Doe",
//     email: "johndoe@example.com",
//     website: "www.johndoe.com",
//     linkedin: "https://linkedin.com/in/johndoe",
//     github: "https://github.com/johndoe",
//     country: "USA",
//     fieldOfStudy: "Computer Science",
//     programType: "Masters",
//   };

//   // State Management
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState(dummyUser);

//   // Fetch Avatar from DiceBear API
//   const fetchAvatar = async () => {
//     const response = await fetch("https://avatars.dicebear.com/api/adventurer-neutral/johndoe.svg");
//     const avatarUrl = response.url;
//     setFormData((prevData) => ({ ...prevData, avatar: avatarUrl }));
//   };

//   // Simulate API Call
//   useEffect(() => {
//     fetchAvatar();
//     setTimeout(() => {
//       setUser(dummyUser);
//     }, 1000);
//   }, []);

//   // Handle Input Changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Toggle Edit Mode
//   const handleEdit = () => {
//     if (isEditing) {
//       setUser(formData); // Save changes
//     }
//     setIsEditing(!isEditing);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center py-12">
//       {/* Heading with Animation */}
//       <motion.h1
//         className="text-4xl font-bold mb-8 flex items-center gap-2"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <User size={32} className="text-blue-500" /> Profile
//       </motion.h1>

//       <motion.div
//         className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-[90%] md:w-2/3 lg:w-1/2"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Loading State */}
//         {!user ? (
//           <p className="text-gray-400">Loading profile...</p>
//         ) : (
//           <>
//             {/* Profile Image */}
//             <motion.img
//               src={formData.avatar}
//               alt="User Avatar"
//               className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
//               whileHover={{ scale: 1.1 }}
//             />

//             {/* Editable Fields */}
//             <div className="text-left space-y-3">
//               {["name", "email", "website", "linkedin", "github", "country", "fieldOfStudy", "programType"].map((field) => (
//                 <div key={field} className="flex items-center gap-2">
//                   {field === "name" && <User size={20} />}
//                   {field === "email" && <Mail size={20} />}
//                   {field === "website" && <Globe size={20} />}
//                   {field === "linkedin" && <Linkedin size={20} />}
//                   {field === "github" && <Github size={20} />}
//                   {field === "country" && <Flag size={20} />}
//                   {field === "fieldOfStudy" && <BookOpen size={20} />}
//                   {field === "programType" && <GraduationCap size={20} />}

//                   {isEditing ? (
//                     <input
//                       type="text"
//                       name={field}
//                       value={formData[field]}
//                       onChange={handleChange}
//                       className="bg-gray-800 text-white px-2 py-1 rounded-md w-full"
//                       placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
//                     />
//                   ) : (
//                     <p className="text-gray-300">{formData[field] || "N/A"}</p>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Edit Button */}
//             <motion.button
//               className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
//               onClick={handleEdit}
//               whileHover={{ scale: 1.05 }}
//             >
//               {isEditing ? <Save size={20} /> : <Edit3 size={20} />}
//               {isEditing ? "Save Changes" : "Edit Profile"}
//             </motion.button>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { User, Mail, Globe, Linkedin, Github, Flag, BookOpen, GraduationCap, Edit3, Save } from "lucide-react";

// export default function Profile() {
//   // Dummy Data
//   const dummyUser = {
//     avatar: "", // Avatar will be fetched from DiceBear API
//     name: "John Doe",
//     email: "johndoe@example.com",
//     website: "www.johndoe.com",
//     linkedin: "https://linkedin.com/in/johndoe",
//     github: "https://github.com/johndoe",
//     country: "USA",
//     fieldOfStudy: "Computer Science",
//     programType: "Masters",
//   };

//   // State Management
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState(dummyUser);

//   // Fetch Avatar from DiceBear API
//   const fetchAvatar = (name) => {
//     const sanitizedSeed = name.replace(/\s+/g, "");
//     return `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${sanitizedSeed}`;
//   };

//   // Simulate API Call
//   useEffect(() => {
//     setFormData((prevData) => ({ ...prevData, avatar: fetchAvatar(dummyUser.name) }));
//     setTimeout(() => {
//       setUser(dummyUser);
//     }, 1000);
//   }, []);

//   // Handle Input Changes
//   const handleChange = (e) => {
//     const updatedForm = { ...formData, [e.target.name]: e.target.value };
//     if (e.target.name === "name") {
//       updatedForm.avatar = fetchAvatar(e.target.value);
//     }
//     setFormData(updatedForm);
//   };

//   // Toggle Edit Mode
//   const handleEdit = () => {
//     if (isEditing) {
//       setUser(formData); // Save changes
//     }
//     setIsEditing(!isEditing);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center py-12">
//       {/* Heading with Animation */}
//       <motion.h1
//         className="text-4xl font-bold mb-8 flex items-center gap-2"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <User size={32} className="text-blue-500" /> Profile
//       </motion.h1>

//       <motion.div
//         className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-[90%] md:w-2/3 lg:w-1/2"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Loading State */}
//         {!user ? (
//           <p className="text-gray-400">Loading profile...</p>
//         ) : (
//           <>
//             {/* Profile Image */}
//             <motion.img
//               src={formData.avatar}
//               alt="User Avatar"
//               className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
//               whileHover={{ scale: 1.1 }}
//             />

//             {/* Editable Fields */}
//             <div className="text-left space-y-3">
//               {["name", "email", "website", "linkedin", "github", "country", "fieldOfStudy", "programType"].map((field) => (
//                 <div key={field} className="flex items-center gap-2">
//                   {field === "name" && <User size={20} />}
//                   {field === "email" && <Mail size={20} />}
//                   {field === "website" && <Globe size={20} />}
//                   {field === "linkedin" && <Linkedin size={20} />}
//                   {field === "github" && <Github size={20} />}
//                   {field === "country" && <Flag size={20} />}
//                   {field === "fieldOfStudy" && <BookOpen size={20} />}
//                   {field === "programType" && <GraduationCap size={20} />}

//                   {isEditing ? (
//                     <input
//                       type="text"
//                       name={field}
//                       value={formData[field]}
//                       onChange={handleChange}
//                       className="bg-gray-800 text-white px-2 py-1 rounded-md w-full"
//                       placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
//                     />
//                   ) : (
//                     <p className="text-gray-300">{formData[field] || "N/A"}</p>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Edit Button */}
//             <motion.button
//               className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
//               onClick={handleEdit}
//               whileHover={{ scale: 1.05 }}
//             >
//               {isEditing ? <Save size={20} /> : <Edit3 size={20} />}
//               {isEditing ? "Save Changes" : "Edit Profile"}
//             </motion.button>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { User, Mail, Globe, Linkedin, Github, Flag, BookOpen, GraduationCap, Edit3, Save } from "lucide-react";

// export default function Profile() {
//   // Dummy Data
//   const dummyUser = {
//     avatar: "",
//     name: "John Doe",
//     email: "johndoe@example.com",
//     website: "www.johndoe.com",
//     linkedin: "https://linkedin.com/in/johndoe",
//     github: "https://github.com/johndoe",
//     country: "USA",
//     fieldOfStudy: "Computer Science",
//     programType: "Masters",
//   };

//   // State Management
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState(dummyUser);

//   // Generate Gaming Avatar URL using DiceBear "bottts"
//   const generateAvatar = (name) => {
//     const sanitized = name.toLowerCase().replace(/\s+/g, ""); // Remove spaces
//     return `https://api.dicebear.com/7.x/bottts/svg?seed=${sanitized}`;
//   };

//   // Fetch Avatar initially
//   useEffect(() => {
//     setFormData((prevData) => ({ ...prevData, avatar: generateAvatar(prevData.name) }));
//     setTimeout(() => {
//       setUser(dummyUser);
//     }, 1000);
//   }, []);

//   // Handle Input Changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (name === "name") {
//       setFormData((prev) => ({ ...prev, avatar: generateAvatar(value) })); // Update avatar dynamically
//     }
//   };

//   // Toggle Edit Mode
//   const handleEdit = () => {
//     if (isEditing) {
//       setUser(formData); // Save changes
//     }
//     setIsEditing(!isEditing);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center py-12">
//       {/* Heading with Animation */}
//       <motion.h1
//         className="text-4xl font-bold mb-8 flex items-center gap-2"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <User size={32} className="text-blue-500" /> Profile
//       </motion.h1>

//       <motion.div
//         className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-[90%] md:w-2/3 lg:w-1/2"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Loading State */}
//         {!user ? (
//           <p className="text-gray-400">Loading profile...</p>
//         ) : (
//           <>
//             {/* Profile Image */}
//             <motion.img
//               src={formData.avatar}
//               alt="User Avatar"
//               className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
//               whileHover={{ scale: 1.1 }}
//             />

//             {/* Editable Fields */}
//             <div className="text-left space-y-3">
//               {["name", "email", "website", "linkedin", "github", "country", "fieldOfStudy", "programType"].map((field) => (
//                 <div key={field} className="flex items-center gap-2">
//                   {field === "name" && <User size={20} />}
//                   {field === "email" && <Mail size={20} />}
//                   {field === "website" && <Globe size={20} />}
//                   {field === "linkedin" && <Linkedin size={20} />}
//                   {field === "github" && <Github size={20} />}
//                   {field === "country" && <Flag size={20} />}
//                   {field === "fieldOfStudy" && <BookOpen size={20} />}
//                   {field === "programType" && <GraduationCap size={20} />}

//                   {isEditing ? (
//                     <input
//                       type="text"
//                       name={field}
//                       value={formData[field]}
//                       onChange={handleChange}
//                       className="bg-gray-800 text-white px-2 py-1 rounded-md w-full"
//                       placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
//                     />
//                   ) : (
//                     <p className="text-gray-300">{formData[field] || "N/A"}</p>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Edit Button */}
//             <motion.button
//               className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
//               onClick={handleEdit}
//               whileHover={{ scale: 1.05 }}
//             >
//               {isEditing ? <Save size={20} /> : <Edit3 size={20} />}
//               {isEditing ? "Save Changes" : "Edit Profile"}
//             </motion.button>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Mail, Globe, Flag, BookOpen, GraduationCap, Edit3, Save } from "lucide-react";

export default function Profile() {
  const dummyUser = {
    avatar: "",
    name: "User Name",
    email: "user@example.com",
    website: "www.example.com",
    country: "N/A",
    fieldOfStudy: "N/A",
    programType: "N/A",
  };

  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(dummyUser);

  const generateAvatar = (name) => {
    const sanitized = name.toLowerCase().replace(/\s+/g, "");
    return `https://api.dicebear.com/7.x/bottts/svg?seed=${sanitized}`;
  };

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, avatar: generateAvatar(prevData.name) }));
    setTimeout(() => {
      setUser(dummyUser);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "name") {
      setFormData((prev) => ({ ...prev, avatar: generateAvatar(value) }));
    }
  };

  const handleEdit = () => {
    if (isEditing) {
      setUser(formData);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16">
      <motion.div
        className="bg-gray-900 p-8 rounded-2xl shadow-lg text-center w-[90%] md:w-2/3 lg:w-1/2 xl:w-1/3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {!user ? (
          <p className="text-gray-400 text-lg">Loading profile...</p>
        ) : (
          <>
            <motion.img
              src={formData.avatar}
              alt="User Avatar"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-500"
              whileHover={{ scale: 1.1 }}
            />

            {/* Name Field */}
            <div className="flex items-center justify-center gap-3 text-2xl">
              <User size={28} />
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg w-3/4 text-center text-xl"
                />
              ) : (
                <h2 className="text-2xl font-semibold">{formData.name}</h2>
              )}
            </div>

            <p className="text-gray-400 text-lg mt-1">User Role</p>

            <div className="flex flex-col items-center mt-6 space-y-3 text-lg">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={24} />
                {isEditing ? (
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full text-lg"
                  />
                ) : (
                  <p>{formData.email}</p>
                )}
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Globe size={24} />
                {isEditing ? (
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full text-lg"
                  />
                ) : (
                  <p>{formData.website}</p>
                )}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl mt-8 w-full text-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Wishlist</h3>

              <div className="flex items-center gap-3 text-gray-300">
                <Flag size={24} />
                <span>Country:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full text-lg"
                  />
                ) : (
                  <p>{formData.country}</p>
                )}
              </div>

              <div className="flex items-center gap-3 text-gray-300 mt-2">
                <BookOpen size={24} />
                <span>Field of Study:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={handleChange}
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full text-lg"
                  />
                ) : (
                  <p>{formData.fieldOfStudy}</p>
                )}
              </div>

              <div className="flex items-center gap-3 text-gray-300 mt-2">
                <GraduationCap size={24} />
                <span>Type of Program:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="programType"
                    value={formData.programType}
                    onChange={handleChange}
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full text-lg"
                  />
                ) : (
                  <p>{formData.programType}</p>
                )}
              </div>
            </div>

            <motion.button
              className="mt-8 bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3 rounded-xl flex items-center gap-3"
              onClick={handleEdit}
              whileHover={{ scale: 1.05 }}
            >
              {isEditing ? <Save size={24} /> : <Edit3 size={24} />}
              {isEditing ? "Save Changes" : "Edit Profile"}
            </motion.button>
          </>
        )}
      </motion.div>
    </div>
  );
}

