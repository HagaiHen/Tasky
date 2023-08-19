# Tasky - Application

![image](https://github.com/HagaiHen/Final-Project/assets/92790326/a99099e6-7f0b-42ad-a79e-3adc19c80db9)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Application Structure

The Controler of the pages transformation is the [Header.js](https://github.com/HagaiHen/Final-Project/blob/main/tasky/src/components/Header/Header.js), It is shows you all of the app's pages and you move from one page to another by clicking it (be aaware that by default the first page is the [Homepage](https://github.com/HagaiHen/Final-Project/blob/main/tasky/src/pages/home/index.js)).<br/>

 The following is a structure diagram for the Website pages shift from the header:<br/>

![image](https://github.com/HagaiHen/Final-Project/assets/92790326/d5139186-af49-4d78-b2ce-6f04bf7489be)

<br/>

Now, for more ditaled components Diagram:

### Home
![image](https://github.com/HagaiHen/Final-Project/assets/92790326/cfa435b7-dc93-4660-9dd0-2d3bf8edf07c)

The [Homepage](https://github.com/HagaiHen/Final-Project/tree/main/tasky/src/pages/home) calls some components such as:
* [ProjectCard](https://github.com/HagaiHen/Final-Project/tree/main/tasky/src/components/ProjectCard).
* [NewProjectCard](https://github.com/HagaiHen/Final-Project/tree/main/tasky/src/components/ProjectCard).
* [CreateProjectModal](https://github.com/HagaiHen/Final-Project/tree/main/tasky/src/components/ProjectModal).
* [ContactsList](https://github.com/HagaiHen/Final-Project/tree/main/tasky/src/components/ContactListSearch).

### Calander
![image](https://github.com/HagaiHen/Final-Project/assets/92790326/d57dda02-a947-4709-80ca-e01a71e26587)

The [Calander Page](https://github.com/HagaiHen/Final-Project/tree/main/tasky/src/pages/calendar) calls some components such as:
* [Calendar](https://github.com/HagaiHen/Final-Project/tree/main/tasky/src/components/Calendar).
* [ProgChart](https://github.com/HagaiHen/Final-Project/tree/main/tasky/src/components/ProgChart).
* [EventOps](https://github.com/HagaiHen/Final-Project/tree/main/tasky/src/components/EventOps).
* [Scheduler](https://github.com/HagaiHen/Final-Project/tree/main/tasky/src/components/Scheduler).



### Backlog
![image](https://github.com/HagaiHen/Final-Project/assets/92790326/660a82b1-7334-4d60-8656-059fdf6b60f5)

The [Backlog Page]() calls some components such as:
* [SideBar](https://github.com/HagaiHen/Final-Project/tree/main/tasky/src/components/SideBar).
* [Tasks](https://github.com/HagaiHen/Final-Project/tree/main/tasky/src/components/Tasks).

### Profile
![image](https://github.com/HagaiHen/Final-Project/assets/92790326/b4a7b97a-c84c-4c1a-8aa6-2e6af3258765)

The [Profile Page](https://github.com/HagaiHen/Final-Project/blob/main/tasky/src/pages/backlog/index.js) calls some components such as:
* [profileScheduler](https://github.com/HagaiHen/Final-Project/blob/main/tasky/src/pages/profile/profileScheduler.js#L96).
* [ProgChart](https://github.com/HagaiHen/Final-Project/tree/main/tasky/src/components/ProgChart).




## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Good start point for react projects and ideas](https://reactjsexample.com/) - an great website for learning and developing react projects. 

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
