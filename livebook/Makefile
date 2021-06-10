dev:
	@livebook server --name live@127.0.0.1
server:
	@docker run -p 8080:8080 -u $(id -u):$(id -g) -v ${PWD}:/data livebook/livebook
