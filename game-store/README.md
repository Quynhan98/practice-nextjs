# **Practice 3 - Game Store**

## **Overview**

**Build a Game store web application**

## **Requirements**

- **User can login/register and logout**
- **Users can see the list of games**
- **Users can add the game they want to buy at the dashboard or about page**
- **Users can search for games**
- **Users can cancel the game purchase at the dashboard or about page**
- **User can check out the game they have added to cart**
- **User can delete game at cart**
- **User can see total amount when user add games to cart**

## **Target**

- **Understand and apply useContext, useReducer, React Hook Form and state management**
- **Apply Hook: useState, useCallback, memo, React router dom, swr**
- **Apply [JSON Server Auth](https://github.com/jeremyben/json-server-auth)**
- **Animation (optional)**

## **Tech Stack**

- **React ES6**
- **TypeScript**
- **HTML5 / CSS3**
- **Vite**
- **RESTful API**
- **JSON Server Auth**
- **Material UI/Bootstrap**
- **React Hook Form**

## **Prerequisites**

- Node low version is v14.19.3
- If your get error Cannot find module 'node:path' in vite.config.ts please check here: [Link](https://github.com/vitejs/vite/issues/9113)

## **Team size**

- **2 dev:**
  - **Thuan Dang**
  - **Nhan Le**

## **Editor**

- **Visual studio code**

## **Suggestion Design**

- [**View**](https://nekusu.github.io/shopping-cart/#/games)

## **Estimation Document**

- [**Estimate Document Practice 3**](https://www.notion.so/Estimate-Document-Practice-3-69e92ba059564a32ab5f032cb0b17b9e)

## **Component Document**

- [**Component Game store web app**](https://www.notion.so/Component-Game-store-web-app-80a1c19bf04b48ddb1902c0416647b01)

## **How to install and run app**

1. Clone repo:

```
git clone: git@gitlab.asoft-python.com:thuan.dang/react-training.git
```

2. Checkout branch:

```
git checkout feature/practice-three
```

3. Move to `Game Store` folder:

```
cd Game Store
```

4. Install package:

```
yarn install
```

5. Start Project:

```
yarn dev
```

6. Run unit test and coverage:

```
yarn test && yarn test:coverage
```

7. See app:

```
Open localhost:3000 to see the website in the browser you use
```

## **How to get api and run service app**

```
1. In the folder Game Store create file .env.local

2. add to file:
VITE_API_ENDPOINT = "http://localhost:3001"
VITE_API_GAME_ENDPOINT = 'https://api.rawg.io/api'
VITE_API_KEY = 'your key'

3. Get api key from https://rawg.io/apidocs and paste in VITE_API_KEY

4. Run app
```
