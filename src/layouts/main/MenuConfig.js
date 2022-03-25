import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Activity',
    path: '/activity',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'My Assets',
    path: '/my-assets',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Create',
    path: '/create',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  }
  // { title: 'Dashboard', path: PATH_DASHBOARD.root, icon: <Icon icon={fileFill} {...ICON_SIZE} /> }
];

export default menuConfig;
