import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// add render routes function
import { renderRoutes } from '../imports/startup/routes.jsx'

// render routes after DOM has loaded
Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('target'));
});
