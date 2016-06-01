/**
 * Created by Zsori Lukacs Peter on 2016.05.31..
 */
(function () {
    localStorage.id = Date.now();
    document.getElementById("id").innerHTML = localStorage.id;

})();

function addItem(){
    var id = localStorage.id;
    var title = document.getElementById("title").value;
    var statusList = document.getElementById("status_list");
    var status = statusList.options[statusList.selectedIndex].value;
    var description = document.getElementById("desc_text").value;
    var priority = document.getElementById("priority").value;
    var effort = document.getElementById("effort").value;
    var acceptanceCriteria = document.getElementById("acceptance_criteria").value;

    var item = {
        id: id,
        title: title,
        status: status,
        description: description,
        priority: priority,
        effort: effort,
        acceptanceCriteria: acceptanceCriteria
    };

    localStorage.item = JSON.stringify(item);
    alert(localStorage.item);

}