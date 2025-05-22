/*import React, { useEffect, useState } from 'react';
import keycloak from './authClient';
import App from './App';

let keycloakInitialized = false;

const KeycloakProviderWrapper = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (!keycloakInitialized) {
      keycloakInitialized = true;

      keycloak.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      })
      .then(auth => {
        console.log("Keycloak auth status:", auth);
        if (auth) {
          setAuthenticated(true);
        } else {
          keycloak.login(); // Ridrejto për login nëse nuk është i loguar
        }
      })
      .catch(err => {
        console.error("Keycloak initialization failed:", err);
        console.log("Token:", keycloak.token);
        console.log("Token Parsed:", keycloak.tokenParsed);
        console.log("Keycloak instance:", keycloak);
      });
    }
  }, []);

  if (!authenticated) return <div>Loading authentication...</div>;

  return <App />;
};

export default KeycloakProviderWrapper;*/
