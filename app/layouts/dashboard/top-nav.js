import PropTypes from 'prop-types';
import BellIcon from '@heroicons/react/24/solid/BellIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  useMediaQuery
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { usePopover } from '../../hooks/use-popover';
import { AccountPopover } from './account-popover';

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const accountPopover = usePopover();

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          position: 'sticky',
          left: {
            lg: `${SIDE_NAV_WIDTH}px`
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
          },
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            {!lgUp && (
              <IconButton onClick={onNavOpen}>
                <SvgIcon fontSize="small">
                  <Bars3Icon />
                </SvgIcon>
              </IconButton>
            )}
            <Tooltip title="Search">
              <IconButton>
                <SvgIcon fontSize="small">
                  <MagnifyingGlassIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip>
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <Tooltip title="Contacts">
              <IconButton>
                <SvgIcon fontSize="small">
                  <UsersIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton>
                <Badge
                  badgeContent={4}
                  color="success"
                  variant="dot"
                >
                  <SvgIcon fontSize="small">
                    <BellIcon />
                  </SvgIcon>
                </Badge>
              </IconButton>
            </Tooltip>
            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              sx={{
                cursor: 'pointer',
                height: 40,
                width: 40
              }}
              src="data:image/jpeg;base64,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"
            />
          </Stack>
        </Stack>
      </Box>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};
