---
title: Graph Databases
course: DBMS110
---

~.toc

- [Graph Databases](#graph-databases)
  - [Definition](#definition)
  - [Example Databases](#example-databases)
  - [Use Cases](#use-cases)

/~

# Graph Databases

## Definition

**Graph databases** store data in nodes (entities) and edges (relationships between entities).

These are used to model _highly connected_ data, where the edges between entities are just as important as the entities themselves.

Instead of tables, columns, and foreign keys, graph databases have:

**Nodes**: Represent entities (people, products, locations)
**Properties**: Both nodes and edges can have properties (attributes)
**Edges**: Represent relationships between nodes (knows, purchased, located_in)

<figure>
  <img src="https://miro.medium.com/v2/resize:fit:1400/1*C-wxpmuzTOTXRJ9QlaCx5g.png" style="width: 100%;height: auto;">
</figure>

Relationships are first class citizens in a graph database. They can be queried independently of the nodes they connect. Some example queries might be: "Find all friends of friends". This would be very hard to do in a relational database.

## Example Databases

- Neo4j
- Amazon Neptune
- Azure Cosmos DB
- ...

## Use Cases

- Search engines / knowledge bases
- Social networks (Facebook, LinkedIn)
- Recommendation systems (Amazon, Netflix)
- Fraud detection (Fraud detection systems)
