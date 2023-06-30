var form_pages = [
{
    "title": "Welcome",
},
{
    "title": "Union Membership"
},
{
    "title": "Weekly Sessions"
},
{
    "title": "PhD"
},
{
    "title":"Marking Level"
}
]
var form_items = [
    {"name": "welcome_content",
    "page_id": 0,
    "content": '<span class="content_text">Welcome to the USyd Casual Schedule Self-Check tool. We\'ll ask you a few questions and try to estimate what paycodes you should have in your schedule. If, after using this tool, you think your schedule might not be correct, we\'ll also give you the opportunity to get in touch with an enforcement committe to look into it properly with you.</span>'
},
{"name": "weekly_sessions_question",
"page_id": 2,
"content": '<span class="content_text">How many weekly sessions for tutorials and lectures are you teaching each week?</span>'

},
{
    "name":"weekly_sessions_input",
    "page_id": 2,
    "content":'<span class="content_text">Lectures:  </span><input type="number" id="lecture_number"></input><span class="content_text">Tutorials:  </span><input type="number" id="tute_number"></input>',
    "input_ids": ["lecture_number","tute_number"]
},
{
    "name":"phd_question",
    "page_id": 3,
    "content":'<span class="content_text">Do you have a PhD?  </span><select id="phd_check"><option value="Yes">Yes</option><option value="No">No</option></select>',
    "input_ids": ["phd_check"]
},
{
    "name":"marking_hours_text",
    "page_id": 4,
    "content":'<span class="content_text">Marking for casuals is split into two categories. The higher category, "Supervisory Examiner" marking is, according to the latest guidelines from management, to be used when marking requires you to "exercise a significant level of academic judgement". It specifically lists two main scenarios, providing detailed feedback on work written at an honours or postgraduate level (4xxx and above), as well as working as the lead marker in a group of markers, or moderating the marking of an assessment (typically only necessary in much larger units). <br /> The other category, "Routine" marking, covers the rest of cases, namely all marking at 3xxx level and below. <br /> The union is fighting to expand the coverage of the higher category.</span>'
},
{  
    "name":"marking_hours_question",
    "page_id": 4,
    "content":'<span class="content_text">Based on the above description, which marking category do you believe your marking will fit into? </span><select id="marking_level"><option value="Routine">Routine</option><option value="Supervisor">Supervisor</option></select>',
    "input_ids":["marking_level"]
},
{
"name":"union_question",
"page_id": 1,
"content":'<span class="content_text">Are you a member of the NTEU?  </span><select id="union_check"><option value="Yes">Yes</option><option value="No">No</option></select>',
"input_ids": ["union_check"]
}
]