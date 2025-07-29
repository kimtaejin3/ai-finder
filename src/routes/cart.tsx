import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cart")({
	component: Cart,
});

function Cart() {
	return <div className="p-2">Hello from Cart!</div>;
}
