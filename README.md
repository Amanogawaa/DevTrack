# DevTracker

A multi-tenant project and issue tracking system, built as a structured learning project to strengthen system design, database design, and DevOps/cloud deployment skills. DevTracker follows the core workflow patterns of tools such as Jira and Linear, supporting organizations, projects, issues, and a leader-review approval process.

## Overview

DevTracker allows an organization to manage multiple projects, each containing issues (tickets) that can be created, assigned, commented on, and tracked through a defined lifecycle. A distinguishing feature of DevTracker is its **leader review workflow**: once a member marks an issue as complete, it enters a review state where an organization leader must approve it before it is considered fully done.

This project was designed and built with the explicit goal of closing gaps in the following areas:

- Relational database design and normalization
- System design fundamentals (multi-tenancy, indexing, caching, background jobs, pagination)
- API design and backend architecture
- DevOps practices and cloud deployment on AWS

## Core Features

- **Organizations** — Users can belong to one or more organizations, each with role-based membership (owner, admin, member).
- **Projects** — Each organization can contain multiple projects, identified by a unique project key (e.g., `DEV`).
- **Issues** — The core unit of work. Issues support status tracking, priority levels, assignment, labels, and comments.
- **Leader Review Workflow** — Issues marked complete by a member enter an `IN_REVIEW` state and require approval from an organization leader before being marked `DONE`.
- **Activity Logging** — Status changes, assignments, and reviews are recorded for auditability and future activity-feed functionality.
- **Real-Time Updates** — Issue and board state changes are reflected live across connected clients.

## Tech Stack

### Backend
- **Python 3** with **FastAPI** — asynchronous, type-validated API framework
- **SQLAlchemy 2.0** (async) — ORM and database toolkit
- **Alembic** — database migrations
- **PostgreSQL** — primary relational data store
- **Celery** with **Redis** — background job processing (e.g., notifications)
- **PyJWT / python-jose** — authentication token handling
- **passlib (bcrypt)** — password hashing

### Frontend
- **Next.js** (React, TypeScript)
- **TanStack Query** — server state management and caching
- **shadcn/ui** with Tailwind CSS — UI components and styling

### Infrastructure & DevOps
- **Docker** — containerization of application services
- **GitHub Actions** — continuous integration and deployment pipelines
- **AWS**:
  - **ECS / EC2** — application hosting
  - **RDS (PostgreSQL)** — managed database
  - **ElastiCache (Redis)** — managed caching and queue broker
  - **S3 + CloudFront** — static frontend hosting and content delivery

## Database Design

The schema is structured around the following core entities:

| Entity | Description |
|---|---|
| `Organization` | Top-level tenant. All data is scoped to an organization. |
| `User` | Application user account. |
| `OrgMember` | Join table linking users to organizations with an assigned role. |
| `Project` | A workspace within an organization, containing issues. |
| `Issue` | The core unit of work; supports status, priority, assignment, and review. |
| `Label` | Tags that can be applied to issues. |
| `IssueLabel` | Join table linking issues to labels (many-to-many). |
| `Comment` | User comments attached to an issue. |
| `ActivityLog` | Audit trail of changes made to an issue. |

Key design decisions, including indexing strategy, multi-tenancy enforcement, and normalization trade-offs, are documented in the project's design documentation.

## Development Approach

This project is being developed in phases:

1. **Core CRUD & Schema Design** — Establishing the data model and basic create/read/update/delete operations.
2. **Authentication & Multi-Tenancy** — Implementing JWT-based authentication and organization-scoped data isolation.
3. **System Design Layer** — Introducing background job processing, caching, and cursor-based pagination.
4. **Real-Time Functionality** — Adding WebSocket-based live updates to the issue board.
5. **DevOps & Deployment** — Containerizing the application and deploying it to AWS via a CI/CD pipeline.
