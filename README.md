
# front-sl-challenge

This project is the front-end of the SimplyLatam challenge, built using Angular and stored on Github.


## Authors

- [@HansBukerG](https://www.github.com/HansBukerG)

- [@Linkedin](https://www.linkedin.com/in/hans-buker-guti%C3%A9rrez-653696136/)


## Deployment

To initiate this project, you need to create a folder called environments and an environment.ts file within the ./src directory (which would be located at ./src/environments/environment.ts). The environment.ts file should contain the following code:

export const environment = {
  apiUrl: 'API-URL',
};

Next, you need to run the following commands to install the NODE packages:

npm install

Then, you need to build the Angular project using the command:

ng build

Finally, to start this project, run the command:

ng serve
## Environment Variables

By default, Angular system does not search for a specific URL to execute its commands. However, if you need to define the API_URL parameter, I recommend using the following parameter:

https://localhost:8081



## API Reference

#### Create Company

```http
    POST /api_url/company/post
```
#### Get All Companies

```http
    GET /api_url/company/get
```
#### Get Company by ID

```http
    GET /api_url/company/get/id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | Required. ID of company to get |

#### Delete Company by ID

```http
  DELETE /api_url/company/delete/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Required. ID of company to delete |

#### Create Employee

```http
  POST /api_url/employee/post
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Required. ID of company to delete |

#### Delete Employee by ID

```http
  DELETE /api_url/employee/delete/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Required. ID of employee to delete |

## Links to the Project
 Live url:

  - [https://front-sl-challenge.fly.dev](https://front-sl-challenge.fly.dev)

Github Project:
 - [https://github.com/HansBukerG/front-sl-challenge](https://github.com/HansBukerG/front-sl-challenge)


 


