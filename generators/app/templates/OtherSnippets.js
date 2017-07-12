// In reducer.js
import <%= upperCamel %>StateReducer from '../modules/<%= upperCamel %>/<%= upperCamel %>State';

<%= lowerCamel %>: <%= upperCamel %>StateReducer


// In parent component of a page. such as AccountPage.js

import <%= upperCamel %> from '../<%= upperCamel %>/<%= upperCamel %>Container';

<div id="<%= lowerSlash %>-container">
  <div id="<%= lowerSlash %>" className="container"><<%= upperCamel %> /></div>
</div>