import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'Dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'Payment',
    imgUrl: payment,
    link: '/payment',
  },
  {
    name: 'Withdraw',
    imgUrl: withdraw,
    link: '/withdraw',
  },
  {
    name: 'Pofile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'About',
    imgUrl: logout,
    link: '/about',
  },
];