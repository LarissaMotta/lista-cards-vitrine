$(document).ready(function () {
    init();
})

function init() {
    htmlListCard = "";

    for (var dado of dados) {
        htmlListCard += getHtmlCard(dado);
    }

    $("#card-list").html(htmlListCard);
}

function getHtmlCard(obj) {
    var htmlCard = `<div class="col-sm-12 col-lg-3 col-xl-3 mb-5">
                <div class="card">
                    <div class="top-card d-flex">
                        <img src="${obj.imgFundo}" class="card-img-top" alt="...">
                        <div class="media profile position-absolute">
                            <img class="col-3 rounded-circle img-profile" src="${obj.imgPerfil}"
                                alt="Generic placeholder image">
                            <div class="col-9 p-0 profile-text">
                                <h5 class="mt-0 mb-1 font-weight-bold font-small">${obj.nome}</h5>
                                <p class="font-xsmall">${obj.profissao}</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">${obj.titulo}</h5>
                        <p class="card-text">${obj.descricao}</p>
                    </div>
                </div>
            </div>`;

    return htmlCard;
}

