import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import './AddStudent.css';

/* ---------- State & Constants ---------- */
const initialState = {
  fullName: '',
  dateOfBirth: '',
  gender: '',
  contactNumber: '',
  email: '',
  address: '',
  parentName: '',
  parentContact: '',
  board: '',
  stream: '',
  schoolName: '',
  yearOfPassing: '',
  subjects: [],
  totalPercentage: '',
  rollNumber: '',
  course: '',
  specialization: '',
  mode: '',
  hostelRequired: 'No',
  university: '',
  documents: {
    marksheet: null,
    tc: null,
    migration: null,
    photo: null,
    idProof: null,
  },
  paymentReceipt: null,
  declaration: false,
  studentSignature: '',
  guardianSignature: '',
};

const DOCUMENT_FIELDS = [
  { name: 'marksheet', label: 'Marksheet', accept: 'image/jpeg,image/png,application/pdf', required: true },
  { name: 'tc', label: 'Transfer Certificate (TC)', accept: 'image/jpeg,image/png,application/pdf', required: true },
  { name: 'migration', label: 'Migration', accept: 'image/jpeg,image/png,application/pdf', required: true },
  { name: 'photo', label: 'Passport Photo', accept: 'image/jpeg,image/png', required: true },
  { name: 'idProof', label: 'ID Proof', accept: 'image/jpeg,image/png,application/pdf', required: true },
];

const SUBJECTS_BY_STREAM = {
  Science: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'English', 'Physical Education', 'Informatics Practices', 'Environmental Science'],
  Commerce: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English', 'Informatics Practices', 'Entrepreneurship', 'Statistics'],
  Arts: ['History', 'Political Science', 'Geography', 'Economics', 'Sociology', 'Psychology', 'English', 'Hindi', 'Philosophy', 'Home Science'],
  Vocational: ['Information Technology', 'Tourism', 'Retail', 'Healthcare', 'Agriculture', 'Banking & Finance', 'Electronics', 'Automobile', 'Beauty & Wellness'],
};

const MAX_FILE_MB = 5;
const UNIVERSITIES = [
  'Indian Institute of Science (IISc), Bangalore',
  'Jawaharlal Nehru University (JNU), Delhi',
  'Banaras Hindu University (BHU), Varanasi',
  'Indian Institute of Technology (IIT) Bombay',
  'Indian Institute of Technology (IIT) Delhi',
];

