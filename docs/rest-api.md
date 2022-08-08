---
sidebar_position: 4
---

# REST API

This is a write-up on how to use our API.

This documentation will eventually be public, but we're working on integration with OpenAPI/Swagger specification so that clients can generate & test custom tools in the languages of their choosing.

High-level overview
In bpfdeploy.io, users can join a greater organization. An organization can consist of several teams, where each team can have its own set of hosts (we call them "nodes"). From there each host, through the agent, is queried for its state of eBPF features, programs and maps.

The public API implements a REST-style interface that follows this model.

API
Any text described here with the "{{" or "}}" delimiters is meant to denote template holders and are intended to be filled by the user.

This API predominantly works under the assumption that payload bodies are in JSON. Any API interface with the HTTP methods of POST, PATCH or PUT should be sent with a header explicitly stating "Content-Type: application/json".

Domain
The API is hosted at: https://api.bpfdeploy.io/api/v1
All paths declared here will be assumed to be prepended with that URL.

Currently, the index path (/) returns a 404, but that's a minor bug that will be resolved shortly. All qualified paths described here should work and return 200 when successfully authorized.

Authentication
Once you're logged in, you can provision an API key for your team through bpfdeploy's UI.

With this API key, you'll need to add a header to all calls to authenticate. The header key is "Authorization" and the header value is "apiKey {{API Key}}". As an example, if your API key was 12345 then the full header would read: "Authorization: apiKey 12345".

Interface
GET  /teams/{{teamId}}
Description: Retrieve team details, currently just name. This is required to be the same team ID as what the API key was registered to.

POST  /teams/{{teamId}}
Body schema: { "name": string }
Description: Update team details, currently just name.

DELETE  /teams/{{teamId}}
No body
Description: Delete an entire team, including all hosts and eBPF objects.

GET  /teams/{{teamId}}/bpfprograms
Description: Get all bpf programs across the entire team

GET  /teams/{{teamId}}/bpfmaps
Description: Get all bpf maps across the entire team

GET  /teams/{{teamId}}/nodes
Description: List all nodes part of this team

GET  /teams/{{teamId}}/nodes/{{nodeId}}
Description: Get node with full details on eBPF features

GET  /teams/{{teamId}}/nodes/{{nodeId}}/bpfprograms
Description: Get bpf programs for specific node

GET  /teams/{{teamId}}/nodes/{{nodeId}}/bpfprograms/{{programId}}
Description: Get specific bpf program for specific node

GET  /teams/{{teamId}}/nodes/{{nodeId}}/bpfmaps
Description: Get bpf maps for specific node

GET  /teams/{{teamId}}/nodes/{{nodeId}}/bpfmaps/{{mapId}}
Description: Get specific bpf map for specific node

Example
To retrieve the eBPF programs on a node with id "aws-ec2-58" that belongs to team with id "security36", the full HTTP request details to the production API after generating an API key of "access22" would be:

GET https://api.bpfdeploy.io/api/v1/teams/security36/nodes/aws-ec2-58/bpfprograms
Header: "Authorization: apiKey access22"

In reality, these ids would be randomly generated and won't contain full words.

Design
By design, bpfdeploy.io's products are meant to rely completely on this API and any functionality you see in those components will be available to clients of bpfdeploy.io through the API. If you're interested in a behavior that is not documented here, reach out and we'll add a description to the interface.
