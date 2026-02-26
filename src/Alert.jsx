import toast, { Toaster } from 'react-hot-toast';
import colors from './color.jsx';

export const showSuccess = (message) => {
  toast.success(message, {
    duration: 3000,
    style: {
      background: colors.success, //'#0f3d25',
      color: '#fff',
      fontWeight: '600',
      borderRadius: '14px',
      padding: '14px 20px',
      fontSize: '12px',
      borderLeft: '5px solid #22c55e',
      minWidth: '260px',
      maxWidth: '380px',
    },
    iconTheme: {
      primary: '#22c55e',
      secondary: '#0f3d25',
    },
  });
};

export const showError = (message) => {
  toast.error(message, {
    duration: 3000,
    style: {
      background: colors.error, //'#3d0f0f',
      color: '#fff',
      fontWeight: '600',
      borderRadius: '14px',
      padding: '14px 20px',
      fontSize: '12px',
      borderLeft: '5px solid #ef4444',
      minWidth: '260px',
      maxWidth: '380px',
    },
    iconTheme: {
      primary: '#ef4444',
      secondary: '#3d0f0f',
    },
  });
};