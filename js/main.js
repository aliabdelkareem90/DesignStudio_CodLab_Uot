
$(function() {
    'use strict'
    //Trigger NiceScroll
    $("html").niceScroll();

    
})

$(function() {
    'use strict'
    $(window).scroll(function(){
        window.console.log($('.navbar').height());
        window.console.log($(window).scrollTop());

        if($(window).scrollTop() >= $('.navbar').height()){
            $('.navbar').addClass('scrolled');
        } else{
            $('.navbar').removeClass('scrolled');
        }
    }) 
})

//Deat with Tabs
$(function() {
    //Select tab on click
    $('.tab-switch li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected')

        //hide all tabs content
        $('.tab-section .tabs-content > div').hide()

        //Show clicked tab contect
        $('.' + $(this).data('class')).show()

    })
})

var vueMessage  = new Vue({
    el: '#review',
    data: {},
    methods: {},
    created: function(){
        getData();
    }
})

function getData() {
    $.ajax({
		url: 'https://jsonplaceholder.typicode.com/posts',
		method: 'GET',
		data: {},
		success: function(posts) {
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/users',
				method: 'GET',
				success: function(users) {

					fillData(posts, users)

				}
			})	
		},
		error: function(err) {
            console.log(err)
		}
	});
  
}

function fillData(posts, users) {
    
        var card = ` 
                    <div class="row cards">
                        <div class="col-4">
                            <div>
                                <img src="img/ali.jpg">
                                <h5 >${ users[0].name }</h5>
                                <h6 >${ users[0].company.name}</h6>
                                <p class="card-text" style="">${ posts[0].body }</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div>
                                <img src="img/ali.jpg">
                                <h5 >${ users[0].name }</h5>
                                <h6 >${ users[0].company.name}</h6>
                                <p class="card-text" style="">${ posts[0].body }</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div>
                                <img src="img/ali.jpg">
                                <h5 >${ users[0].name }</h5>
                                <h6 >${ users[0].company.name}</h6>
                                <p class="card-text" style="">${ posts[0].body }</p>
                            </div>
                        </div>
                    </div>
                   `;

        $('#posts').append(card);

}


    
