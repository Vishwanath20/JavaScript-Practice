function LoadQuize(data, qNum) {
    //Disabled button.......................
    const items = { ...localStorage }
    objectLength = Object.keys(items).length
    console.log("data length", data.length, "localstorage length:", objectLength)
    if (data.length == objectLength) {

        $("#submitBtn").addClass("btn-display-style")
    }
    else {
     //   $("#submitBtn").addClass("btn-display-none-style")
        $("#nextBtn").addClass("btn-display-style")

    }
    if (qNum == 0) {
        $("#prevBtn").prop("disabled", true);
    }
    else {
        $("#prevBtn").prop("disabled", false);
    }

    $("#questions").text(qNum + 1 + "." + "  " + data[qNum].QuestionNM);
    $("#description").text(data[qNum].QuestionDescription)
    if (data[qNum].QuestionImageID > 0) {
        $("ImageNM").append(`<img src="http://erp.a2pl.in/QuestionImages/${data[qNum].ImageNM}" alt="question image"/>`)
    }
    var obj1data = { ...data[qNum] }
    var x = localStorage.getItem(obj1data.Exam_Has_Candidate_ID);



    delete obj1data.Exam_Has_Candidate_ID
    delete obj1data.QuestionNM


    var ansCount = 1;
    var size = Object.keys(obj1data).length;
    for (var i = 1; i <= 5; i++) {
        var optionImageNM = `option${i}ImageNM`
        var option = `Option${i}`
        if (obj1data[optionImageNM] == null) {
            $("#load-question").append(`
                <input type="radio" name="options" value="${option + "/" + ansCount}" id="${option}" />
                <label>${obj1data[option]}</label><br>
           `)
        }
        else {
            $("#load-question").append(`
            <input type="radio" name="options" value="${optionImageNM + "/" + ansCount}" id="${optionImageNM}"/>
            <img  class="option-image img-thumbnail" src="http://erp.a2pl.in/QuestionImages/${obj1data[optionImageNM]}" alt="Image"/ value="${optionImageNM + "/" + ansCount}"  id="${optionImageNM}">
       `)
        }
        ansCount = ansCount + 1
    }
    $('#question-number-button').html('');
    var keys = Object.keys(localStorage)
    var btnColor = " ";
    for (let j = 0; j < Object.keys(data).length; j++) {
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == data[j].Exam_Has_Candidate_ID) {
                btnColor = "green"
            }
        }
        $('#question-number-button').append(`<button style="background-color:${btnColor}"  type="button" class="btn-xs question-number" onclick="loadIDWiseQuestion(data, ${j})">${j + 1}</button>`)
        btnColor = " ";
    }
    if (x != null) {
        const getId = x.split("/");
        $(`#${getId[0]}`).attr('checked', 'checked');
    }
    $(".my-spinner").addClass("btn-display-none-style")
}
let count = 0;
function loadIDWiseQuestion(data, qId) {
    count = qId
    $("#load-question").html('');
    $('#question-number-button').html('');
    LoadQuize(data, qId)
}


function Next(data, selectedOption) {

    var item1 = 0;
    if (selectedOption != undefined) {
        var seOption = selectedOption.split("/")
        const items = localStorage.getItem(data[count].Exam_Has_Candidate_ID);
        console.log("Local storage", items, "from data", seOption[1])
        if (items != null) {
            item1 = items.split("/")
            item1 = item1[1]
        }

        console.log("Local storage", items, "from data", seOption[1])
        if (item1 != seOption[1]) {

            var time = getTime()
            localStorage.setItem(data[count].Exam_Has_Candidate_ID, selectedOption + "/" + time);
        }
    }


    count = count + 1
    LoadQuize(data, count)
}
function Previous(data, selectedOption) {
    var item1 = 0;
    if (selectedOption != undefined) {
        var seOption = selectedOption.split("/")
        const items = localStorage.getItem(data[count].Exam_Has_Candidate_ID);
        console.log("Local storage", items, "from data", seOption[1])
        if (items != null) {
            item1 = items.split("/")
            item1 = item1[1]
        }

        console.log("Local storage", items, "from data", seOption[1])
        if (item1 != seOption[1]) {

            var time = getTime()
            localStorage.setItem(data[count].Exam_Has_Candidate_ID, selectedOption + "/" + time);
        }
    }
    count = --count
    LoadQuize(data, count)
}
function clearResponse() {
    console.log("unchecked")
    $("#load-question").html(' ')
    LoadQuize(data, count)

}
function getTime() {
    var d = new Date()
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    return time;
}
function preview(data) {
    console.log(data)
}
function submitData() {
    $(".my-spinner").removeClass("btn-display-none-style")
    $(".my-spinner").addClass("btn-display-style")
    const items = { ...localStorage };
    fetch("http://localhost:3000/post-questions", {

        method: "POST",
        body: JSON.stringify({
            items
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json())

        // Displaying results to console
        .then(json => {
            $(".my-spinner").removeClass("btn-display-style")
            $(".my-spinner").addClass(" btn-display-none-style")

            if (json.status == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Good job',
                    text: 'Answer has been submited successful..',
                })
            }
            else {
                $(".my-spinner").removeClass("btn-display-style")
                $(".my-spinner").addClass(" btn-display-none-style")
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Somthing went wrong Please try again..',
                })
            }
        });

}


// Set the recording interval in milliseconds (e.g., 10000 for 10 seconds).
