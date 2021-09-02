const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorStyles = manifest
    ? manifest['vendors.css']
    : 'assets/vendors.css';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendors.js';

  return `
	<!DOCTYPE html>
	<html lang="en">
	  <head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content="Platzi Video with ReactJS" />
		<title>Platzi Video</title>
		<link href=${mainStyles} rel="stylesheet" type="text/css" />
		<link href=${vendorStyles} rel="stylesheet" type="text/css" />
	  </head>
	  <body>
		<div id="app">${html}</div>
		<script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c',
          )}
		  </script>
		<script src=${mainBuild} type="text/javascript"></script>
		<script src=${vendorBuild} type="text/javascript"></script>
	  </body>
	</html>
	`;
};

export default setResponse;
