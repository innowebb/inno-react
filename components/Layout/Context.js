import React from 'react';

export default React.createContext({
	userProfile: {},
	authenticationStatus: '',
	userRole: '',
	theme: '',
	lang: '',
	currency: '',
	logoutAction: () => {},
	activeRoute: '',
});