/* ---------- Helpers ---------- */
function formatBytes(bytes) {
  if (!bytes && bytes !== 0) return '';
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), sizes.length - 1);
  return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 2)} ${sizes[i]}`;
}

const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'universityproject');
  formData.append('folder', 'students');

  try {
    const response = await axios.post('https://api.cloudinary.com/v1_1/dapjccnab/auto/upload', formData);
    return response.data.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Failed to upload file to Cloudinary');
  }
};

/* ---------- Component ---------- */
const AddStudentPopup = ({ isOpen, onClose, onAddStudent, onUpdateStudent, editingStudent }) => {
  const [formData, setFormData] = useState(initialState);
  const [step, setStep] = useState(1);
  const [fileErrors, setFileErrors] = useState({});
  const [customSubject, setCustomSubject] = useState('');

  const courses = ['B.Sc.', 'B.Com', 'BA', 'B.Tech'];

  useEffect(() => {
    if (editingStudent?.details) {
      const details = editingStudent.details;
      let coercedSubjects = details.subjects;
      if (typeof coercedSubjects === 'string') {
        coercedSubjects = coercedSubjects.split(',').map(s => s.trim()).filter(Boolean);
      }
      const next = {
        ...initialState,
        ...details,
        subjects: Array.isArray(coercedSubjects) ? coercedSubjects : [],
        totalPercentage: details.totalPercentage || details.marks || '',
        university: editingStudent.university || '',
      };
      setFormData(next);
    } else {
      setFormData(initialState);
    }
    setStep(1);
    setFileErrors({});
    setCustomSubject('');
  }, [editingStudent, isOpen]);

  const requiredDocs = useMemo(() => DOCUMENT_FIELDS.filter(d => d.required).map(d => d.name), []);
  const subjectOptions = useMemo(() => SUBJECTS_BY_STREAM[formData.stream] || [], [formData.stream]);

  const validateFile = (file, acceptString) => {
    if (!file) return 'No file selected.';
    if (file.size > MAX_FILE_MB * 1024 * 1024) return `File exceeds ${MAX_FILE_MB}MB limit.`;
    const allowed = acceptString.split(',').map(s => s.trim());
    if (!allowed.includes(file.type)) return `Invalid type. Allowed: ${allowed.join(', ')}`;
    return '';
  };

  const setDocument = (name, file) => setFormData(prev => ({ ...prev, documents: { ...prev.documents, [name]: file } }));
  const clearDocument = (name) => {
    setFormData(prev => ({ ...prev, documents: { ...prev.documents, [name]: null } }));
    setFileErrors(prev => { const copy = { ...prev }; delete copy[name]; return copy; });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleDocumentUpload = (e, name, accept) => {
    const file = e?.target?.files?.[0];
    if (!file) return;
    const err = validateFile(file, accept);
    if (err) return setFileErrors(prev => ({ ...prev, [name]: err }));
    setFileErrors(prev => ({ ...prev, [name]: '' }));
    setDocument(name, file);
  };

  const handlePaymentUpload = (e) => {
    const file = e?.target?.files?.[0];
    if (!file) return;
    const err = validateFile(file, 'image/jpeg,image/png,application/pdf');
    if (err) return setFileErrors(prev => ({ ...prev, paymentReceipt: err }));
    setFileErrors(prev => ({ ...prev, paymentReceipt: '' }));
    setFormData(prev => ({ ...prev, paymentReceipt: file }));
  };

  const toggleSubject = (subject) => setFormData(prev => ({
    ...prev,
    subjects: prev.subjects.includes(subject)
      ? prev.subjects.filter(s => s !== subject)
      : [...prev.subjects, subject]
  }));

  const addCustomSubject = () => {
    const s = customSubject.trim();
    if (!s) return;
    setFormData(prev => {
      if (prev.subjects.map(x => x.toLowerCase()).includes(s.toLowerCase())) return prev;
      return { ...prev, subjects: [...prev.subjects, s] };
    });
    setCustomSubject('');
  };

  const handleCustomSubjectKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addCustomSubject();
    }
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step === 3 && !validateStep3()) return;
    setStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const validateStep1 = () => {
    const required = ['fullName', 'dateOfBirth', 'gender', 'contactNumber', 'email', 'address', 'parentName', 'parentContact'];
    const ok = required.every(field => String(formData[field] || '').trim());
    if (!ok) alert('Please fill all required fields in Basic Student Details.');
    return ok;
  };

  const validateStep2 = () => {
    const required = ['board', 'stream', 'schoolName', 'yearOfPassing', 'rollNumber'];
    const okRequired = required.every(field => String(formData[field] || '').trim());
    if (!okRequired) return alert('Please fill all required Academic Details.');
    if (!formData.subjects.length) return alert('Please select at least one subject.');
    const pct = parseFloat(formData.totalPercentage);
    if (Number.isNaN(pct) || pct < 0 || pct > 100) return alert('Enter valid Total Percentage (0-100).');
    return true;
  };

  const validateStep3 = () => {
    if (!formData.course) return alert('Choose a course.');
    if (!formData.university) return alert('Choose a university.');
    if (Object.values(fileErrors).some(Boolean)) return alert('Fix file upload errors.');
    const missingDocs = requiredDocs.filter(doc => !formData.documents[doc]);
    if (missingDocs.length) return alert(`Upload required documents: ${missingDocs.join(', ')}.`);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.declaration) return alert('Please agree to the declaration.');

    try {
      const documentUrls = {};
      for (const docName of Object.keys(formData.documents)) {
        const file = formData.documents[docName];
        if (file) documentUrls[docName] = await uploadToCloudinary(file);
      }

      let paymentReceiptUrl = null;
      if (formData.paymentReceipt) paymentReceiptUrl = await uploadToCloudinary(formData.paymentReceipt);

      const studentData = {
        name: formData.fullName,
        email: formData.email,
        university: formData.university,
        status: editingStudent ? editingStudent.status : 'Pending',
        details: { ...formData, documents: documentUrls, paymentReceipt: paymentReceiptUrl },
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Removed Firebase add/update logic
      if (editingStudent) {
        onUpdateStudent(editingStudent.id, { id: editingStudent.id, ...studentData });
      } else {
        onAddStudent({ id: Date.now().toString(), ...studentData }); // temporary ID
      }

      onClose();
      setFormData(initialState);
      setStep(1);
    } catch (error) {
      console.error('Error saving student data:', error);
      alert('An error occurred while saving the data.');
    }
  };

  if (!isOpen) return null;

  /* ---------- UploadTile + JSX stays unchanged ---------- */
  // ... rest of your JSX remains exactly the same
};

export default AddStudentPopup;
