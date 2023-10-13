import { Button } from '@mui/material';
import { styled } from '@mui/system';

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#2C3878',
  py: '14px',
  px: '32px',
  color: '#000000',
  // '&:hover': {
  //   backgroundColor: '#E5E5fd',
  // },
  width: '100%',
  textTransform: 'capitalize',
  '&.Mui-disabled': {
    backgroundColor: '#E5E5E5 !important',
  },
}));

export default PrimaryButton;