import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Lead, submitLead } from '../lib/supabase';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  source: 'trial' | 'whatsapp';
  onSuccess: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ isOpen, onClose, source, onSuccess }) => {
  const [formData, setFormData] = useState<Lead>({
    name: '',
    whatsapp: '',
    business_type: '',
    needs: '',
    source: source, // Initialize source from prop
  });
  
  const [errors, setErrors] = useState({
    name: '',
    whatsapp: '',
    business_type: '',
    needs: ''
  });

  // useEffect removed as formData.source is not directly used for submission logic

  /**
   * Handles the form submission event.
   * Prevents default form submission, logs form data, submits the lead,
   * and calls the onSuccess callback if submission is successful.
   * Logs success or failure status.
   * @param e The form event.
   */
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      whatsapp: '',
      business_type: '',
      needs: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap harus diisi';
      isValid = false;
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Nomor WhatsApp harus diisi';
      isValid = false;
    } else if (!/^[0-9]+$/.test(formData.whatsapp)) {
      newErrors.whatsapp = 'Nomor WhatsApp hanya boleh berisi angka';
      isValid = false;
    }

    if (!formData.business_type) {
      newErrors.business_type = 'Jenis usaha harus dipilih';
      isValid = false;
    }

    if (!formData.needs.trim()) {
      newErrors.needs = 'Kebutuhan harus diisi';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Create dataToSubmit explicitly using formData state and the source prop
    const dataToSubmit = {
      name: formData.name,
      whatsapp: formData.whatsapp,
      business_type: formData.business_type,
      needs: formData.needs,
      source: source, // Explicitly use the source prop passed from Footer
    };
    console.log('Form submitted with source prop:', source, 'and data to submit:', dataToSubmit); // Debugging final data
    const success = await submitLead(dataToSubmit);
    if (success) {
      console.log('Lead submission successful, calling onSuccess'); // Added for debugging
      onSuccess();
    } else {
      console.log('Lead submission failed'); // Added for debugging
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-semibold mb-4">
          {source === 'trial' ? 'Daftar Free Trial' : 'Hubungi via WhatsApp'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              required
              className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#008080] focus:border-[#008080]`}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nomor WhatsApp
            </label>
            <input
              type="tel"
              required
              className={`w-full px-3 py-2 border ${errors.whatsapp ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#008080] focus:border-[#008080]`}
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              pattern="[0-9]*"
              inputMode="numeric"
            />
            {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Jenis Usaha
            </label>
            <select
              required
              className={`w-full px-3 py-2 border ${errors.business_type ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#008080] focus:border-[#008080]`}
              value={formData.business_type}
              onChange={(e) => setFormData({ ...formData, business_type: e.target.value })}
            >
              {errors.business_type && <p className="text-red-500 text-xs mt-1">{errors.business_type}</p>}
              <option value="">Pilih jenis usaha</option>
              <option value="retail">Toko Retail/Kelontong</option>
              <option value="fnb">Restoran/Cafe</option>
              <option value="fashion">Fashion/Pakaian</option>
              <option value="service">Jasa/Service</option>
              <option value="other">Lainnya</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kebutuhan Anda
            </label>
            <textarea
              className={`w-full px-3 py-2 border ${errors.needs ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#008080] focus:border-[#008080]`}
              rows={3}
              value={formData.needs}
              onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
              placeholder="Ceritakan kebutuhan bisnis Anda..."
            />
            {errors.needs && <p className="text-red-500 text-xs mt-1">{errors.needs}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#008080] text-white py-2 px-4 rounded-md hover:bg-[#006666] transition-colors focus:outline-none focus:ring-2 focus:ring-[#008080] focus:ring-offset-2"
          >
            {source === 'trial' ? 'Mulai Free Trial' : 'Kirim & Chat WhatsApp'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;