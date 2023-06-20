var current_page = 0

function load_page(){
var page_title = form_pages[current_page]["title"]
var page_content = ""
for (var i = 0; i < form_items.length; i++) {
    if (form_items[i]["page_id"] == current_page) {
        page_content = `<div>${form_items[i]["content"]}</div>`
    }
}

$("#q_heading").text(page_title)
$("#q_content").html(page_content)
if (current_page > 0){
    $("#next_back").html('<button onclick="form_back()">Back</button>')
    $("#next_back").append('<button onclick="form_next()">Next</button>')
} else {
    $("#next_back").html('<input type="button" value="Next" onclick="form_next();">')
}

}
function form_next(){
    current_page += 1
    load_page()
}
function form_back(){
    current_page -= 1
    load_page()
}