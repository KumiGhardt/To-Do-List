function newItem() {
    let e = $("<li></li>"),
        t = $("input").val();
    if (e.append(t), "" === t) alert("please input a value");
    else {
        $("#list").append(e)
    }
    $("input").val(""), e.on("dblclick", function () {
        e.toggleClass("strike")
    });
    let n = $("<crossOutButton></crossOutButton>");
    n.append(document.createTextNode("X")), e.append(n), n.on("click", function () {
        this.parentElement.remove()
    }), $("#list").sortable()
}