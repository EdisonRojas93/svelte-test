<script>
	export let name;
	let age = 33;

	const changeAge = () => {
		age += 1;
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hola {name}!, my age is {age}</h1>
<button
	on:click="{changeAge}"
>
	Change age
</button>
