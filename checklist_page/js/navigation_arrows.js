function navigate(direction) {
    const navElem = document.querySelector('.form-nav .active a');
    let page_number = Number(navElem.getAttribute('page'));
    if (direction == 'forward'){
        if (page_number ==19){page_number=0};
        document.querySelector(".form-nav [page='" + (page_number + 1) +"']").click();
    }else{
        if (page_number ==1){page_number=20};
        document.querySelector(".form-nav [page='" + (page_number - 1) +"']").click();
    }
}