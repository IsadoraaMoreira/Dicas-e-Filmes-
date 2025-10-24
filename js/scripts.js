$(window).on('load', function(){

	"use strict";

	var footer_year = document.getElementById("footer-year");
	if (footer_year) {
		footer_year.innerHTML = new Date().getFullYear();
	}
	
	/* ========================================================== */
	/*   Navigation Background Color                              */
	/* ========================================================== */
	
	$(window).on('scroll', function() {
		if($(this).scrollTop() > 450) {
			$('.navbar-fixed-top').addClass('opaque');
		} else {
			$('.navbar-fixed-top').removeClass('opaque');
		}
	});
 
	
	/* ========================================================== */
	/*   Hide Responsive Navigation On-Click                      */
	/* ========================================================== */
	
	  $(".navbar-nav li a").on('click', function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });

	
	/* ========================================================== */
	/*   Navigation Color                                         */
	/* ========================================================== */
	
	var navbarCollapse = $('#navbarCollapse');

	if (navbarCollapse.length) {
		navbarCollapse.onePageNav({
			filter: ':not(.external)'
		});
	}


	/* ========================================================== */
	/*   SmoothScroll                                             */
	/* ========================================================== */
	
	$(".navbar-nav li a, a.scrool").on('click', function(e) {
		
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		
		$('html,body').animate({scrollTop:target_top -70}, 1000);
			return false;
		
	});	

});
	/* ========================================================== */
	/*   Nav bar Mobile                                           */
	/* ========================================================== */
class MobileNavbar {
	constructor(mobileMenu, navList, navLinks) {
		this.mobileMenu = document.querySelector(mobileMenu);
		this.navList = document.querySelector(navList);
		this.navLinks = document.querySelectorAll(navLinks);
		this.activeClass = "active";


		this.handleClick = this.handleClick.bind(this);
	}

	animate(){
		this.navLinks.forEach((link) => {
			link.style.animation
			? (link.style.animation = "")
			: (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
		})
	}

	handleClick() {
		this.navList.classList.toggle(this.activeClass);
		this.mobileMenu.classList.toggle(this.activeClass);
		this.animate();
	}

	addClickEvent() {
		this.mobileMenu.addEventListener("click", this.handleClick);
	}

	init() {
		if (this.mobileMenu) {
			this.addClickEvent();
		}
		return this;
	}
}

const mobileNavbar = new MobileNavbar(
	".mobile-menu",
	".navbar-menu",
	".navbar-menu li",
);
mobileNavbar.init()

	/* ========================================================== */
	/*   Filtragem de filmes por gênero                           */
	/* ========================================================== */
function filtrarFilmes() {
    const generoSelecionado = document.getElementById('genero').value;
    const filmes = document.querySelectorAll('.filme');

    filmes.forEach(filme => {
        if (generoSelecionado === 'todos') {
            filme.style.display = 'block';
        } else if (filme.classList.contains(generoSelecionado)) {
            filme.style.display = 'block';
        } else {
            filme.style.display = 'none';
        }
    });
}

// 	/* ========================================================== */
// 	/*   Botão de cadastro inválido                               */
// 	/* ========================================================== */
// function clicou(){
//     return alert('Ação inválida no momento')
// }
// let botao = document.getElementById('botao')
// botao.addEventListener('click', clicou)

/* ========================================================== */
/*   Botão de curtidas                                        */
/* ========================================================== */
function likeButton(){
	let heart = document.querySelector('.heart');
	let likes = document.querySelector('.likes');

	if (heart.src.match("images/heart.png")){
		heart.src = "images/heart_red.png";
		likes.innerHTML = "3,457 curtidas";

	}
	else{
		heart.src = "images/heart.png";
		likes.innerHTML = "3,456 curtidas";
	}
}

/* ========================================================== */
/*   Págia de coomentários                                    */
/* ========================================================== */
const form = document.getElementById("commentForm");
const input = document.getElementById("commentInput");
const commentsList = document.getElementById("commentsList");

form.addEventListener("submit", function(e) {
e.preventDefault();

const commentText = input.value.trim();
if (commentText !== "") {
	// Remove texto "sem comentários" se for o primeiro
	const noComments = commentsList.querySelector(".no-comments");
	if (noComments) noComments.remove();

	// Criar novo comentário
	const comment = document.createElement("div");
	comment.classList.add("comment");
	comment.textContent = commentText;

	// Adicionar na lista
	commentsList.appendChild(comment);

	// Limpar campo
	input.value = "";
}
});