document.addEventListener("DOMContentLoaded", () => {

    const marital = document.getElementById("marital");
    const spouseField = document.getElementById("spouseField");

    function toggleSpouseField() {

        if (marital.value === "Single") {

            spouseField.style.display = "none";
            document.getElementById("spouse").value = "";

        } else {

            spouseField.style.display = "flex";

        }
    }

    marital.addEventListener("change", toggleSpouseField);

    toggleSpouseField();

});

function sendWhatsApp() {

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!name) {
        alert("Please enter Customer Name");
        return;
    }

    if (!mobile) {
        alert("Please enter Mobile Number");
        return;
    }

    if (!address) {
        alert("Please enter Current Address");
        return;
    }

    const btn = document.getElementById("sendBtn");

    btn.disabled = true;
    btn.innerText = "Opening WhatsApp...";

    const msg =

`👉🏻Customer name: ${document.getElementById("name").value}


👉🏻mob no: ${document.getElementById("mobile").value}
👉🏻mother name: ${document.getElementById("mother").value}

👉🏻 married/single: ${document.getElementById("marital").value}

👉🏻if married spouse name: ${document.getElementById("spouse").value}

👉🏻current address; at:- ${document.getElementById("address").value}

👉🏻office address: ${document.getElementById("officeAddress").value}

👉🏻Own/rent: ${document.getElementById("ownership").value}

👉🏻 personal mail id: ${document.getElementById("email").value}


👉🏻two references

1 Name-- ${document.getElementById("ref1name").value}
Mob-- ${document.getElementById("ref1mob").value}
Address-- ${document.getElementById("ref1addr").value}


2 Name-- ${document.getElementById("ref2name").value}
Mob-- ${document.getElementById("ref2mob").value}
Address-- ${document.getElementById("ref2addr").value}
`;

    const whatsappUrl =
        "https://wa.me/919980169238?text=" +
        encodeURIComponent(msg);

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {

        btn.disabled = false;
        btn.innerText = "Send to WhatsApp";

    }, 1500);
}