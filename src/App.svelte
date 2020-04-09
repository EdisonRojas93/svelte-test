<script>
	export let name;
	let age = 33;

	$: uppercaseName = name.toUpperCase();

	const changeAge = () => {
		age += 1;
	}

	const changeName = () => {
		name = 'Christian';
	}

	const updateName = (event) => {
		name = event.target.value;
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hola {uppercaseName}!, my age is {age}</h1>
<button on:click="{changeAge}">
	Change age
</button>
<br>
<input type="text" bind:value="{name}">
<!-- <input type="text" value="{name}" on:input="{updateName}"> -->
