# Practice - Shoppe

## **Overview**

**Build a Shoppe store web application**

## Feature:

- **User can see list of products**
- **User can see more products when click button load more**
- **User can see product details**
- **User can see number of products in cart on header (when add to cart)**
- **User can search by name**

## Targets

**Build web app React latest version with Next.js**

- **Build a website with Multi-pages.**
- **Apply features of nextjs: next/link, next/image, etc…**
- **Apply features of nextjs: Api Routing.**
- **Apply Chakra UI, Party town.**

## Tech stacks:

- **React**
- **NextJs (latest version)**
- **Mockapi**
- **Typescript**
- **Storybook**
- **Jest**
- **react-testing-library (coverage >= 80%)**
- **Deploy with Vercel**
- **Party town**
- **Chakra UI**
- **SWR**

## Developer Tools

- **pnpm**
- **eslint**
- **prettier**
- **husky**
- **lint staged**

## **Team size**

- **1 developer:**
  - **Nhan Le**

## **Designs**

- [**Shop**](<https://www.figma.com/file/hzs1lkW5TzXMYaYb0L9AG4/Shoppe-(Community)?node-id=338%3A103>)
- [**Product**](<https://www.figma.com/file/hzs1lkW5TzXMYaYb0L9AG4/Shoppe-(Community)?node-id=50%3A133>)

## **Estimation Document**

[**Estimate Document Practice - Shoppe**](https://www.notion.so/Estimate-Document-Practice-Shoppe-c3ad720801fc4d9f92860b8ed28ad55d)

## **Component Document**

[**Component Shoppe store web app**](https://www.notion.so/Component-Shoppe-store-web-app-15a672db17184773b2abe4de46a5edbd)

## **Prerequisites**

- node: v16.14.0
- pnpm: 7.14.0

## **How to install and run app**

- **Deployed link:** https://shoppe-app-nextjs.vercel.app/

| Command                                                            | Action                                             |
| :----------------------------------------------------------------- | :------------------------------------------------- |
| `git clone git@gitlab.asoft-python.com:nhan.le/react-training.git` | Clone project from gitlab                          |
| `git checkout develop`                                             | Switch to branch develop                           |
| `cd react-training/nextjs/shoppe`                                  | Move to `shoppe` folder                            |
| `pnpm install`                                                     | Installs dependencies                              |
| `pnpm dev`                                                         | Run dev production at `http://localhost:3000`      |
| `pnpm build`                                                       | Run build for production before start production   |
| `pnpm start`                                                       | Run start on production at `http://localhost:3000` |
| `pnpm storybook`                                                   | Start storybook dev at `http://localhost:6006/`    |
| `pnpm build-storybook`                                             | build storybook                                    |
| `pnpm lint`                                                        | run lint-staged check code before commit           |
| `pnpm prepare`                                                     | Install folder .husky                              |
| `pnpm test`                                                        | Testing application                                |
| `pnpm test:coverage`                                               | Testing application and get coverage               |

- **Set up file .env.local**

  - Example:
    ```
      NEXT_PUBLIC_API_ENDPOINT=http://yourApi:3006/
      NEXT_PUBLIC_BASE_URL=http://yourApi:3000/
      NEXT_PUBLIC_TRACKING_ID=YOUR-GOOGLE-ID
    ```
