const c = require('./config');
const EventEmitter = require('events');
const fs = require('fs');
const Router = require('ahmad-dehestani-router');
const Server = require('ahmad_dehestani_server');
const eventEmitter = new EventEmitter();

c.serverConfig.eventEmitter = eventEmitter;
c.routerConfig.eventEmitter = eventEmitter;
const server = new Server(c.serverConfig);
const router = new Router(c.routerConfig);

server.start();
loadApps();

function loadApps() {
	const serviceNames = fs.readdirSync(c.servicesDirectory);
	serviceNames.forEach((serviceName) => {
		const app = require(`${c.servicesDirectory}/${serviceName}`);
		Object.keys(app.routes).forEach((route) => {
			Object.keys(app.routes[route]).forEach((method) => {
				const routeObj = {
					route,
					method,
					function: app.routes[route][method].function,
					middlewares: app.routes[route][method].middlewares
				};
				router.addRoute(routeObj);
			});
		});
	});
}
