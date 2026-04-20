---
title: "Tennis Video Database"
description: "A full-stack web application for browsing and filtering a curated collection of full-length professional tennis match videos"
custom_link_label: "Live Site"
custom_link: "https://tennisreplay.tv"
github_link: "https://github.com/jefische/tennis-database-java"
updatedDate: "June 20 2025"
badge: "Personal"
heroImage: "/tennis-database.png"
tagsJS: ["React.js"]
tagsCSS: ["Java Spring Boot", "Python Flask", "MySQL", "Docker"]
# order: 2
cssId: ""
---

This full-stack web application is a searchable database of full-length professional tennis match videos sourced from Youtube. Tennis fans enjoy rewatching older professional matches but find it difficult to search for free content online in a systematic way. With [Tennis Replay](https://tennisreplay.tv) users can easily search and filter matches by player names, tournaments, and years to quickly find relevant content.

The frontend is built with **React** + **Typescript** and leverages **Shadcn** with **Tailwind CSS** for modern accessible components. Filtering state and search inputs are managed using React’s native hooks, while all CRUD operations for adding and editing videos utilize **React Hook Form**.

The backend is powered by **Java Spring Boot** and **MySQL**, handling API requests and storing match metadata. Admin login authorization is also implemented using **JWT** and **Spring Security**.

The app is deployed via **fly.io** which uses **Docker** images to define the runtime environment and Firecracker microVMs for deployment.

Finally, there is also a separate microservice developed in **Python** to leverage **LangChain** and incorporate AI-generated match summaries of video transcripts.

Below are screenshots of the main archive section on desktop and mobile.

### Desktop Dark Mode

![](/tennis-database-archive-dark.png)

### Desktop Light Mode

![](/tennis-database-archive-light.png)

### Mobile Dark and Light Modes

<div class="tennis-db-mobile-img-container">
    <img src="/tennis-database-archive-mobile-dark.jpeg" width="365" alt="Mobile dark mode view of archive page" />
    <img src="/tennis-database-archive-mobile-light.jpeg" width="365" alt="Mobile light mode view of archive page" />
</div>
