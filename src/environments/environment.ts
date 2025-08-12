import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:8100';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Tickets',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44350/',
    clientId: 'Tickets_Ionic',
    ClientSecret: '1q2w3E*',
    scope: 'offline_access Tickets',
    redirectUri: baseUrl,
    requireHttps: false,
  },
  apis: {
    default: {
      url: 'https://localhost:44350',
      rootNamespace: 'Tickets.WB',
    },
  },
} as Environment;

