import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import {
  Box,
  ButtonBase,
  Divider,
  Drawer,
  Stack,
  useMediaQuery
} from '@mui/material';
import Image from 'next/image';
import {
  useDispatch
} from 'react-redux';
import { logOut } from '../../redux/features/authSlice/thunk';
// import { Logo } from 'src/components/logo';
import { Scrollbar } from '../../components/scrollbar';
import { items } from './config';
import { HiOutlineLogout } from "react-icons/hi";
import { SideNavItem } from './side-nav-item';

export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const dispatch = useDispatch();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%'
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: 'inline-flex',
              height: 90,
              width: 90,
              marginLeft: '30%',
            }}
          >
            <Image
              src="/images/logo.png"
              width={300}
              height={300}
              alt="Logo"
            />
          </Box>
          {/* <Box
            sx={{
              alignItems: 'center',
              backgroundColor: '#F5F5DC',
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2,
              p: '12px'
            }}
          >
            <div>
              <Typography
                color="inherit"
                variant="subtitle1"
              >
                Devias
              </Typography>
              <Typography
                color="neutral.400"
                variant="body2"
              >
                Production
              </Typography>
            </div>
            <SvgIcon
              fontSize="small"
              sx={{ color: 'neutral.500' }}
            >
              <ChevronUpDownIcon />
            </SvgIcon>
          </Box> */}
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
            }}
          >
            {items.map((item, index) => {
              const active = item.path ? (pathname === item.path) : false;

              return (
                <div key={index}>
                  <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
                </div>
              );
            })}
          </Stack>
          <ButtonBase
            sx={{
              alignItems: 'center',
              borderRadius: 1,
              display: 'flex',
              justifyContent: 'flex-start',
              mt: '5%',
              pl: '16px',
              pr: '16px',
              py: '6px',
              textAlign: 'left',
              width: '100%',
              color: '#F04438',
              '&:hover': {
                backgroundColor: '#ccc',
                color: '#F04438',
              }
            }}
            onClick={() => {
              dispatch(logOut())
            }}
          >
              <Box
                component="span"
                sx={{
                  alignItems: 'center',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  mr: 2,
                }}
              >
                <HiOutlineLogout />
              </Box>
            <Box
              component="span"
              sx={{
                flexGrow: 1,
                fontFamily: (theme) => theme.typography.fontFamily,
                fontSize: 14,
                fontWeight: 600,
                lineHeight: '24px',
                whiteSpace: 'nowrap',
              }}
            >
              Logout
            </Box>
          </ButtonBase>
        </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: '#004225',
            color: '#F5F5DC',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: '#004225',
          color: '#F5F5DC',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
