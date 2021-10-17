axios
	.get('https://jsonplaceholder.typicode.om/posts/5')
	.then(response => {
		let data = response.data;
		if (response.status == 200) {
			document.getElementById('get-title').innerHTML = data.title;
			document.getElementById('get-description').innerHTML = data.body;
		}
        else{
            document.getElementById('get-title').innerHTML =
			'Sorry! Server is not working';
		document.getElementById('get-description').innerHTML =
			'Sorry! Server is not working';
        }
	})
	.catch(error => {
		window.location.href="hello.com"
	});
