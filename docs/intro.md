---
slug: "/"
sidebar_position: 1
---

# eBPF at scale

bpfdeploy.io allows software organizations to explore, manage and observe their eBPF objects across a fleet of hosts and devices (referred to as **nodes**). We provide visibility for engineers to browse their eBPF program internals, see map dumps, explore object relationships and even audit their kernel version's eBPF security features.

## How it works

The monitoring and management occurs through the installation of bpfdeploy.io's lean agent. The agent is meant to be capable of running on different environments (clouds, bare metal, IOT/embedded devices -- anywhere eBPF intends to run) and was written in [Rust](https://www.rust-lang.org/) to take advantage of the language's approach to performance, conditional compilation (an agent should only have what it needs), and relationship with C (the de facto language of the kernel and eBPF).

The agent also allows for dynamic task queuing from bpfdeploy.io related to eBPF management such as enabling kernel runtime eBPF flags, pinning/unpinning programs, creating & updating maps, profiling and soon much more.  This works through pull-based architecture, so no inbound-connectivity is required.

We also provide a robust API so that teams can automate many of their eBPF-related tasks and monitor changes in their eBPF applications.

## Where are we going?

We are currently heads down on core features but in the near future we intend to do a more in-depth look at areas such as:

- Automated security review of nodes and eBPF programs
- Discovery & deployment of third-party eBPF programs
- Kernel data structure & BTF explorer
- grpc and/or GraphQL APIs & client SDKs for bpfdeploy.io
- Expanding support to other platforms such Windows and FreeBSD

bpfdeploy.io intends to create a world-class developer experience for eBPF. It aims to do this through tooling, education (docs!) and working with the eBPF community to find the optimal solutions.

## We're just getting started

We're focused on building out the primitives needed to make this a reality and because everything we build would not have been possible without open source software we plan to contribute back most of our work. Feel free to reach out to us on [Twitter ](https://twitter.com/bpfdeploy) if you have any questions!
