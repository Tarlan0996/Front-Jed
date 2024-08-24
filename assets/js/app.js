var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");

var btnemail = document.getElementById("myBtn-Email")

var modal1 = document.getElementById("myModal1");

var btn1 = document.getElementById("myBtn1");

btn.onclick = function () {
    modal.style.display = "block";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

btnemail.onclick = function () {
    modal1.style.display = "none"
    modal.style.display = "block"
}


btn1.onclick = function () {
    modal1.style.display = "block";
    modal.style.display = "none"
}




var modal3 = document.getElementById("myModal3");

var btn3 = document.getElementById("myBtn3");

btn3.onclick = function () {
    modal3.style.display = "block";
}


var modal4 = document.getElementById("myModal4");

var btn4 = document.getElementById("myBtn4");

btn4.onclick = function () {
    modal4.style.display = "block";
    modal3.style.display = "none  "
}



var btntesdiq = document.getElementById('tesdiq')

var tesdiq = document.getElementById('approve-numb-button')

var codeissue = document.getElementById('Code-issue')

var completereg = document.getElementById('complete-registration')

btntesdiq.onclick = function () {
    tesdiq.style.display = "none";
    codeissue.style.display = "none"
    completereg.style.display = "block"
}



function Change() {
    var passwordinput = document.getElementById('PasswordInput')
    var icon = document.getElementById('fa-eye-slash')

    if (passwordinput.type === 'password') {
        passwordinput.type = 'text'
        icon.className = 'fa-regular fa-eye'
    }
    else {
        passwordinput.type = 'password'
        icon.className = 'fa-solid fa-eye-slash'
    }
}

var btnemail = document.getElementById("btnEmail")

var btnphone = document.getElementById("btnPhone")

var mailorphone = document.getElementById("Email-or-Phone")

var phoneormail = document.getElementById("Phone-or-Email")

btnphone.onclick = function () {
    mailorphone.style.display = "none"
    phoneormail.style.display = "block"
}

btnemail.onclick = function () {
    phoneormail.style.display = "none"
    mailorphone.style.display = "block"
}





var btnforgotpassword = document.getElementById("ForgotPasswordBtn")

var modal5 = document.getElementById("myModal5")

btnforgotpassword.onclick = function () {
    modal5.style.display = "block"
    modal.style.display = "none"
}



var modal6 = document.getElementById("myModal6")

var btnupdatepassword = document.getElementById("UpdatePassword")

btnupdatepassword.onclick = function () {
    modal6.style.display = "block"
    modal5.style.display = "none"
}

$(".close").click(function () {
    $(".allmodal").css("display", "none")
})

$("#SendLinkbtn").click(function () {
    $("#myModal6").css("display", "block")
    $("#myModal5").css("display", "none")
    $(".CheckPhoneDescription").css("display", "none")
    $(".CheckEmailDescription").css("display", "block")
})

$("#DavamBtn").click(function () {
    $("#myModal7").css("display", "block")
    $("#myModal6").css("display", "none")
})

$("#New--Password--Button").click(function () {
    $(".Confirm-Password-Button").css("display", "none")
    $("#Success-Password-Change").css("display", "block")
})

$("#CategoriesBtn").click(function () {
    $("#Categories-Menu-Bar").css("display", "block")
})




$("#Search-Input-btn").click(function () {
    $("#Search-More-İnfo").css("display", "block")
})


// var Categoriesopen = getElementById("CategoriesBtn")
// var Categoriesmenubar = getElementById("Categories-Menu-Bar")

// Categoriesopen.onclick = function() {
//     Categoriesmenubar.style.display = "block"
// }

window.addEventListener('click', (e) => {
    const it = document.querySelector('input#Search-Input-btn')
    if (!e.composedPath().includes(it)) {
        $("#Search-More-İnfo").css("display", "none")
    }
})
window.addEventListener('click', (e) => {
    const it = document.querySelector('#CategoriesBtn')
    if (!e.composedPath().includes(it)) {
        $("#Categories-Menu-Bar").css("display", "none")
    }
})




$('#Search-Input-btn').on('keyup', function () {
    $('#Similar-Search').css("display", "block")
})

$('#Search-Input-btn').on('change', function () {
    $('#Similar-Search').css("display", "none")
})

$("#Apartmentsbtn").click(function () {
    $('.KateqoriyaSeçin').css("display", "none")
    $('.Apartments-section').css("display", "block")
})

$("#Yenielanbtn").click(function () {
    $('.KateqoriyaSeçin').css("display", "none")
    $('.PremiumElanlar').css("display", "none")
    $('.ƏnSonElanlar').css("display", "none")
    $('.VipElanlar').css("display", "none")
    $('.SiteDescription').css("display", "none")
    $('.Tags').css("display", "none")
})


function myFunction() {
    document.getElementById("CategoriesDropdowm").classList.toggle("show");
}