const params = new URLSearchParams(window.location.search);

const results = document.querySelector("#results");

results.innerHTML = `
<p><strong>First Name:</strong> ${params.get("fname")}</p>
<p><strong>Last Name:</strong> ${params.get("lname")}</p>
<p><strong>Email:</strong> ${params.get("email")}</p>
<p><strong>Mobile:</strong> ${params.get("phone")}</p>
<p><strong>Business:</strong> ${params.get("business")}</p>
<p><strong>Submitted:</strong> ${params.get("timestamp")}</p>
`;