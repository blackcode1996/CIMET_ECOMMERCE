# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



BASE URL: https://ecommerce-api-8ga2.onrender.com

ENDPOINTS:
all products: [GET]: /api/product


USER:
 - registration: [POST]: /api/user/register
  - fields: firstname, lastname, gender, email, password, role="user"

 - login: [GET]: /api/user/login

 - logout: [POST]: /api/user/logout


CART:
 - add to cart: [POST]: /api/cart/add
  - format to send:
	{
  		"productId": "66f18c7e3ebaaeac81783c2f",
		"quantity": 1,
		"attributes": {
			"color": "red",
			"size": "M"
		}
	}

 - fetch user cart: [GET]: /api/cart/get
