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
    title: 'Clients',
    icon: IconUser,
    href: '/client',
  },
  {
    id: uniqueId(),
    title: 'Blog',
    icon: IconUser,
    href: '/blog',
  },
];
export default Menuitems;
