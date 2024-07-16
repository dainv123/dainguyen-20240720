import React from 'react';
import { Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CustomAlertProps {
    message?: string;
    severity: 'success' | 'info' | 'warning' | 'error';
    onClose?: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ 
    message = 'Failed to load data. Please try again later.', 
    severity, 
    onClose 
}) => {
    return (
        <Alert
            sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 9999 }}
            severity={severity}
            action={
                onClose && (
                    <IconButton
                        size="small"
                        color="inherit"
                        onClick={onClose}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                )
            }
        >
            {message}
        </Alert>
    );
};

export default CustomAlert;
