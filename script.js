window.onload = () =>{
    let messages = [];
    const messageIn = document.getElementById("messageIn");
    const messageOut = document.getElementById("messageOut");

    document.getElementById("submitMessage").onclick=() =>{
        //adding input value to array
        if (messageIn.value == "" || messageIn.value == " "  ){
            alert('Please enter a valid message.');
        }
        else{
            messages.push(messageIn.value);
            //Clear input space
            messageIn.value = "";
            // Show output
            messageOut.innerHTML += `<p class="font-weight-bold mb-2 text-capitalize border 
            rounded text-break text-monospace py-3 px-3"> ${messages[messages.length -1]}</p>`;
        }
    };

}