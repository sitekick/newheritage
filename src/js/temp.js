$(function() {
	
		
		$("#productform select").change(function() {
			
			var sel ="";
			sel += $("#productform select option:selected").val(); 
			
			var products = [];
				products['featured'] = [];
				products['sale'] = [];
			
			$.getJSON('data/products.json', function(data) {
				
				$.each(data.products.product, function (key,value) {
										
					var kv = [];
					
					Object.getOwnPropertyNames(value).forEach(function(val, idx, array) {
						kv[val] = value[val];
					});
					
					
					if(value.featured == true){
						products['featured'].push(kv);
					}
					if(value.sale == true){
						products['sale'].push(kv);
					}
					
				});
				
				$('#products tbody').children('tr').remove();
				
				switch(sel) {
						case 'sale' : 
							buildTable(products['sale']);
							break;						
						case 'featured' : 
							buildTable(products['featured']);
							break;
					}
				
			});
			

		}).change();		
		
	
	function buildTable(arr) {
	
					
				$.each(arr, function (index, value) {
						
				var div = '<tr>' +
				'<td><img src="img/products/' + value.image + '" alt="" /></td><td>' + value.manufacturer + '</td>' +
				'<td>' + value.description + '</td>' +
				'<td>' + value.number + '</td><td>' + value.category + '</td>' +
				'<td>' + value.price + '</td>' +
				'</tr>'
					
				$('#products tbody').append(div);
					
				});
					
					
				$('#products td:nth-child(1),#products td:nth-child(2),#products td:nth-child(3),#products th:nth-child(1),#products th:nth-child(2),#products th:nth-child(3)').hide();
					
				$('#products tbody tr')	.hover(	
					function () {
						activateRevealPanel(this);
							},
					function () {
						deactivateRevealPanel(this);
				});
	}
	
	function activateRevealPanel(el){
			
			$('.products .col1').prepend('<div id="product-details"></div>');
			
			var image = $('td:nth-child(1)', el).html();
			var manufacturer = $('td:nth-child(2)', el).html();
			var description = $('td:nth-child(3)', el).html();
			
			var details = '<div class="product-detail">' +
			'<div class="photo">' + image + '</div><div class="copy"><h5>' + manufacturer + 
			'</h5><p>' + description + '</p></div></div>';
			
			$('#product-details').append(details);
			$('.product-detail').hide().fadeIn( "fast" );
	}
	
	function deactivateRevealPanel(el){
			$('#product-details').remove();
			}
	
		
});