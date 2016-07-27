//Cross out clicked li items
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
})

//Delete item if X is clicked
$("ul").on("click", "span", function() {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
})

//Add New To-Do item
$("input[type='text']").on("keypress", function(event) {
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
	}
})

$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle(0);
})