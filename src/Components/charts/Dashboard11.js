import React from 'react' 
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function Dashboard11() {
  return (
    <>
       <PowerBIEmbed
	embedConfig = {{
		type: 'report',   // Supported types: report, dashboard, tile, visual and qna
		id: '8b457fd5-6ae8-4f9a-b22d-9401fa2b982a',
		// embedUrl: '<Embed Url>',
		accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZjY2ZmFlMDItNWQzNi00OTViLWJmZTAtNzhhNmZmOWY4ZTZlLyIsImlhdCI6MTY3NTkzNjEyMiwibmJmIjoxNjc1OTM2MTIyLCJleHAiOjE2NzU5NDA5NTcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFMRm56QXovcTNlOHZDNjVKUzloK0hrNElGTDArWmxSYkFFc0srdEdSNjFocUJVS1pEc0MwSk85YjA5WmE0SDBlV3h1elNDNzhKTHBpU3hLSnpKczFxbDdhNFUwZzVFV1ZVSTJWL1JvYTRIdz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJpdCIsImdpdmVuX25hbWUiOiJkYXBhZGEiLCJpcGFkZHIiOiIxMDMuODIuMjIxLjE4NiIsIm5hbWUiOiJpdCwgZGFwYWRhIiwib2lkIjoiNDk3YTNhODQtZDc0MS00ZjIyLTk5OTItMjgyYmRmOTVhNDg3Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTU4ODA1MjYyLTE2NDkyNDM1MzEtMzY1NTQ5NzkxOC02Mjk3MzciLCJwdWlkIjoiMTAwMzdGRkVBRDdEMkU3OSIsInB3ZF9leHAiOiIxMDE5MzYzIiwicHdkX3VybCI6Imh0dHBzOi8vcG9ydGFsLm1pY3Jvc29mdG9ubGluZS5jb20vQ2hhbmdlUGFzc3dvcmQuYXNweCIsInJoIjoiMC5BUXdBQXE1djlqWmRXMG1fNEhpbV81LU9iZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQU1BQncuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoicFhEdVdES2tNMU5mSmM4SUM0QlhBbVRzeEJSS2xEdmlMT1lBVDhRUkJ4SSIsInRpZCI6ImY2NmZhZTAyLTVkMzYtNDk1Yi1iZmUwLTc4YTZmZjlmOGU2ZSIsInVuaXF1ZV9uYW1lIjoiZGFwYWRhLml0QHVuaWxldmVyLmNvbSIsInVwbiI6ImRhcGFkYS5pdEB1bmlsZXZlci5jb20iLCJ1dGkiOiI0ZHJ2ajhLLUlrU052Rk84X0Nva0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.g84sOdxBZi-tiztxvQnHk4SK5XhnWBMt5HFxQJuRAKE_hiMW7yur3zBf5xWP4l-lKkxkQuFzjtHjLJBHXOrQx59aeictqX2_wpgM1voUy53IJ65crMLx1USWpsZe_Ko_jp5ZrmJCSgSOudYSD2FhA_tDpXLxPOlNdNf8Cm_d3m6PIqFa-Z_fBbhVItTV0hlHOfW8ncosaIJjp2o7Uxq7wayvH0NDEC7agnTWZtbYGG1YFge70nRc9NniOr9jYDjAJ9HuopAvigDHOllALnfbO8sr6i1w9u8h6sJYk86PGO7HYIQwW6q6A174sOxML4gtkS9oHz8h0LW_s3qG0JW03g',
		tokenType: models.TokenType.Embed,
		settings: {
			panes: {
				filters: {
					expanded: false,
					visible: false
				}
			},
			background: models.BackgroundType.Transparent,
		}
	}}

	eventHandlers = { 
		new Map([
			['loaded', function () {console.log('Report loaded');}],
			['rendered', function () {console.log('Report rendered');}],
			['error', function (event) {console.log(event.detail);}]
		])
	}
		
	cssClassName = { "report-style-class" }

	getEmbeddedComponent = { (embeddedReport) => {
		this.report = embeddedReport ;
	}}
/>
    </>
  )
}

export default Dashboard11;