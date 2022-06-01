$(document).ready(function() {
	let score = 0;
	let percentaje = 0; 
	let arrPos = 0;
	const array = [];
	let questions = [
		{
			id: 1,
			title: 'Question 1/10',
			content: 'I have the customer information needed to proactively help customers achieve their goals with Oracle',
			value: null
		},
		{
			id: 2,
			title: 'Question 2/10',
			content: 'Lorem ipsum is color 1?',
			value: null
		},
		{
			id: 3,
			title: 'Question 3/10',
			content: 'Lorem ipsum is color 2?',
			value: null
		},
		{
			id: 4,
			title: 'Question 4/10',
			content: 'Lorem ipsum is color 3?',
			value: null
		},
		{
			id: 5,
			title: 'Question 5/10',
			content: 'I have the customer information needed to proactively help customers achieve their goals with Oracle',
			value: null
		},
		{
			id: 6,
			title: 'Question 6/10',
			content: 'Lorem ipsum is color 4?',
			value: null
		},
		{
			id: 7,
			title: 'Question 7/10',
			content: 'Lorem ipsum is color 5?',
			value: null
		},
		{
			id: 8,
			title: 'Question 8/10',
			content: 'Lorem ipsum is color 6?',
			value: null
		},
		{
			id: 9,
			title: 'Question 9/10',
			content: 'Lorem ipsum is color 7?',
			value: null
		},
		{
			id: 10,
			title: 'Question 10/10',
			content: 'I have the customer information needed to proactively help customers achieve their goals with Oracle.',
			value: null
		},
	];

	$('#title').html(questions[arrPos].title);
	$('#content').html(questions[arrPos].content);

	$('.box').click(function(){
		percentaje+=10;
		score++;

		array.push(Number(this.dataset.score));

		$('#title').html(questions[arrPos].title);
		$('#content').html(questions[arrPos].content);
		$('#percentaje').html(percentaje+ `%`);
		$('#pb-navbar').val(percentaje);
		$('#pb-main').val(percentaje);
		arrPos++;

		let numeros = array;
		let total = numeros.reduce((a, b) => a + b, 0);
		$('#score').html(total);

		if (percentaje > 100){
			percentaje = 0;
			score = 0;
			arrPos = 0;
			total = 0;
			numeros = [];

			$('#percentaje').html(percentaje+ `%`);
			$('#pb-navbar').val(percentaje);
			$('#pb-main').val(percentaje);
			$('#score').html(score);
			$('#title').html(questions[arrPos].title);
			$('#content').html(questions[arrPos].content);
		}
		let totalScore = ((total/50) * 100 );
		if(totalScore > 0 && totalScore <= 30){
			$('#total-score').html('Basic level');
		}else if(totalScore >= 30 && totalScore < 70){
			$('#total-score').html('Intermediate level');
		}else if(totalScore >= 70){
			$('#total-score').html('Advanced level');
		}


	});

});