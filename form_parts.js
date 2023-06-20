var form_pages= [
{
    "title": "Welcome",
},
{
    "title": "Weekly Sessions"
}

]
var form_items = [
    {"name": "welcome_content",
    "page_id": 0,
    "content": '<span class="content_text">Welcome to the USyd Casual Schedule Self-Check tool. We\'ll ask you a few questions and try to estimate what paycodes you should have in your schedule. If, after using this tool, you think your schedule might not be correct, we\'ll also give you the opportunity to get in touch with an enforcement committe to look into it properly with you.</span>'
},
{"name": "weekly_sessions_question",
"page_id": 1,
"content": '<span class="content_text">How many weekly sessions for tutorials and lectures are you teaching each week?</span>'

},
{
    "name":"weekly_sessions_input",
    "page_id": 1,
    "content":'<span class="content_text">Lectures:  </span><input type="number" id="lecture_number"></input><span class="content_text">Tutorials:  </span><input type="number" id="tute_number"></input>',
    "input_ids": ["lecture_number","tute_number"]
}
]