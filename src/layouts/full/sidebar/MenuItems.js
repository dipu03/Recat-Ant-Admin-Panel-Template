import {
   IconLayoutDashboard,IconUser,
} from '@tabler/icons';
import { uniqueId } from 'lodash';
const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'User',
    icon: IconUser,
    href: '/user',
  },
  
  {
    id: uniqueId(),
    title: 'Blog',
    icon: IconUser,
    href: '/blog',
  },
  {
    id: uniqueId(),
    title: 'Game',
    icon: IconUser,
    href: '/game',
  },
];

export default Menuitems;
